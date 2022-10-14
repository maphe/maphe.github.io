

const resolve = () => {
  const hitChance = Number(document.getElementById('hit-chance').value)/100;
  const procChance = Number(document.getElementById('effect-chance').value)/100;
  const eff = Number(document.getElementById('effectiveness').value)/100;
  const effRes = Number(document.getElementById('effect-resistance').value)/100;

  const landChance = Math.max(Math.min(1 + eff - effRes, 0.85), 0);
  const resistChance = 1 - landChance;

  const inflictChance = hitChance * procChance * landChance;

  document.getElementById('passing-res').innerText = Math.round(landChance*100).toString();
  document.getElementById('resist').innerText = Math.round(resistChance*100).toString();
  document.getElementById('landing').innerText = Math.round(inflictChance*100).toString();
}