const elements = {
  nb_targets: {
    id: 'nb-targets',
    label: 'Number of enemies',
    type: 'slider',
    element: `<input id="nb-targets" type="range" min="1" max="9" class="custom-range" value="4" onchange="resolve()" oninput="slide('nb-targets')" />`,
    value: () => Number(document.getElementById('nb-targets').value)
  },
  nb_hits: {
    id: 'nb-hits',
    label: 'Number of hits',
    type: 'slider',
    element: `<input id="nb-hits" type="range" min="3" max="10" class="custom-range" value="3" onchange="resolve()" oninput="slide('nb-hits')" />`,
    value: () => Number(document.getElementById('nb-hits').value)
  },
  target_max_hp: {
    id: 'target-max-hp',
    label: 'Targets\'s Max HP',
    type: 'slider',
    element: `<input id="target-max-hp" type="range" min="1000" max="50000" class="custom-range" value="10000" onchange="resolve()" oninput="slide('target-max-hp')" />`,
    value: () => Number(document.getElementById('target-max-hp').value)
  },
  target_hp_pc: {
    id: 'target-hp-pc',
    label: 'Targets\'s HP',
    type: 'slider',
    percent: true,
    element: `<input id="target-hp-pc" type="range" min="1" max="100" class="custom-range" value="100" onchange="resolve()" oninput="slide('target-hp-pc')" />`,
    value: () => Number(document.getElementById('target-hp-pc').value)
  },
  target_hp: {
    id: 'target-hp',
    label: 'Targets\'s HP',
    type: 'slider',
    element: `<input id="target-hp" type="range" min="1000" max="50000" class="custom-range" value="10000" onchange="resolve()" oninput="slide('target-hp')" />`,
    value: () => Number(document.getElementById('target-hp').value)
  },
  target_speed: {
    id: 'target-speed',
    label: 'Targets\'s Speed',
    type: 'slider',
    element: `<input id="target-speed" type="range" min="70" max="300" class="custom-range" value="150" onchange="resolve()" oninput="slide('target-speed')" />`,
    value: () => Number(document.getElementById('target-speed').value)
  },
  target_nb_buff: {
    id: 'target-nb-buff',
    label: 'Buffs on Targets',
    type: 'slider',
    element: `<input id="target-nb-buff" type="range" min="0" max="9" class="custom-range" value="0" onchange="resolve()" oninput="slide('target-nb-buff')" />`,
    value: () => Number(document.getElementById('target-nb-buff').value)
  },
  target_nb_debuff: {
    id: 'target-nb-debuff',
    label: 'Debuffs on Targets',
    type: 'slider',
    element: `<input id="target-nb-debuff" type="range" min="0" max="9" class="custom-range" value="0" onchange="resolve()" oninput="slide('target-nb-debuff')" />`,
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
  target_is_stunned: {
    id: 'target-is-stunned',
    label: 'Target is stunned',
    type: 'checkbox',
    value: () => document.getElementById('target-is-stunned').checked
  },
  target_magic_nailed: {
    id: 'target-magic-nailed',
    label: 'Magic Nail on Target',
    type: 'checkbox',
    value: () => document.getElementById('target-magic-nailed').checked
  },
  target_nb_bleed: {
    id: 'target-nb-bleed',
    label: 'Number of Bleed on target',
    type: 'slider',
    element: `<input id="target-nb-bleed" type="range" min="0" max="9" class="custom-range" value="0" onchange="resolve()" oninput="slide('target-nb-bleed')" />`,
    value: () => Number(document.getElementById('target-nb-bleed').value)
  },
  caster_max_hp: {
    id: 'caster-max-hp',
    label: 'Caster\'s Max HP',
    type: 'slider',
    element: `<input id="caster-max-hp" type="range" min="1000" max="50000" class="custom-range" value="10000" onchange="resolve()" oninput="slide('caster-max-hp')" />`,
    value: () => Number(document.getElementById('caster-max-hp').value)
  },
  caster_hp_pc: {
    id: 'caster-hp-pc',
    label: 'Caster\'s HP',
    type: 'slider',
    percent: true,
    element: `<input id="caster-hp-pc" type="range" min="1" max="100" class="custom-range" value="100" onchange="resolve()" oninput="slide('caster-hp-pc')" />`,
    value: () => Number(document.getElementById('caster-hp-pc').value)
  },
  caster_hp: {
    id: 'caster-hp',
    label: 'Caster\'s HP',
    type: 'slider',
    element: `<input id="caster-hp" type="range" min="1000" max="50000" class="custom-range" value="10000" onchange="resolve()" oninput="slide('caster-hp')" />`,
    value: () => Number(document.getElementById('caster-hp').value)
  },
  caster_defense: {
    id: 'caster-defense',
    label: 'Caster\'s Defense',
    type: 'slider',
    element: `<input id="caster-defense" type="range" min="200" max="5000" class="custom-range" value="750" onchange="resolve()" oninput="slide('caster-defense')" />`,
    value: () => Number(document.getElementById('caster-defense').value)
  },
  caster_speed: {
    id: 'caster-speed',
    label: 'Caster\'s Speed',
    type: 'slider',
    element: `<input id="caster-speed" type="range" min="70" max="300" class="custom-range" value="150" onchange="resolve()" oninput="slide('caster-speed')" />`,
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
    element: `<input id="caster-nb-buff" type="range" min="0" max="9" class="custom-range" value="0" onchange="resolve()" oninput="slide('caster-nb-buff')" />`,
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
    element: `<input id="caster-nb-focus" type="range" min="0" max="5" class="custom-range" value="0" onchange="resolve()" oninput="slide('caster-nb-focus')" />`,
    value: () => Number(document.getElementById('caster-nb-focus').value)
  },
  caster_fighting_spirit: {
    id: 'caster-fighting-spirit',
    label: 'Fighting Spirit',
    type: 'slider',
    element: `<input id="caster-fighting-spirit" type="range" min="0" max="100" class="custom-range" value="0" step="5" onchange="resolve()" oninput="slide('caster-fighting-spirit')" />`,
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
    label: 'Caster Enraged',
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
    element: `<input id="stack-crit-hit" type="range" min="0" max="50" class="custom-range" value="0" step="1" onchange="resolve()" oninput="slide('stack-crit-hit')" />`,
    value: () => Number(document.getElementById('stack-crit-hit').value)
  },
  dead_people: {
    id: 'dead-people',
    label: 'People who died',
    type: 'slider',
    element: `<input id="dead-people" type="range" min="0" max="8" class="custom-range" value="0" step="1" onchange="resolve()" oninput="slide('dead-people')" />`,
    value: () => Number(document.getElementById('dead-people').value)
  }
};

elements.caster_speed.sub_elements = [elements.caster_speed_up];

const slide = (fieldId) => {
  document.getElementById(`${fieldId}-val`).innerText = document.getElementById(fieldId).value
};

const build = (hero) => {
  const specificBlock = document.getElementById('custom-block');
  if (hero.form) {
    specificBlock.innerHTML = '';
    for (let elem of hero.form) {
      buildElement(elem, specificBlock);
    }
  } else {
    specificBlock.innerHTML = '<p class="col-sm-12"><i>Nothing here</i></p>';
  }

  const molagoraBlock = document.getElementById('molagora-block');
  molagoraBlock.innerHTML = '';
  for (let id of Object.keys(hero.skills)) {
    const skill = hero.skills[id];
    if (skill.enhance) {
      $(molagoraBlock).append(`<div class="form-group col-sm-${skill.enhance.length}">
                        <label for="molagora-${id}">${id.toUpperCase()}: +<span id="molagora-${id}-val"></span></label>
                        <input id="molagora-${id}" type="range" min="0" max="${skill.enhance.length}" class="custom-range" value="0" onchange="resolve()" oninput="slide('molagora-${id}')" />
                    </div>`);
    }
  }
};

const buildElement = (elem, parent) => {
  if (elem.type === 'slider') {
    $(parent).append(`<div class="form-group col-sm-12">
                        <label for="${elem.id}">${elem.label}: <span id="${elem.id}-val"></span>${elem.percent ? '%' : ''}</label>
                        ${elem.element}
                    </div>`);
  } else if (elem.type === 'checkbox') {
    $(parent).append(`<div class="form-group col-sm-12">
                              <div class="custom-control custom-checkbox custom-control-inline buff-block">
                                  <input class="custom-control-input" type="checkbox" id="${elem.id}" value="1" onchange="resolve()">
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
  Object.keys(heroes).map((id => {
    $(heroSelector).append(`<option value="${id}">${heroes[id].name}</option>`)
  }));

  heroSelector.onchange = () => {
    build(heroes[heroSelector.value]);
    resolve();
    $('input[type="range"]').each((_, elem) => {
      slide(elem.getAttribute('id'));
    });
    gtag('event', 'pick', {
      event_category: 'Hero',
      event_label: heroSelector.value,
    });
  };

  build(heroes[heroSelector.value]);
  resolve();
  $('input[type="range"]').each((_, elem) => {
    slide(elem.getAttribute('id'));
  });
});