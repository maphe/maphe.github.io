// set up vars for query params
formDefaults = {
  'hitChance': 100,
  'procChance': 100,
  'eff': 0,
  'effRes': 0,
}

const hitChanceInput = document.getElementById('hit-chance');
const procChanceInput = document.getElementById('effect-chance');
const effInput = document.getElementById('effectiveness');
const effResInput = document.getElementById('effect-resistance');
const hitChanceSlide = document.getElementById('hit-chance-slide');
const procChanceSlide = document.getElementById('effect-chance-slide');
const effSlide = document.getElementById('effectiveness-slide');
const effResSlide = document.getElementById('effect-resistance-slide');

numberParams = ['hitChance', 'procChance', 'eff', 'effRes']
page = 'effectiveness_calc';

loadQueryParams();

const resolve = () => {
  const inputValues = getInputValues();

  const hitChance = inputValues.hitChance/100;
  const procChance = inputValues.procChance/100;
  const eff = inputValues.eff/100;
  const effRes = inputValues.effRes/100;

  const landChance = Math.max(Math.min(1 + eff - effRes, 0.85), 0);
  const resistChance = 1 - landChance;

  const inflictChance = hitChance * procChance * landChance;

  document.getElementById('passing-res').innerText = Math.round(landChance*100).toString();
  document.getElementById('resist').innerText = Math.round(resistChance*100).toString();
  document.getElementById('landing').innerText = Math.round(inflictChance*100).toString();

  formUpdated();
}