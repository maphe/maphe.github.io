const dmgConst = 1.871;

const resolve = () => {
  const artifact = new Artifact(document.getElementById('artifact').value);
  const hero = new Hero(document.getElementById('hero').value, artifact);

  document.getElementById(`barrier-block`).style.display = 'none';
  for (const dotType of [dot.bleed, dot.burn]) {
    document.getElementById(`${dotType}-damage-block`).style.display = 'none';
  }

  for (const dotType of hero.dot || []) {
    document.getElementById(`${dotType}-damage-block`).style.display = 'inline-block';
    document.getElementById(`${dotType}-damage`).innerText = Math.round(hero.getDotDamage(dotType)).toString();
  }

  if (hero.barrier) {
    document.getElementById(`barrier-block`).style.display = 'inline-block';
    document.getElementById(`barrier`).innerText = Math.round(hero.getBarrierStrength()).toString();
  }

  const table = document.getElementById('damage');
  table.innerHTML = '';
  for (const skillId of Object.keys(hero.skills)) {
    const skill = hero.skills[skillId];

    if (skill.rate !== undefined) {
      const damage = hero.getDamage(skillId);
      $(table).append(`<tr>
            <td>${skill.name ? skill.name : skillLabel(skillId)}</td>
            <td>${displayDmg(damage, 'crit')}</td>
            <td>${displayDmg(damage, 'crush')}</td>
            <td>${displayDmg(damage, 'normal')}</td>
            <td>${displayDmg(damage, 'miss')}</td>
      </tr>`);

      if (skill.soulburn) {
        const damage = hero.getDamage(skillId, true);
        $(table).append(`<tr>
            <td>${skill.name ? skill.name : skillLabel(skillId, true)}</td>
            <td>${displayDmg(damage, 'crit')}</td>
            <td>${displayDmg(damage, 'crush')}</td>
            <td>${displayDmg(damage, 'normal')}</td>
            <td>${displayDmg(damage, 'miss')}</td>
        </tr>`);
      }
    }
  }
};

const displayDmg = (damage, type) => {
  return damage[type] !== null ? damage[type] : `<i>${skillLabel('non_applicable')}</i>`
};

const getGlobalAtkMult = () => {
  let mult = 0.0;

  for (let checkboxId of ['atk-up', 'atk-up-great']) {
    const elem = document.getElementById(checkboxId);
    mult += elem.checked ? Number(elem.value)-1 : 0.0;
  }

  if (elements.caster_vigor.value()) {
    mult += 0.3;
  }

  if (elements.caster_enrage.value()) {
    mult += 0.1;
  }

  return mult + (Number(document.getElementById('atk-pc-up').value)/100);
};

const getGlobalDamageMult = (hero) => {
  let mult = 0.0;

  for (let checkboxId of ['rage-set']) {
    const elem = document.getElementById(checkboxId);
    mult += elem.checked ? Number(elem.value)-1 : 0.0;
  }

  const defPresetSelector = document.getElementById('def-preset');
  const selected = defPresetSelector.options[defPresetSelector.selectedIndex];
  if (hero.element === selected.dataset.elemExtraDmg) {
      mult += parseFloat(selected.dataset.extraDmgPc)-1;
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
  constructor(id, artifact) {
    this.id = id;
    this.atk = Number(document.getElementById('atk').value);
    this.crit = Number(document.getElementById('crit').value);
    this.skills = heroes[id].skills;
    this.baseAtk = heroes[id].baseAtk || 0;
    this.dot = heroes[id].dot;
    this.atkUp = heroes[id].atkUp;
    this.element = heroes[id].element;
    this.barrier = heroes[id].barrier;
    this.barrierEnhance = heroes[id].barrierEnhance;
    this.artifact = artifact;
    this.target = new Target(artifact);
  }

  getDamage(skillId, soulburn = false) {
    const skill = this.skills[skillId];
    const hit = this.offensivePower(skillId, soulburn) * this.target.defensivePower(skill);
    const critDmg = (this.crit / 100)+(skill.critDmgBoost ? skill.critDmgBoost(soulburn) : 0)+(this.artifact.getCritDmgBoost()||0);
    return {
      crit: skill.noCrit ? null : Math.round(hit*critDmg + this.getAfterMathDamage(skillId, critDmg)),
      crush: skill.noCrit || skill.onlyCrit ? null : Math.round(hit*1.3 + this.getAfterMathDamage(skillId, 1.3)),
      normal: skill.onlyCrit ? null : Math.round(hit + this.getAfterMathDamage(skillId, 1)),
      miss: Math.round(hit*0.75 + this.getAfterMathDamage(skillId, 0.75))
    };
  }

  getAtk(skillId) {
    const skill = skillId !== undefined ? this.skills[skillId] : undefined;

    const atk = (skill !== undefined && skill.atk !== undefined) ? skill.atk() : this.atk;

    let atkImprint = 0;
    let atkMod = 1;
    if (skill.noBuff !== true) {
      atkImprint = this.baseAtk * (Number(document.getElementById('atk-pc-imprint').value) / 100);
      atkMod = 1 + getGlobalAtkMult() + (this.atkUp !== undefined ? this.atkUp() - 1 : 0) + this.artifact.getAttackBoost();
    }

    return (atk+atkImprint)*atkMod;
  }

  offensivePower(skillId, soulburn) {
    const skill = this.skills[skillId];

    const rate = (typeof skill.rate === 'function') ? skill.rate(soulburn) : skill.rate;
    const flatMod = skill.flat ? skill.flat(soulburn) : 0;
    const flatMod2 = this.artifact.getFlatMult();

    const pow = (typeof skill.pow === 'function') ? skill.pow(soulburn) : skill.pow;
    const skillEnhance = this.getSkillEnhanceMult(skillId);
    const elemAdv = document.getElementById('elem-adv').checked ? Number(document.getElementById('elem-adv').value) : 1.0;
    const target = document.getElementById('target').checked ? Number(document.getElementById('target').value) : 1.0;

    let dmgMod = 1.0 + getGlobalDamageMult(this) + this.artifact.getDamageMultiplier() + (skill.mult ? skill.mult(soulburn)-1 : 0);

    return ((this.getAtk(skillId)*rate + flatMod)*dmgConst + flatMod2) * pow * skillEnhance * elemAdv * target * dmgMod;
  }

  getSkillEnhanceMult(skillId) {
    const skill = this.skills[skillId];
    let mult = 1.0;

    let enhancementSkillId = skillId;
    let enhancement = skill.enhance;

    if (!enhancement && skill.enhance_from) {
      enhancementSkillId = skill.enhance_from;
      enhancement = this.skills[skill.enhance_from].enhance;
    }

    if (enhancement) {
      const enhanceLevel = Number(document.getElementById(`molagora-${enhancementSkillId}`).value);
      for (let i = 0; i < enhanceLevel; i++) {
        mult += enhancement[i];
      }
    }

    if (skill.exEq !== undefined) {
      mult += skill.exEq();
    }

    return mult;
  }

  getAfterMathDamage(skillId, multiplier) {
    const skill = this.skills[skillId];
    const detonation = this.getDetonateDamage(skillId);

    let artiDamage = 0;
    const artiMultipliers = this.artifact.getAfterMathMultipliers();
    if (artiMultipliers !== null) {
      artiDamage = this.getAtk(skillId)*artiMultipliers.atkPercent*dmgConst*this.target.defensivePower({penetrate: () => artiMultipliers.penetrate});
    }

    const artiFlatDmg = this.artifact.getAfterMathDamage();
    if (artiFlatDmg > 0) {
      artiDamage = (artiFlatDmg*this.getSkillEnhanceMult(skillId))*this.target.defensivePower()*multiplier
    }

    let skillDamage = 0;
    const skillMultipliers = skill.afterMath ? skill.afterMath() : null;
    if (skillMultipliers !== null) {
      skillDamage = this.getAtk(skillId)*skillMultipliers.atkPercent*dmgConst*this.target.defensivePower({penetrate: () => skillMultipliers.penetrate});
    }

    return detonation + artiDamage + skillDamage;
  }

  getDetonateDamage(skillId) {
    const skill = this.skills[skillId];
    switch (skill.detonate) {
      case dot.bleed:
        return elements.target_bleed_detonate.value()*skill.detonation()*this.getDotDamage(dot.bleed);
      case dot.burn:
        return elements.target_burn_detonate.value()*skill.detonation()*this.getDotDamage(dot.burn);
      default: return 0;
    }
  }

  getDotDamage(type) {
    switch (type) {
      case dot.bleed:
        return this.getAtk()*0.3*dmgConst*this.target.defensivePower({penetrate: () => 0.7});
      case dot.burn:
        return this.getAtk()*0.6*dmgConst*this.target.defensivePower({penetrate: () => 0.7});
      default: return 0;
    }
  }

  getBarrierStrength() {
    return this.barrier()*(this.barrierEnhance ? this.getSkillEnhanceMult(this.barrierEnhance) : 1);
  }
}

class Target {
  constructor(casterArtifact) {
    this.def = Number(document.getElementById('def').value)*(1+Number(document.getElementById('def-pc-up').value)/100);
    this.casterArtifact = casterArtifact;
  }

  defensivePower(skill) {
    const dmgReduc = Number(document.getElementById('dmg-reduc').value)/100;
    const dmgTrans = Number(document.getElementById('dmg-trans').value)/100;
    return ((1-dmgReduc)*(1-dmgTrans))/((((this.def * getGlobalDefMult()) / 300)*((1-(skill && skill.penetrate ? skill.penetrate() : 0))*(1-this.casterArtifact.getDefensePenetration()))) + 1);
  }
}

class Artifact {
  constructor(id) {
    this.id = id ? id : undefined;
  }

  getName() {
    return artifactName(this.id);
  }

  getValue() {
    return artifacts[this.id].scale ? artifacts[this.id].scale[Math.floor(document.getElementById('artifact-lvl').value/3)] : artifacts[this.id].value;
  }

  getDamageMultiplier() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.damage) {
      return 0;
    }
    return this.getValue();
  }

  getDefensePenetration() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.penetrate) {
      return 0;
    }
    return this.getValue();
  }

  getAfterMathMultipliers() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.aftermath || artifacts[this.id].atkPercent === undefined || artifacts[this.id].penetrate === undefined) {
      return null;
    }
    return {
      atkPercent: artifacts[this.id].atkPercent,
      penetrate: artifacts[this.id].penetrate,
    }
  }

  getAfterMathDamage() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.aftermath || artifacts[this.id].damage === undefined) {
      return 0;
    }
    return artifacts[this.id].damage(this.getValue());
  }

  getAttackBoost() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.attack) {
      return 0;
    }
    return artifacts[this.id].value ? artifacts[this.id].value(this.getValue()) : this.getValue();
  }

  getCritDmgBoost() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.critDmgBoost) {
      return 0;
    }
    return this.getValue();
  }

  getFlatMult() {
    if (this.id === undefined || artifacts[this.id].type !== artifactDmgType.flat) {
      return 0;
    }
    return artifacts[this.id].flat(this.getValue());
  }
}