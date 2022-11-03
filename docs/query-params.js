/*
 * Helper script to move info between query params and forms.
 *
 * In the page's .js, fetch any inputs and their sliders from the dom, and name them [param]Input and [param]Slide.
 * e.g slowerSpeedInput & slowerSpeedSlide
 * 
 * Vars managed only in this .js file:
 * queryParams: URLSearchParams
 * pendingUpdate: Number millis time of last input
 * 
 * Vars to be set in page .js files:
 * formDefaults: String -> value map of form default values
 * numberParams: String[] of params corresponding to numerical inputs
 * boolParams: String[] of params corresponding to boolean inputs
 * paramCallbacks: String -> function map for params whose value may require additional functions
 * page: String of the page name to send in the dataLayer event
 */

// initial setup
let formDefaults
let numberParams = []
let boolParams = [];
let paramCallbacks = {};
let queryParams;
let pendingUpdate;
let page;

// get values from the various inputs
const getInputValues = () => {
    const inputValues = {};
    numberParams.forEach((param) => {
        inputValues[param] = Number(eval(`${param}Input`)?.value || formDefaults[param])
    });

    boolParams.forEach((param) => {
        inputValues[param] = eval(`${param}Input`)?.checked || false;
    });

    return inputValues;
}

/* 
 * Loads query param values from the url into the form.
 * Call this function after fetching relevant inputs from the dom and
 * assigning them to variables as described above
 */
const loadQueryParams = () => {
    const paramsWithCallbacks = Object.keys(paramCallbacks);
    try {
        queryParams = new URLSearchParams(window.location.search);
        // Fill form values from queryParams
        numberParams.forEach((param) => {
            let paramVal = queryParams.get(param);
            if (paramVal && paramVal !== formDefaults[param]) {
                eval(`${param}Input`).value = Number(paramVal);
                eval(`${param}Slide`).value = Number(paramVal);

                // check for any callbacks that need to be executed
                if (paramsWithCallbacks.includes(param)) {
                    paramCallbacks[param]();
                }
            }
        });
        
        boolParams.forEach((param) => {
            let paramVal = queryParams.get(param)?.toLowerCase() === 'true';
            if (paramVal && paramVal !== formDefaults[param]) {
                eval(`${param}Input`).checked = true;
    
                // check for any callbacks that need to be executed
                if (paramsWithCallbacks.includes(param)) {
                    paramCallbacks[param]();
                }
            }
        });
        
        // push event to dataLayer
        const queryString = queryParams.toString()
        if (queryString.length) {
            window.dataLayer.push({
                'event': 'loaded_query_params',
                'page': page,
                'loaded_params': queryString
            });
        }
    } catch (error) {  // probably only going to reach here on some ancient browser that won't load the site properly anyway
        console.log(`Could not load queryParams: ${error}`);
    }
}

/*
 * Call this when the form is updated, probably at the end of resolve().
 */
const formUpdated = () => {
    if (queryParams) {
        if (pendingUpdate === undefined) { // don't queue an update on the initial load
            pendingUpdate = null;
        } else if (pendingUpdate) {
            pendingUpdate = Date.now();
        } else {
            updateQueryParamsWhenStable();
        }
    }
}

/*
 * Puts form values in queryParams after debouncing input.
 */ 
const updateQueryParamsWhenStable = async () => {

    // debounce input for 1 second then update form values when stable
    pendingUpdate = Date.now();
    while (Date.now() - pendingUpdate < 1000) {
        await new Promise(r => setTimeout(r, 1000));
    }

    const inputValues = getInputValues();
    // Update queryParams from form values
    numberParams.forEach((param) => {
        if (inputValues[param] !== formDefaults[param]) {
            queryParams.set(param, inputValues[param]);
        } else {
            queryParams.delete(param);
        }
    });
    
    boolParams.forEach((param) => {
        if (inputValues[param] !== formDefaults[param]) {
            queryParams.set(param, inputValues[param]);
        } else {
            queryParams.delete(param);
        }
    });

    // finally, update the url with new queryparams (using pushState to avoid actually loading the page again)
    if (window.history.pushState) {
        const newURL = new URL(window.location.href);
        newURL.search = queryParams.toString();
        window.history.pushState({ path: newURL.href }, '', newURL.href);
    }
    pendingUpdate = null;
}