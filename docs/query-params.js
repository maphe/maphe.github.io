/*
 * Helper script to move info between query params and forms.
 *
 * In the page's .js, fetch any inputs and their sliders from the dom, and name them [param]Input and [param]Slide.
 * e.g slowerSpeedInput & slowerSpeedSlide
 * 
 * Vars managed only in this .js file:
 * queryParams: URLSearchParams
 * updateRequestTime: Number millis time of last input
 * 
 * Vars to be set in page .js files:
 * formDefaults: String -> value map of form default values
 * numberParams: String[] of params corresponding to numerical inputs
 * boolParams: String[] of params corresponding to boolean inputs
 * page: String of the page name to send in the dataLayer event
 */

// initial setup
let formDefaults;
let selectorParams = [];
let numberParams = [];
let boolParams = [];
let queryParams;
let updateRequestTime;
let page;
let loadingQueryParams = true;
let useFormElements = false;

window.addEventListener('load', async () => {
    /*
     * Timeout just in case, to help avoid a race condition.
     *
     * In testing, the DOMContentLoaded listener function in form.js takes around 50ms to execute on average.
     * Maximally, it took 92ms to complete. Timeout for 115ms to ensure form.js is finished before loading queryParams.
     * Never saw an issue while not using this timeout, but may happen on a slower device.
     */
    await new Promise(resolve => {setTimeout(() => {resolve();}, 115);});
    loadQueryParams();
});

// get values from the various inputs
const getInputValues = () => {
    const inputValues = {};

    selectorParams.forEach((param) => {
        inputValues[param] = Function(`"use strict";return ${param}Selector`)()?.value || formDefaults[param];
    });

    boolParams.forEach((param) => {
        inputValues[param] = Function(`"use strict";return ${param}Input`)()?.checked || false;
    });

    numberParams.forEach((param) => {
        inputValues[param] = Number(Function(`"use strict";return ${param}Input`)()?.value || formDefaults[param])
    });

    if (page === 'dmg_calc') {
        for (let i = 1; i < 4; i++ ) {
            const mola = Number(document.getElementById(`molagora-s${i}`)?.value || -1);
            if (mola > -1) {
                inputValues[`molagora-s${i}`] = mola;
            }
        }
    
        (heroes[inputValues.hero]?.form || []).forEach((param) => {
            const isBoolean = param.type === 'checkbox'
            const defaultVal =  isBoolean ? param.default || false : param.default;
            const paramVal = isBoolean ? document.getElementById(param.id)?.checked : Number(document.getElementById(param.id)?.value || defaultVal);
            inputValues[param.id] = paramVal;
        });
    
        inputValues['artifact-lvl'] = Number(document.getElementById('artifact-lvl')?.value || '30');
    
        (artifacts[inputValues.artifact]?.form || []).forEach((param) => {
            const isBoolean = param.type === 'checkbox';
            const defaultVal =  isBoolean ? param.default || false : param.default;
            const paramVal = isBoolean ? document.getElementById(param.id)?.checked : Number(document.getElementById(param.id)?.value || defaultVal);
            inputValues[param.id] = paramVal;
        });
    }
    return inputValues;
}

/* 
 * Loads query param values from the url into the form.
 * Call this function after fetching relevant inputs from the dom and
 * assigning them to variables as described above
 */
const loadQueryParams = async () => {
    // const paramsWithCallbacks = Object.keys(paramCallbacks);

    try {
        queryParams = new URLSearchParams(window.location.search);

        // Fill form values from queryParams
        for (const param of selectorParams) {
            let paramVal = queryParams.get(param);
            if (paramVal && paramVal !== formDefaults[param]) {
                const element = Function(`"use strict";return ${param}Selector`)()
                element.value = paramVal;
                const event = new Event('change');
                element.dispatchEvent(event);
                // element.onchange(paramVal); // number is slightly wrong after loading hero from param and also it doesn't show the hero selected in selector
                $(`#${element.id}`).selectpicker('refresh');
            }
        }

        for (const param of boolParams) {
            let paramVal = queryParams.get(param)
            if (paramVal !== null) {
                paramVal = queryParams.get(param)?.toLowerCase() === 'true';
                if (paramVal && paramVal !== (formDefaults[param] || false)) {
                    const element = Function(`"use strict";return ${param}Input`)();
                    element.checked = paramVal;
                    const event = new Event('change');
                    element.dispatchEvent(event);
                }
            } 
        }

        for (const param of numberParams) {
            // avoid weird states by removing incompatible params if the applicable selector is filled
            if ((queryParams.get('atkPreset') && (param === 'atk' || param === 'crit')) || (queryParams.get('defPreset') && param === 'def') || (queryParams.get('dmgReducPreset') && param === 'dmgReduc')) {
                queryParams.delete(param);
                if (window.history.pushState) {
                    const newURL = new URL(window.location.href);
                    newURL.search = queryParams.toString();
                    window.history.pushState({ path: newURL.href }, '', newURL.href);
                }
                continue;
            }
            let paramVal = queryParams.get(param);
            if (paramVal && paramVal !== formDefaults[param].toString()) {
                const element = Function(`"use strict";return ${param}Input`)();
                element.value = Number(paramVal);
                Function(`"use strict";return ${param}Slide`)().value = Number(paramVal);
            }
        }

        if (page === 'dmg_calc') {
            const heroElement = document.getElementById('hero');
            const artifactElement = document.getElementById('artifact');
            
            // load in mola params
            for (let i = 1; i < 4; i++ ) {
                let paramVal = queryParams.get(`molagora-s${i}`);

                const defaultVal = heroes[heroElement.value]?.skills[`s${i}`]?.enhance.length;

                if (paramVal !== null && defaultVal !== undefined && paramVal !== defaultVal) {
                    const element = document.getElementById(`molagora-s${i}`);
                    
                    element.value = Number(paramVal);
                    const slideElement = document.getElementById(`molagora-s${i}-slide`);
                    slideElement.value = Number(paramVal);
                    const event = new Event('change');
                    element.dispatchEvent(event);
                }
            }

            // fill hero specific fields
            for (const heroSpecific of heroes[heroElement.value]?.form || []) {
                const isBoolean = heroSpecific.type === 'checkbox';
                let paramVal = queryParams.get(heroSpecific.id);

                if (isBoolean && paramVal !== null) {
                    paramVal = paramVal?.toLowerCase() === 'true';
                }

                const defaultVal = isBoolean ? heroSpecific.default || false : heroSpecific.default.toString();

                if (paramVal !== null && paramVal !== defaultVal) {
                    const element = document.getElementById(heroSpecific.id);
                    
                    if (isBoolean) {
                        element.checked = paramVal;
                        const event = new Event('change');
                        element.dispatchEvent(event);
                    } else {
                        element.value = Number(paramVal);
                        const slideElement = document.getElementById(`${heroSpecific.id}-slide`);
                        slideElement.value = Number(paramVal);
                        const event = new Event('change');
                        element.dispatchEvent(event);
                    }
                }
            }

            // fill artifact-specific fields
            const artifactLevel = queryParams.get('artifact-lvl');
            if (artifactLevel !== null && artifactLevel !== '30' && 0 <= Number(artifactLevel) && Number(artifactLevel) <= 30) {
                const element = document.getElementById('artifact-lvl');                    
                element.value = Number(artifactLevel);
                const slideElement = document.getElementById(`${'artifact-lvl'}-slide`);
                slideElement.value = Number(artifactLevel);
                const event = new Event('change');
                element.dispatchEvent(event);
            }

            for (const artiSpecific of artifacts[artifactElement.value]?.form || []) {
                const isBoolean = artiSpecific.type === 'checkbox';
                let paramVal = queryParams.get(artiSpecific.id);

                if (isBoolean && paramVal !== null) {
                    paramVal = paramVal?.toLowerCase() === 'true';
                }

                const defaultVal = isBoolean ? artiSpecific.default || false : artiSpecific.default.toString();

                if (paramVal !== null && paramVal !== defaultVal) {
                    const element = document.getElementById(artiSpecific.id);
                    
                    if (isBoolean) {
                        element.checked = paramVal;
                        const event = new Event('change');
                        element.dispatchEvent(event);
                    } else {
                        element.value = Number(paramVal);
                        const slideElement = document.getElementById(`${artiSpecific.id}-slide`);
                        slideElement.value = Number(paramVal);
                        const event = new Event('change');
                        element.dispatchEvent(event);
                    }
                }
            }
        }
        
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
    loadingQueryParams = false;

    resolve();
    $('.initial-hide').removeClass('initial-hide')
    $('.initial-show').hide()
}

/*
 * Call this when the form is updated, probably at the end of resolve().
 */
const formUpdated = () => {
    if (queryParams) {
        if (updateRequestTime) {
            updateRequestTime = Date.now();
        } else if (updateRequestTime === null) {
            updateQueryParamsWhenStable(useFormElements);
        } else {
            updateRequestTime = null; // don't queue an update on the initial load
        }
    }
}

/*
 * Puts form values in queryParams after debouncing input.
 */ 
const updateQueryParamsWhenStable = async (updateURL=false) => {

    // debounce input then update when stable. 1 second if updating URL, else 150ms.
    updateRequestTime = Date.now();
    debounceTime = updateURL ? 1000 : 150;
    while (Date.now() - updateRequestTime < debounceTime) {
        await new Promise(r => setTimeout(r, debounceTime));
    }

    const inputValues = getInputValues();

    // Update queryParams from form values
    selectorParams.forEach((param) => {
        if (inputValues[param] !== formDefaults[param]) {
            queryParams.set(param, inputValues[param]);
        } else {
            queryParams.delete(param);
        }
    });

    boolParams.forEach((param) => {
        if (inputValues[param] !== (formDefaults[param] || false)) {
            queryParams.set(param, inputValues[param]);
        } else {
            queryParams.delete(param);
        }
    });

    for (const param of numberParams) {
        if (inputValues[param] !== formDefaults[param]) {
            // avoid weird states by removing incompatible params if the applicable selector is filled
            if ((inputValues['atkPreset'] && (param === 'atk' || param === 'crit')) || (inputValues['defPreset'] && param === 'def') || (inputValues['dmgReducPreset'] && inputValues['dmgReducPreset'] !== 'none' && param === 'dmgReduc')) {
                queryParams.delete(param);
                continue;
            }
            queryParams.set(param, inputValues[param]);
        } else {
            queryParams.delete(param);
        }
    }

    if (page === 'dmg_calc') {
        const heroElement = document.getElementById('hero');
        const artifactElement = document.getElementById('artifact');

        for (let i = 1; i < 4; i++ ) {

            const defaultVal = heroes[heroElement.value]?.skills[`s${i}`]?.enhance.length;

            if (defaultVal !== undefined && inputValues[`molagora-s${i}`] !== defaultVal) {
                queryParams.set(`molagora-s${i}`, inputValues[`molagora-s${i}`]);
            } else {
                queryParams.delete(`molagora-s${i}`);
            }
        }

        // fill hero specific fields
        for (const heroSpecific of heroes[heroElement.value]?.form || []) {
            const heroDefault = typeof heroSpecific.default === 'function' ? heroSpecific.default() : heroSpecific.default;
            const isBoolean = heroSpecific.type === 'checkbox';
            const defaultVal = isBoolean ? heroDefault || false : heroDefault;

            if (inputValues[heroSpecific.id] !== defaultVal) {
                queryParams.set(heroSpecific.id, inputValues[heroSpecific.id]);
            } else {
                queryParams.delete(heroSpecific.id);
            }
        }

        // TODO: fix hero specific shit defaults getting setnt to params
        // fill artifact specific fields
        if (inputValues['artifact-lvl'] !== 30) {
            queryParams.set('artifact-lvl', inputValues['artifact-lvl']);
        } else {
            queryParams.delete('artifact-lvl');
        }

        for (const artiSpecific of artifacts[artifactElement.value]?.form || []) {
            
            const isBoolean = artiSpecific.type === 'checkbox';
            const artidefault = typeof artiSpecific.default === 'function' ? artiSpecific.default() : artiSpecific.default;
            const defaultVal = isBoolean ? artidefault || false : artidefault;
            if (inputValues[artiSpecific.id] !== defaultVal) {
                queryParams.set(artiSpecific.id, inputValues[artiSpecific.id]);
            } else {
                queryParams.delete(artiSpecific.id);
            }
        }
    }

    console.log(queryParams.toString())
    const shareButton = document.getElementById('share-button-text');
    if (shareButton) {
        shareButton.innerText = 'Share';
    }

    // finally, update the url with new queryparams (using pushState to avoid actually loading the page again)
    if (window.history.pushState) {
        const newURL = new URL(window.location.href);
        if (updateURL) {
            newURL.search = queryParams.toString();
            window.history.pushState({ path: newURL.href }, '', newURL.href);
        } else if (newURL.search) {
            // clear query params if form updates
            newURL.search = '';
            window.history.pushState({ path: newURL.href }, '', newURL.href);
        }
        
    }
    updateRequestTime = null;
}

// delete the specified params (such as when changing a hero or arti)
const deleteParams = (paramsToDelete) => {
    (paramsToDelete || []).forEach((param) => {
        queryParams.delete(param);
    });
}

const copyLinkToClipboard = () => {
    const linkURL = new URL(window.location.href);
    linkURL.search = queryParams.toString();
    console.log(typeof linkURL)
    navigator.clipboard.writeText(linkURL.href);

    const shareButton = document.getElementById('share-button-text');
    if (shareButton) {
        shareButton.innerText = 'Link Copied!';
    }

    window.dataLayer.push({
        'event': 'shared_query_params',
        'page': page,
        'shared_params': linkURL.search
    });
}