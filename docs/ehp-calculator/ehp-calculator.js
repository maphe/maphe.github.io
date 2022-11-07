// set up vars for query params
formDefaults = {
  'firstBuildHP': 10000,
  'secondBuildHP': 10000,
  'firstBuildDef': 1000,
  'secondBuildDef': 1000,
}

const firstBuildHPInput = document.getElementById('first-build-hp');
const secondBuildHPInput = document.getElementById('second-build-hp');
const firstBuildHPSlide = document.getElementById('first-build-hp-slide');
const secondBuildHPSlide = document.getElementById('second-build-hp-slide');

const firstBuildDefInput = document.getElementById('first-build-def');
const secondBuildDefInput = document.getElementById('second-build-def');
const firstBuildDefSlide = document.getElementById('first-build-def-slide');
const secondBuildDefSlide = document.getElementById('second-build-def-slide');

numberParams = ['firstBuildHP', 'secondBuildHP', 'firstBuildDef', 'secondBuildDef']
page = 'ehp_calc';

const increaseIcon = '<i class="fas fa-angle-double-up"></i>';
const decreaseIcon = '<i class="fas fa-angle-double-down"></i>';

const firstEHPBox = document.getElementById('first-ehp-box');
const secondEHPBox = document.getElementById('second-ehp-box');
const firstBuildOutput = document.getElementById('first-build-ehp');
const secondBuildOutput = document.getElementById('second-build-ehp');
const firstBuildPct = document.getElementById('first-build-pct');
const secondBuildPct = document.getElementById('second-build-pct');

// style output text and outlines
const updateClasses = (first, second) => {
  if (first >= second) {
    firstEHPBox.classList.replace('border-danger', 'border-success');
    firstBuildOutput.classList.replace('text-danger', 'text-success');
    firstBuildPct.classList.replace('text-danger', 'text-success');
  } else {
    firstEHPBox.classList.replace('border-success', 'border-danger');
    firstBuildOutput.classList.replace('text-success', 'text-danger');
    firstBuildPct.classList.replace('text-success', 'text-danger');
  }

  if (second >= first) {
    secondEHPBox.classList.replace('border-danger', 'border-success');
    secondBuildOutput.classList.replace('text-danger', 'text-success');
    secondBuildPct.classList.replace('text-danger', 'text-success');
  } else {
    secondEHPBox.classList.replace('border-success', 'border-danger');
    secondBuildOutput.classList.replace('text-success', 'text-danger');
    secondBuildPct.classList.replace('text-success', 'text-danger');
  }
}

const resolve = () => {
  if (loadingQueryParams) {
    return; // don't resolve until params are loaded
  }

  const inputValues = getInputValues();

  const firstEHP = Math.floor(inputValues.firstBuildHP * (inputValues.firstBuildDef / 300 + 1));
  const secondEHP = Math.floor(inputValues.secondBuildHP * (inputValues.secondBuildDef / 300 + 1));

  const firstRelativePct = (Math.abs((firstEHP / secondEHP) - 1) * 100).toFixed(1);
  const secondRelativePct = (Math.abs((secondEHP / firstEHP) - 1) * 100).toFixed(1);

  firstBuildOutput.innerText = firstEHP.toString();
  secondBuildOutput.innerText = secondEHP.toString();

  firstBuildPct.innerHTML = (firstEHP !== secondEHP ? (firstEHP > secondEHP ? ` ${increaseIcon} ${firstRelativePct}%` : ` ${decreaseIcon} ${firstRelativePct}%`) : '');
  secondBuildPct.innerHTML = (firstEHP !== secondEHP ? (secondEHP > firstEHP ? ` ${increaseIcon} ${secondRelativePct}%` : ` ${decreaseIcon} ${secondRelativePct}%`) : '');

  updateClasses(firstEHP, secondEHP);

  formUpdated()
}