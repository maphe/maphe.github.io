const elements = {
  nb_targets: {
    id: 'nb-targets',
    label: 'Number of enemies',
    type: 'slider',
    element: `<input id="nb-targets" type="range" min="1" max="9" class="custom-range" value="4" onchange="resolve()" oninput="slide('nb-targets')" />`,
    value: () => Number(document.getElementById('nb-targets').value)
  },
  target_max_hp: {
    id: 'target-max-hp',
    label: 'Targets\'s Max HP',
    type: 'slider',
    element: `<input id="target-max-hp" type="range" min="1000" max="200000" class="custom-range" value="10000" onchange="resolve()" oninput="slide('target-max-hp')" />`,
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
    element: `<input id="target-hp" type="range" min="1000" max="200000" class="custom-range" value="10000" onchange="resolve()" oninput="slide('target-hp')" />`,
    value: () => Number(document.getElementById('target-hp').value)
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
  caster_invincible: {
    id: 'caster-invincible',
    label: 'Caster is Invincible',
    type: 'checkbox',
    value: () => document.getElementById('caster-invincible').checked
  },
};

const slide = (fieldId) => {
  document.getElementById(`${fieldId}-val`).innerText = document.getElementById(fieldId).value
};

const build = (hero) => {
  const specificBlock = document.getElementById('custom-block');
  if (hero.form) {
    specificBlock.innerHTML = '';
    for (let elem of hero.form) {
      if (elem.type === 'slider') {
        $(specificBlock).append(`<div class="form-group col-sm-12">
                        <label for="${elem.id}">${elem.label}: <span id="${elem.id}-val"></span>${elem.percent ? '%' : ''}</label>
                        ${elem.element}
                    </div>`);
      } else if (elem.type === 'checkbox') {
        $(specificBlock).append(`<div class="form-group col-sm-12">
                              <div class="custom-control custom-checkbox">
                                  <input class="custom-control-input" type="checkbox" id="${elem.id}" value="1" onchange="resolve()">
                                  <label class="custom-control-label" for="${elem.id}">${elem.label}</label>
                              </div>
                        </div>`);
      }
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
  };

  build(heroes[heroSelector.value]);
  resolve();
  $('input[type="range"]').each((_, elem) => {
    slide(elem.getAttribute('id'));
  });
});