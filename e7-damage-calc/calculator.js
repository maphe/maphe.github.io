const resolve = () => {
  const hero = new Hero(document.getElementById('hero').value);
  const table = document.getElementById('damage');
  table.innerHTML = '';

  for (const skillId of Object.keys(hero.skills)) {
    const skill = hero.skills[skillId];

    const damage = hero.getDamage(skillId);
    $(table).append(`<tr><td>${skillId.toUpperCase()}</td><td>${damage.crit}</td><td>${damage.crush}</td><td>${damage.normal}</td><td>${damage.miss}</td></tr>`);

    if (skill.soulburn) {
      const damage = hero.getDamage(skillId, true);
      $(table).append(`<tr><td>${skillId.toUpperCase()} Soulburn</td><td>${damage.crit}</td><td>${damage.crush}</td><td>${damage.normal}</td><td>${damage.miss}</td></tr>`);
    }
  }
};

const getGlobalAtkMult = () => {
  let mult = 1.0;

  for (let checkboxId of ['elem-adv', 'atk-up', 'atk-up-great', 'target']) {
    const elem = document.getElementById(checkboxId);
    mult *= elem.checked ? Number(elem.value) : 1.0;
  }

  if (elements.caster_vigor.value()) {
    mult *= 1.3;
  }

  return mult;
};

const getGlobalDefMult = () => {
  let mult = 1.0;

  for (let checkboxId of ['def-up', 'def-down']) {
    const elem = document.getElementById(checkboxId);
    mult *= elem.checked ? Number(elem.value) : 1.0;
  }

  return mult;
};

class Hero {
  constructor(id) {
    this.atk = Number(document.getElementById('atk').value);
    this.crit = Number(document.getElementById('crit').value);
    this.skills = heroes[id].skills;
    this.target = new Target();
  }

  getDamage(skillId, soulburn = false) {
    const skill = this.skills[skillId];
    const hit = this.offensivePower(skillId, soulburn) / this.target.defensivePower(skill);
    return {
      crit: Math.round(hit * (this.crit / 100)),
      crush: Math.round(hit * 1.3),
      normal: Math.round(hit),
      miss: Math.round(hit * 0.75)
    };
  }

  offensivePower(skillId, soulburn) {
    const skill = this.skills[skillId];

    const atkTotal = this.atk * getGlobalAtkMult();
    const powerTotal = 1.871 * skill.pow;
    const multTotal = (skill.mult ? skill.mult(soulburn) : 1) * this.getSkillEnhanceMult(skillId)  * powerTotal;

    return (atkTotal * (typeof skill.rate === 'function' ? skill.rate(soulburn) : skill.rate) + (skill.flat ? skill.flat(soulburn) : 0)) * multTotal;
  }

  getSkillEnhanceMult(skillId) {
    const skill = this.skills[skillId];
    let mult = 1.0;

    if (skill.enhance) {
      const enhancement = Number(document.getElementById(`molagora-${skillId}`).value);
      for (let i = 0; i < enhancement; i++) {
        mult += skill.enhance[i];
      }
    }

    return mult;
  }
}

class Target {
  constructor() {
    this.def = Number(document.getElementById('def').value);
  }

  defensivePower(skill) {
    return (((this.def * getGlobalDefMult()) / 300)*(skill.penetrate ? 1.0-skill.penetrate() : 1.0)) + 1;
  }
}