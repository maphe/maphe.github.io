const increaseIcon = '<i class="fas fa-angle-double-up"></i>';
const decreaseIcon = '<i class="fas fa-angle-double-down"></i>';
const firstBuildHPInput = document.getElementById('first-build-hp');
const secondBuildHPInput = document.getElementById('second-build-hp');

const firstBuildDefInput = document.getElementById('first-build-def');
const secondBuildDefInput = document.getElementById('second-build-def');

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
  const firstHP = Number(firstBuildHPInput.value);
  const firstDef = Number(firstBuildDefInput.value);

  const secondHP = Number(secondBuildHPInput.value);
  const secondDef = Number(secondBuildDefInput.value);

  const firstEHP = Math.floor(firstHP * (firstDef / 300 + 1));
  const secondEHP = Math.floor(secondHP * (secondDef / 300 + 1));

  const firstRelativePct = (Math.abs((firstEHP / secondEHP) - 1) * 100).toFixed(1);
  const secondRelativePct = (Math.abs((secondEHP / firstEHP) - 1) * 100).toFixed(1);

  firstBuildOutput.innerText = firstEHP.toString();
  secondBuildOutput.innerText = secondEHP.toString();

  firstBuildPct.innerHTML = (firstEHP !== secondEHP ? (firstEHP > secondEHP ? ` ${increaseIcon} ${firstRelativePct}%` : ` ${decreaseIcon} ${firstRelativePct}%`) : '');
  secondBuildPct.innerHTML = (firstEHP !== secondEHP ? (secondEHP > firstEHP ? ` ${increaseIcon} ${secondRelativePct}%` : ` ${decreaseIcon} ${secondRelativePct}%`) : '');

  updateClasses(firstEHP, secondEHP);
}