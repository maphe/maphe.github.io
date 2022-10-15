const resolve = () => {
    const slowerUnitSpeed = Number(document.getElementById('slow-unit-speed').value);
    const fasterUnitSpeed = Number(document.getElementById('fast-unit-speed').value);
    const slowerUnitPush = Number(document.getElementById('slow-unit-push').value);
    const fasterUnitPush = Number(document.getElementById('fast-unit-push').value);
    const fasterUnitTurns = Number(document.getElementById('fast-unit-turns').value);
    
    // fast Speed = slow Speed * Unit CR / Target CR
    const slowerUnitCR = 0.95 - slowerUnitPush / 100;
    const fasterUnitCR = (1 * fasterUnitTurns) - fasterUnitPush / 100;
    const CRRatio = fasterUnitCR / slowerUnitCR;

    const slowUnitMaxSpeed = Math.max(Math.floor(fasterUnitSpeed / CRRatio), 0);
    const fastUnitMinSpeed =  Math.max(Math.ceil(slowerUnitSpeed * CRRatio), 0);

    let recommendation = '';
  
    document.getElementById('slow-max-speed').innerText = slowUnitMaxSpeed.toString();
    document.getElementById('fast-min-speed').innerText = fastUnitMinSpeed.toString();
    document.getElementById('recommendation').innerText = recommendation;
  }