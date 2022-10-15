// get elements from page
//should be fine here since no elements are ever added to or removed from the DOM after inital load
const slowMaxSpeedBox = document.getElementById('slow-max-speed-box');
const fastMinSpeedBox = document.getElementById('fast-min-speed-box');
const slowMaxSpeedOutput = document.getElementById('slow-max-speed');
const fastMinSpeedOutput = document.getElementById('fast-min-speed');
const recommendationOutput =  document.getElementById('recommendation');

const slowerUnitSpeedInput = document.getElementById('slow-unit-speed');
const fasterUnitSpeedInput = document.getElementById('fast-unit-speed');
const slowerUnitPushInput = document.getElementById('slow-unit-push');
const fasterUnitPushInput = document.getElementById('fast-unit-push');
const fasterUnitTurnsInput = document.getElementById('fast-unit-turns');

// style output text and outlines
updateClasses = (correctTune = false) => {
    if (correctTune) {
        slowMaxSpeedBox.classList.replace('border-danger', 'border-success');
        slowMaxSpeedOutput.classList.replace('text-danger', 'text-success');

        fastMinSpeedBox.classList.replace('border-danger', 'border-success');
        fastMinSpeedOutput.classList.replace('text-danger', 'text-success');

    } else {
        slowMaxSpeedBox.classList.replace('border-success', 'border-danger');
        slowMaxSpeedOutput.classList.replace('text-success', 'text-danger');

        fastMinSpeedBox.classList.replace('border-success', 'border-danger');
        fastMinSpeedOutput.classList.replace('text-success', 'text-danger');
    }
}

const resolve = () => {
    // fetch input values
    const slowerUnitSpeed = Number(slowerUnitSpeedInput.value);
    const slowerUnitPush = Number(slowerUnitPushInput.value);
    
    const fasterUnitSpeed = Number(fasterUnitSpeedInput.value);
    const fasterUnitPush = Number(fasterUnitPushInput.value);
    const fasterUnitTurns = Number(fasterUnitTurnsInput.value);
    
    /* 
     * FORMULA: fast Speed = slow Speed * fast CR / slow CR
     *
     * 0.95 used as base for slowerUnitCR to ensure that in the worst case (slow unit +5% CR, fast unit +0% CR)
     * the turn order will still hold 100% of the time
     */ 
    const slowerUnitCR = 0.95 - (slowerUnitPush / 100);
    const fasterUnitCR = (1 * fasterUnitTurns) - (fasterUnitPush / 100);
    const CRRatio = fasterUnitCR / slowerUnitCR;

    // take the floor of max speed and ceil of min speed for safety since we can't have fractional speed
    const slowUnitMaxSpeed = Math.floor(fasterUnitSpeed / CRRatio);
    const fastUnitMinSpeed =  Math.ceil(slowerUnitSpeed * CRRatio);

    // set output text to 'Impossible' in edge cases
    const formattedMaxSpeed = slowUnitMaxSpeed <= 0 || slowUnitMaxSpeed == 'Infinity' ? 'Impossible' : slowUnitMaxSpeed.toString();
    const formattedMinSpeed = fastUnitMinSpeed <= 0 || fastUnitMinSpeed == 'Infinity' ? 'Impossible' : fastUnitMinSpeed.toString();

    let recommendation = '';

    // generate recommendation and update styling accordingly
    if (slowerUnitSpeed > slowUnitMaxSpeed || fasterUnitSpeed < fastUnitMinSpeed) {
        updateClasses(false);
        recommendation = 'Units are improperly tuned, and the desired turn order isn\'t guaranteed.\n' +
                         (formattedMaxSpeed !== 'Impossible' ? `Slower Unit needs at least ${slowerUnitSpeed - slowUnitMaxSpeed} less speed` : '') +
                         (!(formattedMaxSpeed === 'Impossible' || formattedMinSpeed === 'Impossible') ? ' or ' : '') +
                         (formattedMinSpeed !== 'Impossible' ? `Faster Unit needs at least ${fastUnitMinSpeed - fasterUnitSpeed} more speed.` : '');
    } else {
        updateClasses(true);
        recommendation = 'Units are properly tuned, and the Faster Unit will always move first.'
        if (slowerUnitSpeed < slowUnitMaxSpeed || fasterUnitSpeed > fastUnitMinSpeed) {
            recommendation += `\nSlower Unit can have up to ${slowUnitMaxSpeed - slowerUnitSpeed} more speed` +
                              ` or Faster Unit can have up to ${fasterUnitSpeed - fastUnitMinSpeed} less speed.`;
        }
    }
  
    slowMaxSpeedOutput.innerText = formattedMaxSpeed;
    fastMinSpeedOutput.innerText = formattedMinSpeed;
    recommendationOutput.innerText = recommendation;
  }
