const elements = {
  nb_targets: {
    id: 'nb-targets',
    label: 'Number of enemies',
    type: 'slider',
    min: 1,
    max: 9,
    default: 4,
    readonly: true,
    value: () => Number(document.getElementById('nb-targets').value)
  },
  nb_hits: {
    id: 'nb-hits',
    label: 'Number of hits',
    type: 'slider',
    min: 1,
    max: 3,
    default: 3,
    readonly: true,
    value: () => Number(document.getElementById('nb-hits').value)
  },
  target_max_hp: {
    id: 'target-max-hp',
    label: 'Targets\'s Max HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: () => {
      const defPreset = document.getElementById('def-preset');
      return defPreset.value ? defPreset.options[defPreset.selectedIndex].dataset.hp : 10000
    },
    value: () => Number(document.getElementById('target-max-hp').value)
  },
  target_hp_pc: {
    id: 'target-hp-pc',
    label: 'Targets\'s HP %',
    type: 'slider',
    percent: true,
    min: 1,
    max: 100,
    default: 100,
    readonly: true,
    value: () => Number(document.getElementById('target-hp-pc').value)
  },
  target_hp: {
    id: 'target-hp',
    label: 'Targets\'s HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: 10000,
    value: () => Number(document.getElementById('target-hp').value)
  },
  target_speed: {
    id: 'target-speed',
    label: 'Targets\'s Speed',
    type: 'slider',
    min: 70,
    max: 300,
    default: 150,
    value: () => Number(document.getElementById('target-speed').value)
  },
  target_nb_buff: {
    id: 'target-nb-buff',
    label: 'Buffs on Targets',
    type: 'slider',
    min: 0,
    max: 9,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-nb-buff').value)
  },
  target_nb_debuff: {
    id: 'target-nb-debuff',
    label: 'Debuffs on Targets',
    type: 'slider',
    min: 0,
    max: 9,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-nb-debuff').value)
  },
  target_has_buff: {
    id: 'target-has-buff',
    label: 'Target has buffs',
    type: 'checkbox',
    value: () => document.getElementById('target-has-buff').checked
  },
  target_has_debuff: {
    id: 'target-has-debuff',
    label: 'Target has debuffs',
    type: 'checkbox',
    value: () => document.getElementById('target-has-debuff').checked
  },
  target_has_bleed: {
    id: 'target-has-bleed',
    label: 'Target has Bleed',
    type: 'checkbox',
    value: () => document.getElementById('target-has-bleed').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_blood.png'
  },
  target_has_sleep: {
    id: 'target-has-sleep',
    label: 'Target has Sleep',
    type: 'checkbox',
    value: () => document.getElementById('target-has-sleep').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_sleep.png'
  },
  target_has_target: {
    value: () => document.getElementById('target').checked,
  },
  target_is_stunned: {
    id: 'target-is-stunned',
    label: 'Target is stunned',
    type: 'checkbox',
    value: () => document.getElementById('target-is-stunned').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_stun.png'
  },
  target_magic_nailed: {
    id: 'target-magic-nailed',
    label: 'Magic Nail on Target',
    type: 'checkbox',
    value: () => document.getElementById('target-magic-nailed').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_nail.png'
  },
  target_nb_bleed: {
    id: 'target-nb-bleed',
    label: 'Number of Bleed on target',
    type: 'slider',
    min: 0,
    max: 9,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-nb-bleed').value),
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_blood.png'
  },
  target_bleed_detonate: {
    id: 'target-bleed-detonate',
    label: 'Bleed effects to Detonate',
    type: 'slider',
    min: 0,
    max: 30,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-bleed-detonate').value),
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_blood.png'
  },
  target_burn_detonate: {
    id: 'target-burn-detonate',
    label: 'Burn effects to Detonate',
    type: 'slider',
    min: 0,
    max: 30,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-burn-detonate').value),
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_blaze.png'
  },
  caster_max_hp: {
    id: 'caster-max-hp',
    label: 'Caster\'s Max HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: 10000,
    value: () => Number(document.getElementById('caster-max-hp').value)
  },
  caster_hp_pc: {
    id: 'caster-hp-pc',
    label: 'Caster\'s HP %',
    type: 'slider',
    percent: true,
    min: 1,
    max: 100,
    default: 100,
    readonly: true,
    value: () => Number(document.getElementById('caster-hp-pc').value)
  },
  caster_hp: {
    id: 'caster-hp',
    label: 'Caster\'s HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: 10000,
    value: () => Number(document.getElementById('caster-hp').value)
  },
  caster_defense: {
    id: 'caster-defense',
    label: 'Caster\'s Defense',
    type: 'slider',
    min: 200,
    max: 5000,
    default: 750,
    value: () => Number(document.getElementById('caster-defense').value)*(elements.caster_defense_up.value() ? 1.6 : 1)
  },
  caster_defense_up: {
    id: 'caster-defense-up',
    label: 'Increased Defense',
    type: 'checkbox',
    value: () => document.getElementById('caster-defense-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_def_up.png'
  },
  caster_speed: {
    id: 'caster-speed',
    label: 'Caster\'s Speed',
    type: 'slider',
    min: 70,
    max: 300,
    default: 150,
    value: () => Number(document.getElementById('caster-speed').value)*(elements.caster_speed_up.value() ? 1.3 : 1),
  },
  caster_speed_up: {
    id: 'caster-speed-up',
    label: 'Increased Speed',
    type: 'checkbox',
    value: () => document.getElementById('caster-speed-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_speed_up.png'
  },
  caster_nb_buff: {
    id: 'caster-nb-buff',
    label: 'Buffs on Caster',
    type: 'slider',
    min: 0,
    max: 9,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('caster-nb-buff').value)
  },
  caster_full_focus: {
    id: 'caster-full-focus',
    label: 'Full Focus',
    type: 'checkbox',
    value: () => document.getElementById('caster-full-focus').checked
  },
  caster_nb_focus: {
    id: 'caster-nb-focus',
    label: 'Focus',
    type: 'slider',
    min: 0,
    max: 5,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('caster-nb-focus').value)
  },
  caster_fighting_spirit: {
    id: 'caster-fighting-spirit',
    label: 'Fighting Spirit',
    type: 'slider',
    min: 0,
    max: 100,
    default: 0,
    step: 5,
    readonly: true,
    value: () => Number(document.getElementById('caster-fighting-spirit').value)
  },
  caster_invincible: {
    id: 'caster-invincible',
    label: 'Caster is Invincible',
    type: 'checkbox',
    value: () => document.getElementById('caster-invincible').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_invincible.png'
  },
  caster_vigor: {
    id: 'caster-vigor',
    label: 'Caster has Vigor',
    type: 'checkbox',
    value: () => document.getElementById('caster-vigor') ? document.getElementById('caster-vigor').checked : false,
    icon: 'https://epic7x.com/wp-content/uploads/2019/02/vigor.png'
  },
  caster_enrage: {
    id: 'caster-enrage',
    label: 'Caster has Rage',
    type: 'checkbox',
    value: () => document.getElementById('caster-enrage') ? document.getElementById('caster-enrage').checked : false,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_madness.png'
  },
  caster_stealth: {
    id: 'caster-stealth',
    label: 'Caster has Stealth',
    type: 'checkbox',
    value: () => document.getElementById('caster-stealth').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_hide.png'
  },
  stack_crit_hit: {
    id: 'stack-crit-hit',
    label: 'Crit Hit Stack',
    type: 'slider',
    min: 0,
    max: 50,
    default: 0,
    value: () => Number(document.getElementById('stack-crit-hit').value)
  },
  non_attack_skill_stack: {
    id: 'stack-non-attack-skill',
    label: 'Non-Attack Skill Stack',
    type: 'slider',
    min: 0,
    max: 10,
    default: 0,
    value: () => Number(document.getElementById('stack-non-attack-skill').value)
  },
  dead_people: {
    id: 'dead-people',
    label: 'People who died',
    type: 'slider',
    min: 0,
    max: 8,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('dead-people').value)
  },
  highest_ally_attack: {
    id: 'highest-ally-attack',
    label: 'Highest Ally Attack',
    type: 'slider',
    min: 200,
    max: 10000,
    default: 4000,
    value: () => Number(document.getElementById('highest-ally-attack').value)
  },
  ally_atk_up: {
    id: 'ally-atk-up',
    label: 'Ally has Increased Attack',
    type: 'checkbox',
    value: () => document.getElementById('ally-atk-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_att_up.png'
  },
  ally_atk_up_great: {
    id: 'ally-atk-up-great',
    label: 'Ally has Increased Attack (Great)',
    type: 'checkbox',
    value: () => document.getElementById('ally-atk-up-great').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2019/01/greater-attack-icon.png'
  },
  skill_tree_completed: {
    id: 'skill-tree-completed',
    label: 'Skill Tree Completed',
    type: 'checkbox',
    default: true,
    value: () => document.getElementById('skill-tree-completed').checked,
  }
};

elements.caster_speed.sub_elements = [elements.caster_speed_up];
elements.caster_defense.sub_elements = [elements.caster_defense_up];
elements.highest_ally_attack.sub_elements = [elements.ally_atk_up, elements.ally_atk_up_great];

const slide = (fieldId) => {
  document.getElementById(fieldId).value = document.getElementById(`${fieldId}-slide`).value;
  resolve();
  resetPreset(fieldId);
};

const slideMola = (skillId) => {
  slide(`molagora-${skillId}`);
  updateMolaBonus(skillId);
};

const update = (fieldId) => {
  const slider = document.getElementById(`${fieldId}-slide`);
  const inputValue = Number(document.getElementById(fieldId).value);
  const sliderMin = Number(slider.getAttribute('min'));
  const sliderMax = Number(slider.getAttribute('max'));
  if (inputValue < sliderMin) {
    slider.value = sliderMin;
  } else if (inputValue > sliderMax) {
    slider.value = sliderMax;
  } else {
    slider.value = inputValue;
  }
  resolve();
};

const updateMolaBonus = (skillId) => {
  const hero = document.getElementById('hero').value;
  const skill = heroes[hero].skills[skillId];
  const enhancement = Number(document.getElementById(`molagora-${skillId}`).value);
  let val = 0;
  for (let i = 0; i < enhancement; i++) {
    val += skill.enhance[i]*100;
  }
  document.getElementById(`molagora-${skillId}-percent`).textContent = val.toString();
};

const plus = (fieldId) => {
  const input = document.getElementById(fieldId);
  const max = input.getAttribute('max');
  const inc = Number(document.getElementById(`${fieldId}-slide`).getAttribute('step') || 1);
  if (max === null || Number(max) > input.value) {
    input.value = Number(input.value)+inc;
    update(fieldId);
    resetPreset(fieldId);
  }
};

const plusMola = (skillId) => {
  plus(`molagora-${skillId}`);
  updateMolaBonus(skillId);
};

const minus = (fieldId) => {
  const input = document.getElementById(fieldId);
  const min = input.getAttribute('min');
  const inc = Number(document.getElementById(`${fieldId}-slide`).getAttribute('step') || 1);
  if (min === null || Number(min) < input.value) {
    input.value = Number(input.value)-inc;
    update(fieldId);
    resetPreset(fieldId);
  }
};

const minusMola = (skillId) => {
  minus(`molagora-${skillId}`);
  updateMolaBonus(skillId);
};

const resetPreset = (fieldId) => {
  if (fieldId === 'def') {
    $('#def-preset').selectpicker('val', '');
  }
  if (fieldId === 'atk' || fieldId === 'crit') {
    $('#atk-preset').selectpicker('val', '');
  }
};

const showHeroInfo = (hero) => {
  const block = document.getElementById('hero-info');
  block.innerHTML = '';

  if (hero.info) {
    block.innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
                      ${hero.info}
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                   </div>`;
  }
};

const build = (hero) => {
  showHeroInfo(hero);
  const specificBlock = document.getElementById('custom-block');
  if (hero.form) {
    specificBlock.innerHTML = '';
    for (let elem of hero.form) {
      buildElement(elem, specificBlock);
    }
    specificBlock.parentElement.style.display = 'block';
  } else {
    specificBlock.parentElement.style.display = 'none';
  }

  const molagoraBlock = document.getElementById('molagora-block');
  molagoraBlock.innerHTML = '';
  for (let id of Object.keys(hero.skills)) {
    const skill = hero.skills[id];
    if (skill.enhance) {
      $(molagoraBlock).append(`<div class="form-group row col-sm-12">
                        <label for="molagora-${id}" class="col-sm-12 col-md-1 col-form-label form-control-sm text-center"><h5>${id.toUpperCase()}</h5></label>
                        <div class="input-group input-group-sm col-md-2 col-sm-12">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button" id="molagora-${id}-minus" onclick="minusMola('${id}')">&minus;</button>
                            </div>
                            <input type="number" class="form-control text-center" id="molagora-${id}" min="0" max="${skill.enhance.length}" value="0" readonly onkeyup="update('molagora-${id}')">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="molagora-${id}-plus" onclick="plusMola('${id}')">&plus;</button>
                            </div>
                        </div>
                        <input id="molagora-${id}-slide" type="range" min="0" max="${skill.enhance.length}" class="custom-range col-md-${skill.enhance.length} col-sm-12 mt-3 mt-md-0 ml-2 ml-md-0" value="0" oninput="slideMola('${id}')" />
                        <div class="col text-right molagora-badge">
                            <span class="badge badge-pill badge-dark">+<span id="molagora-${id}-percent">0</span>%</span>
                        </div>
                    </div>`);
    }
  }
};

const buildArtifact = (artifact) => {
  const specificBlock = document.getElementById('artifact-custom-block');
  if (artifact && !artifact.form) {
    specificBlock.innerHTML = '';
  }

  if (!artifact || (!artifact.scale && !artifact.form)) {
    document.getElementById('artifact-block').style.display = 'none';
    return;
  }
  document.getElementById('artifact-block').style.display = 'block';
  document.getElementById('artifact-lvl-block').style.display = (artifact.scale !== undefined) ? 'block' : 'none';

  if (artifact.form) {
    specificBlock.innerHTML = '';
    for (let elem of artifact.form) {
      buildElement(elem, specificBlock);
    }
    specificBlock.style.display = 'block';
  } else {
    specificBlock.style.display = 'none';
  }
};

const buildElement = (elem, parent) => {
  if (document.getElementById(elem.id) !== null) {
    return;
  }

  if (elem.type === 'slider') {
    $(parent).append(`<div id="${elem.id}-block" class="stat-block">
                        <div class="form-group row col-sm-12">
                            <label for="crit" class="col-md-9 col-form-label form-control-sm">
                                <h5>${elem.icon ? '<img src="'+elem.icon+'" width="20" height="20" /> ' : ''}${elem.label}</h5>
                            </label>
                            <div class="input-group input-group-sm col-md-3">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button" id="${elem.id}-minus" onclick="minus('${elem.id}')">&minus;</button>
                                </div>
                                <input type="number" class="form-control text-center" id="${elem.id}" min="${elem.min}" max="${elem.max}" value="${typeof elem.default === 'function' ? elem.default() : elem.default}" ${elem.readonly ? 'readonly' : ''} onkeyup="update('${elem.id}')">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" id="${elem.id}-plus" onclick="plus('${elem.id}')">&plus;</button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row col-sm-12">
                            <input type="range" class="custom-range" id="${elem.id}-slide" min="${elem.min}" max="${elem.max}" value="${typeof elem.default === 'function' ? elem.default() : elem.default}" step="${elem.step || 1}" oninput="slide('${elem.id}')">
                        </div>
                    </div>`);
  } else if (elem.type === 'checkbox') {
    $(parent).append(`<div class="form-group col-sm-12">
                              <div class="custom-control custom-checkbox custom-control-inline buff-block">
                                  <input class="custom-control-input" type="checkbox" id="${elem.id}" value="1" onchange="resolve()" ${elem.default === true ? 'checked' : ''}>
                                  <label class="custom-control-label" for="${elem.id}">
                                    ${elem.icon ? '<img src="'+elem.icon+'" width="20" height="20" />' : ''} ${elem.label}
                                  </label>
                              </div>
                        </div>`);
  }

  if (elem.sub_elements) {
    for (let sub_elem of elem.sub_elements) {
      buildElement(sub_elem, parent);
    }
  }
};

$(() => {
  const heroSelector = document.getElementById('hero');
  const artiSelector = document.getElementById('artifact');
  Object.keys(heroes).map((id => {
    $(heroSelector).append(`<option value="${id}">${heroes[id].name}</option>`)
  }));
  $(artiSelector).append(`<option value="">No Artifact Proc</option>`);
  $(artiSelector).append(`<option data-divider="true"></option>`);
  Object.keys(artifacts).map((id => {
    $(artiSelector).append(`<option value="${id}">${artifacts[id].name}</option>`)
  }));

  heroSelector.onchange = () => {
    build(heroes[heroSelector.value]);
    buildArtifact(artifacts[artiSelector.value]);
    resolve();
    gtag('event', 'pick', {
      event_category: 'Hero',
      event_label: heroSelector.value,
    });
  };

  const defPresetSelector = document.getElementById('def-preset');
  defPresetSelector.onchange = () => {
    const selected = defPresetSelector.options[defPresetSelector.selectedIndex];
    if (selected.value) {
      document.getElementById('def').value = selected.dataset.def;
      update('def');
      const hpInput = document.getElementById(elements.target_max_hp.id)
      if (hpInput) {
        hpInput.value = selected.dataset.hp;
        update(elements.target_max_hp.id)
      }
    }
  };

  const atkPresetSelector = document.getElementById('atk-preset');
  atkPresetSelector.onchange = () => {
    const selected = atkPresetSelector.options[atkPresetSelector.selectedIndex];
    if (selected.value) {
      document.getElementById('atk').value = selected.dataset.atk;
      document.getElementById('crit').value = selected.dataset.crit;
      update('atk');
      update('crit');
    }
  };

  artiSelector.onchange = () => {
    buildArtifact(artifacts[artiSelector.value]);
    build(heroes[heroSelector.value]);
    resolve();
  };

  build(heroes[heroSelector.value]);
  buildArtifact(artifacts[artiSelector.value]);
  resolve();
});