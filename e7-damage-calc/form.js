const elements = {
  nb_targets: {
    ref: 'nb_targets',
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
    ref: 'nb_hits',
    id: 'nb-hits',
    label: 'Number of hits',
    type: 'slider',
    min: 1,
    max: 3,
    default: 1,
    readonly: true,
    value: () => Number(document.getElementById('nb-hits').value)
  },
  target_attack: {
    ref: 'target_attack',
    id: 'target-attack',
    label: 'Target Attack',
    type: 'slider',
    min: 200,
    max: 10000,
    default: 2000,
    value: () => {
      let atkMod = 1
      + Number(elements.target_atk_up.value() ? 0.5 : 0)
      + Number(elements.target_atk_up_great.value() ? 0.75 : 0)
      + Number(elements.target_atk_down.value() ? -0.5 : 0)
      + Number(document.getElementById('target-vigor').checked ? 0.3 : 0);

      return Number(document.getElementById('target-attack').value)*atkMod;
    }
  },
  target_atk_up: {
    ref: 'target_atk_up',
    id: 'target-atk-up',
    label: 'Target has Increased Attack',
    type: 'checkbox',
    value: () => document.getElementById('target-atk-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_att_up.png'
  },
  target_atk_up_great: {
    ref: 'target_atk_up_great',
    id: 'target-atk-up-great',
    label: 'Target has Increased Attack (Great)',
    type: 'checkbox',
    value: () => document.getElementById('target-atk-up-great').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2019/01/greater-attack-icon.png'
  },
  target_atk_down: {
    ref: 'target_atk_down',
    id: 'target-atk-down',
    label: 'Target has Decreased Attack',
    type: 'checkbox',
    value: () => document.getElementById('target-atk-down').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_att_dn.png'
  },
  target_max_hp: {
    ref: 'target_max_hp',
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
  target_is_highest_max_hp: {
    ref: 'target_is_highest_max_hp',
    id: 'target-is-highest-max-hp',
    label: 'Target is Highest max HP',
    type: 'checkbox',
    value: () => document.getElementById('target-is-highest-max-hp').checked
  },
  target_hp_pc: {
    ref: 'target_hp_pc',
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
    ref: 'target_hp',
    id: 'target-hp',
    label: 'Targets\'s HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: 10000,
    value: () => Number(document.getElementById('target-hp').value)
  },
  target_speed: {
    ref: 'target_speed',
    id: 'target-speed',
    label: 'Targets\'s Speed',
    type: 'slider',
    min: 70,
    max: 350,
    default: 150,
    value: () => Number(document.getElementById('target-speed').value)
  },
  target_nb_buff: {
    ref: 'target_nb_buff',
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
    ref: 'target_nb_debuff',
    id: 'target-nb-debuff',
    label: 'Debuffs on Targets',
    type: 'slider',
    min: 0,
    max: 10,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-nb-debuff').value)
  },
  target_has_buff: {
    ref: 'target_has_buff',
    id: 'target-has-buff',
    label: 'Target has buffs',
    type: 'checkbox',
    value: () => document.getElementById('target-has-buff').checked
  },
  target_has_debuff: {
    ref: 'target_has_debuff',
    id: 'target-has-debuff',
    label: 'Target has debuffs',
    type: 'checkbox',
    value: () => document.getElementById('target-has-debuff')?.checked
  },
  target_has_bleed: {
    ref: 'target_has_bleed',
    id: 'target-has-bleed',
    label: 'Target has Bleed',
    type: 'checkbox',
    value: () => document.getElementById('target-has-bleed').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_blood.png'
  },
  target_has_sleep: {
    ref: 'target_has_sleep',
    id: 'target-has-sleep',
    label: 'Target has Sleep',
    type: 'checkbox',
    value: () => document.getElementById('target-has-sleep').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_sleep.png'
  },
  target_has_provoke: {
    ref: 'target_has_provoke',
    id: 'target-has-provoke',
    label: 'Target is Provoked',
    type: 'checkbox',
    value: () => document.getElementById('target-has-provoke').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_provoke.png'
  },
  target_has_target: {
    ref: 'target_has_target',
    value: () => document.getElementById('target').checked,
  },
  target_is_stunned: {
    ref: 'target_is_stunned',
    id: 'target-is-stunned',
    label: 'Target is stunned',
    type: 'checkbox',
    value: () => document.getElementById('target-is-stunned').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_stun.png'
  },
  target_has_barrier: {
    ref: 'target_has_barrier',
    id: 'target-has-barrier',
    label: 'Target has Barrier',
    type: 'checkbox',
    value: () => document.getElementById('target-has-barrier').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_protect.png'
  },
  target_magic_nailed: {
    ref: 'target_magic_nailed',
    id: 'target-magic-nailed',
    label: 'Magic Nail on Target',
    type: 'checkbox',
    value: () => document.getElementById('target-magic-nailed').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_nail.png'
  },
  target_nb_bleed: {
    ref: 'target_nb_bleed',
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
    ref: 'target_bleed_detonate',
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
    ref: 'target_burn_detonate',
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
  target_bomb_detonate: {
    ref: 'target_bomb_detonate',
    id: 'target-bomb-detonate',
    label: 'Bomb effects to Detonate',
    type: 'slider',
    min: 0,
    max: 15,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('target-bomb-detonate').value),
    icon: 'https://epic7x.com/wp-content/uploads/2019/07/bomb.png'
  },
  caster_max_hp: {
    ref: 'caster_max_hp',
    id: 'caster-max-hp',
    label: 'Caster\'s Max HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: 10000,
    value: () => Number(document.getElementById('caster-max-hp').value)
  },
  caster_hp_pc: {
    ref: 'caster_hp_pc',
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
    ref: 'caster_hp',
    id: 'caster-hp',
    label: 'Caster\'s HP',
    type: 'slider',
    min: 1000,
    max: 50000,
    default: 10000,
    value: () => Number(document.getElementById('caster-hp').value)
  },
  caster_hp_above_50pc: {
    ref: 'caster_hp_above_50pc',
    id: 'caster-hp-above-50pc',
    label: 'Caster\'s HP above 50%',
    type: 'checkbox',
    value: () => document.getElementById('caster-hp-above-50pc').checked,
    default: true,
  },
  caster_defense: {
    ref: 'caster_defense',
    id: 'caster-defense',
    label: 'Caster\'s Defense',
    type: 'slider',
    min: 200,
    max: 5000,
    default: 750,
    value: () => Number(document.getElementById('caster-defense').value)
        * (1 + (elements.caster_defense_up.value() ? 0.6 : 0) + (document.getElementById('vigor').checked ? 0.3 : 0)),
  },
  caster_defense_up: {
    ref: 'caster_defense_up',
    id: 'caster-defense-up',
    label: 'Increased Defense',
    type: 'checkbox',
    value: () => document.getElementById('caster-defense-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_def_up.png'
  },
  caster_speed: {
    ref: 'caster_speed',
    id: 'caster-speed',
    label: 'Caster\'s Speed',
    type: 'slider',
    min: 70,
    max: 350,
    default: 150,
    value: () => Number(document.getElementById('caster-speed').value)*(elements.caster_speed_up.value() ? 1.3 : 1),
  },
  caster_speed_up: {
    ref: 'caster_speed_up',
    id: 'caster-speed-up',
    label: 'Increased Speed',
    type: 'checkbox',
    value: () => document.getElementById('caster-speed-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_speed_up.png'
  },
  caster_nb_buff: {
    ref: 'caster_nb_buff',
    id: 'caster-nb-buff',
    label: 'Buffs on Caster',
    type: 'slider',
    min: 0,
    max: 9,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('caster-nb-buff').value)
  },
  allies_nb_buff: {
    ref: 'allies_nb_buff',
    id: 'allies-nb-buff',
    label: 'Buffs on All Allies',
    type: 'slider',
    min: 0,
    max: 25,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('allies-nb-buff').value)
  },
  caster_turn: {
    ref: 'caster_turn',
    id: 'caster-turn',
    label: 'Caster\'s Turn',
    type: 'checkbox',
    value: () => document.getElementById('caster-turn').checked
  },
  caster_has_buff: {
    ref: 'caster_has_buff',
    id: 'caster-has-buff',
    label: 'Caster has buff',
    type: 'checkbox',
    value: () => document.getElementById('caster-has-buff').checked
  },
  caster_has_debuff: {
    ref: 'caster_has_debuff',
    id: 'caster-has-debuff',
    label: 'Caster has debuffs',
    type: 'checkbox',
    value: () => document.getElementById('caster-has-debuff').checked
  },
  caster_full_focus: {
    ref: 'caster_full_focus',
    id: 'caster-full-focus',
    label: 'Full Focus',
    type: 'checkbox',
    value: () => document.getElementById('caster-full-focus').checked
  },
  caster_full_fighting_spirit: {
    ref: 'caster_full_fighting_spirit',
    id: 'caster-full-fighting-spirit',
    label: 'Full Fighting Spirit',
    type: 'checkbox',
    value: () => document.getElementById('caster-full-fighting-spirit').checked
  },
  caster_nb_focus: {
    ref: 'caster_nb_focus',
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
    ref: 'caster_fighting_spirit',
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
    ref: 'caster_invincible',
    id: 'caster-invincible',
    label: 'Caster is Invincible',
    type: 'checkbox',
    value: () => document.getElementById('caster-invincible').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_invincible.png'
  },
  caster_perception: {
    ref: 'caster_perception',
    id: 'caster-perception',
    label: 'Caster has Perception',
    type: 'checkbox',
    value: () => document.getElementById('caster-perception') ? document.getElementById('caster-perception').checked : false,
    icon: 'https://epic7x.com/wp-content/uploads/2021/05/Perception.png'
  },
  caster_vigor: {
    value: () => document.getElementById('vigor') ? document.getElementById('vigor').checked : false,
  },
  caster_enrage: {
    ref: 'caster_enrage',
    id: 'caster-enrage',
    label: 'Caster has Rage',
    type: 'checkbox',
    value: () => document.getElementById('caster-enrage') ? document.getElementById('caster-enrage').checked : false,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_madness.png'
  },
  caster_immense_power: {
    ref: 'caster_immense_power',
    id: 'caster-immense-power',
    label: 'Caster has Immense Power',
    type: 'checkbox',
    value: () => document.getElementById('caster-immense-power')
        ? document.getElementById('caster-immense-power').checked
        : false,
  },
  caster_stealth: {
    ref: 'caster_stealth',
    id: 'caster-stealth',
    label: 'Caster has Stealth',
    type: 'checkbox',
    value: () => document.getElementById('caster-stealth').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_hide.png'
  },
  critical_hit_stack: {
    ref: 'critical_hit_stack',
    id: 'critical-hit-stack',
    label: 'Critical Hit Stack',
    type: 'slider',
    min: 0,
    max: 50,
    default: 0,
    value: () => Number(document.getElementById('critical-hit-stack').value)
  },
  critical_hit_stack_12: {
    ref: 'critical_hit_stack_12',
    id: 'critical-hit-stack-12',
    label: 'Critical Hit Stack',
    type: 'slider',
    min: 0,
    max: 12,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('critical-hit-stack-12').value)
  },
  critical_hit_stack_8: {
    ref: 'critical_hit_stack_8',
    id: 'critical-hit-stack-8',
    label: 'Critical Hit Stack',
    type: 'slider',
    min: 0,
    max: 8,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('critical-hit-stack-8').value)
  },
  non_attack_skill_stack_8: {
    ref: 'non_attack_skill_stack_8',
    id: 'stack-non-attack-skill-8',
    label: 'Non-Attack Skill Stack',
    type: 'slider',
    min: 0,
    max: 8,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('stack-non-attack-skill-8').value)
  },
  non_attack_skill_stack_10: {
    ref: 'non_attack_skill_stack_10',
    id: 'stack-non-attack-skill-10',
    label: 'Non-Attack Skill Stack',
    type: 'slider',
    min: 0,
    max: 10,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('stack-non-attack-skill-10').value)
  },
  single_attack_stack_3: {
    ref: 'single_attack_stack_3',
    id: 'single-stack-skill-3',
    label: 'Single Attack Stack',
    type: 'slider',
    min: 0,
    max: 3,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('single-stack-skill-3').value)
  },
  dual_attack_stack_5: {
    ref: 'dual_attack_stack_5',
    id: 'dual-stack-skill-5',
    label: 'Dual Attack Stack',
    type: 'slider',
    min: 0,
    max: 5,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('dual-stack-skill-5').value)
  },
  attack_skill_stack_3: {
    ref: 'attack_skill_stack_3',
    id: 'stack-attack-skill-3',
    label: 'Attack Stack',
    type: 'slider',
    min: 0,
    max: 3,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('stack-attack-skill-3').value)
  },
  attack_skill_stack_5: {
    ref: 'attack_skill_stack_5',
    id: 'stack-attack-skill-5',
    label: 'Attack Stack',
    type: 'slider',
    min: 0,
    max: 5,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('stack-attack-skill-5').value)
  },
  non_attack_skill_stack_3: {
    ref: 'non_attack_skill_stack_3',
    id: 'stack-non-attack-skill-3',
    label: 'Non-Attack Skill Stack',
    type: 'slider',
    min: 0,
    max: 3,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('stack-non-attack-skill-3').value)
  },
  turn_stack: {
    ref: 'turn_stack',
    id: 'turn-stack',
    label: 'Turn Stack',
    type: 'slider',
    min: 0,
    max: 20,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('turn-stack').value)
  },
  turn_stack_3: {
    ref: 'turn_stack_3',
    id: 'turn-stack-3',
    label: 'Turn Stack',
    type: 'slider',
    min: 0,
    max: 3,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('turn-stack-3').value)
  },
  aoe_stack_5: {
    ref: 'aoe_stack_5',
    id: 'aoe-stack-5',
    label: 'AoE Attack Stack',
    type: 'slider',
    min: 0,
    max: 5,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('aoe-stack-5').value)
  },
  caster_attacked_stack_3: {
    ref: 'caster_attacked_stack_3',
    id: 'caster-attacked-stack-3',
    label: 'Caster Attacked Stack',
    type: 'slider',
    min: 0,
    max: 3,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('caster-attacked-stack-3').value)
  },
  caster_attacked_stack_5: {
    ref: 'caster_attacked_stack_5',
    id: 'caster-attacked-stack-5',
    label: 'Caster Attacked Stack',
    type: 'slider',
    min: 0,
    max: 5,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('caster-attacked-stack-5').value)
  },
  dead_people: {
    ref: 'dead_people',
    id: 'dead-people',
    label: 'People who died',
    type: 'slider',
    min: 0,
    max: 8,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('dead-people').value)
  },
  enemy_counters: {
    ref: 'enemy_counters',
    id: 'enemy-counters',
    label: 'Enemy Counter-attacks',
    type: 'slider',
    min: 0,
    max: 4,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('enemy-counters').value)
  },
  highest_ally_attack: {
    ref: 'highest_ally_attack',
    id: 'highest-ally-attack',
    label: 'Highest Ally Attack',
    type: 'slider',
    min: 200,
    max: 10000,
    default: 4000,
    value: () => Number(document.getElementById('highest-ally-attack').value)
        * (elements.ally_atk_up.value() ? 1.5 : 1)
        * (elements.ally_atk_up_great.value() ? 1.75 : 1),
  },
  ally_atk_up: {
    ref: 'ally_atk_up',
    id: 'ally-atk-up',
    label: 'Ally has Increased Attack',
    type: 'checkbox',
    value: () => document.getElementById('ally-atk-up').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2018/12/stic_att_up.png'
  },
  ally_atk_up_great: {
    ref: 'ally_atk_up_great',
    id: 'ally-atk-up-great',
    label: 'Ally has Increased Attack (Great)',
    type: 'checkbox',
    value: () => document.getElementById('ally-atk-up-great').checked,
    icon: 'https://epic7x.com/wp-content/uploads/2019/01/greater-attack-icon.png'
  },
  skill_tree_completed: {
    ref: 'skill_tree_completed',
    id: 'skill-tree-completed',
    label: 'Skill Tree Completed',
    type: 'checkbox',
    default: true,
    value: () => document.getElementById('skill-tree-completed').checked,
  },
  s3_stack: {
    ref: 's3_stack',
    id: 's3-stack',
    label: 'S3 Stack',
    type: 'slider',
    min: 0,
    max: 3,
    default: 0,
    readonly: true,
    value: () => Number(document.getElementById('s3-stack').value)
  },
  all_allies_fire: {
    ref: 'all_allies_fire',
    id: 'all-allies-fire',
    label: 'All Allies Fire',
    type: 'checkbox',
    value: () => document.getElementById('all-allies-fire').checked,
  },
  exclusive_equipment_1: {
    ref: 'exclusive_equipment_1',
    id: 'exclusive-equipment-1',
    label: 'Exclusive Equipment #1',
    type: 'checkbox',
    value: () => document.getElementById('exclusive-equipment-1').checked,
  },
  exclusive_equipment_2: {
    ref: 'exclusive_equipment_2',
    id: 'exclusive-equipment-2',
    label: 'Exclusive Equipment #2',
    type: 'checkbox',
    value: () => document.getElementById('exclusive-equipment-2').checked,
  },
  exclusive_equipment_3: {
    ref: 'exclusive_equipment_3',
    id: 'exclusive-equipment-3',
    label: 'Exclusive Equipment #3',
    type: 'checkbox',
    value: () => document.getElementById('exclusive-equipment-3').checked,
  },
};

elements.caster_speed.sub_elements = [elements.caster_speed_up];
elements.caster_defense.sub_elements = [elements.caster_defense_up];
elements.highest_ally_attack.sub_elements = [elements.ally_atk_up, elements.ally_atk_up_great];
elements.target_attack.sub_elements = [elements.target_atk_up, elements.target_atk_up_great, elements.target_atk_down];

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
                        <label for="molagora-${id}" class="col-sm-12 col-md-1 col-form-label form-control-sm text-center mola-skill-label"><h5>${skillLabel(id)}</h5></label>
                        <div class="input-group input-group-sm col-md-2 col-sm-12">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button" id="molagora-${id}-minus" onclick="minusMola('${id}')">&minus;</button>
                            </div>
                            <input type="number" class="form-control text-center" id="molagora-${id}" min="0" max="${skill.enhance.length}" value="${skill.enhance.length}" readonly onkeyup="update('molagora-${id}')">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="molagora-${id}-plus" onclick="plusMola('${id}')">&plus;</button>
                            </div>
                        </div>
                        <input id="molagora-${id}-slide" type="range" min="0" max="${skill.enhance.length}" class="custom-range col-md-${skill.enhance.length} col-sm-12 mt-3 mt-md-0 ml-2 ml-md-0" value="${skill.enhance.length}" oninput="slideMola('${id}')" />
                        <div class="col text-right molagora-badge">
                            <span class="badge badge-pill badge-dark">+<span id="molagora-${id}-percent">0</span>%</span>
                        </div>
                    </div>`);
      updateMolaBonus(id);
    }
  }

  document.getElementById('elem-adv-icon').innerHTML = antiElemIcon(hero.element);
};

const showArtifactInfo = (artifact) => {
  const block = document.getElementById('artifact-info');
  block.innerHTML = '';

  if (artifact.info) {
    block.innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
                      <b>${artifactName(artifact.id)}</b>: ${artifact.info}
                   </div>`;
  }
};

const buildArtifact = (artifact) => {
  if (artifact) showArtifactInfo(artifact);
  const specificBlock = document.getElementById('artifact-custom-block');
  if (artifact && !artifact.form && !artifact.info) {
    specificBlock.innerHTML = '';
  }

  if (!artifact || (!artifact.scale && !artifact.form && !artifact.info)) {
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

const refreshArtifactList = (hero) => {
  const artiSelector = document.getElementById('artifact');
  for (const artiOpt of artiSelector.querySelectorAll('option')) {
    if (!artiOpt.value) continue;
    artiOpt.disabled = artifacts[artiOpt.value].exclusive && (artifacts[artiOpt.value].exclusive !== hero.classType);
  }
  if (artiSelector.options[artiSelector.selectedIndex].disabled) {
    artiSelector.value = '';
  }

  $('#artifact').selectpicker('refresh');
};

const buildElement = (elem, parent) => {
  if (elem.type === 'slider') {
    $(parent).append(`<div id="${elem.id}-block" class="stat-block">
                        <div class="form-group row col-sm-12">
                            <label for="crit" class="col-md-9 col-form-label form-control-sm">
                                <h5>${elem.icon ? '<img src="'+elem.icon+'" width="20" height="20" /> ' : ''}${formLabel(elem.ref)}</h5>
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
                                    ${elem.icon ? '<img src="'+elem.icon+'" width="20" height="20" />' : ''} ${formLabel(elem.ref)}
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

const elemIcon = (elem) => {
  return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/${elem.charAt(0).toUpperCase() + elem.slice(1)}.png' width='20', height='20' alt='${elem}' />`
};

const antiElemIcon = (elem) => {
  switch (elem) {
    case element.ice: return elemIcon(element.fire);
    case element.fire: return elemIcon(element.earth);
    case element.earth: return elemIcon(element.ice);
    case element.light: return elemIcon(element.dark);
    case element.dark: return elemIcon(element.light);
  }
};

const classIcon = (type) => {
  switch (type) {
    case classType.warrior: return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/Warrior.png' width='18', height='18' alt='${type}' />`;
    case classType.thief: return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/Thief.png' width='18', height='18' alt='${type}' />`;
    case classType.soul_weaver: return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/Soul%20Weaver.png' width='18', height='18' alt='${type}' />`;
    case classType.knight: return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/Knight.png' width='18', height='18' alt='${type}' />`;
    case classType.ranger: return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/Ranger.png' width='18', height='18' alt='${type}' />`;
    case classType.mage: return `<img src='https://epic7x.com/wp-content/themes/epic-seven/assets/img/Mage.png' width='18', height='18' alt='${type}' />`;
  }
};

const dedupeForm = (hero, artifact) => {
  const heroElIds = (hero.form || []).map(element => element.id);
  const artiElIds = (artifact.form || []).map(element => element.id);
  const intersect = heroElIds.filter(id => artiElIds.includes(id));
  if (intersect.length > 0) {
    artifact.form = artifact.form.filter(element => !intersect.includes(element.id));
  }
}

$(() => {
  try {
    const heroSelector = document.getElementById('hero');
    const artiSelector = document.getElementById('artifact');
    Object.keys(heroes).map((id => {
      $(heroSelector).append(`<option value="${id}" data-tokens="${heroNicknames(id)}" data-content="${elemIcon(heroes[id].element)}${classIcon(heroes[id].classType)}<span>${heroName(id)}</span>">${heroName(id)}</option>`)
    }));
    $(heroSelector).selectpicker('refresh');

    $(artiSelector).append(`<option value="">${artifactName('no_proc')}</option>`);
    $(artiSelector).append(`<option data-divider="true"></option>`);
    Object.keys(artifacts).map((id => {
      $(artiSelector).append(`<option value="${id}">${artifactName(id)}</option>`)
    }));

    heroSelector.onchange = () => {
      const hero = heroes[heroSelector.value];
      const artifact = { ...artifacts[artiSelector.value] };
      dedupeForm(hero, artifact);
      build(hero);
      refreshArtifactList(hero);
      buildArtifact(artifact);
      resolve();
      gtag('event', 'pick', {
        event_category: 'Hero',
        event_label: heroSelector.value,
      });
      refreshCompareBadge();
    };

    const defPresetSelector = document.getElementById('def-preset');
    defPresetSelector.onchange = () => {
      const selected = defPresetSelector.options[defPresetSelector.selectedIndex];
      if (selected.value) {
        document.getElementById('def').value = selected.dataset.def;
        update('def');
        const hpInput = document.getElementById(elements.target_max_hp.id);
        if (hpInput) {
          hpInput.value = selected.dataset.hp;
          update(elements.target_max_hp.id)
        }
        gtag('event', 'pick', {
          event_category: 'Defense',
          event_label: selected.value,
        });
      }
    };

    const dmgReducPresetSelector = document.getElementById('dmg-reduc-preset');
    dmgReducPresetSelector.onchange = () => {
      const selected = dmgReducPresetSelector.options[dmgReducPresetSelector.selectedIndex];
      if (selected.value) {
        if (selected.dataset.reduc !== undefined) {
          document.getElementById('dmg-reduc').value = selected.dataset.reduc;
          update('dmg-reduc');
        }
        if (selected.dataset.trans !== undefined) {
          document.getElementById('dmg-trans').value = selected.dataset.trans;
          update('dmg-trans');
        }
        if (selected.dataset.defup !== undefined) {
          document.getElementById('def-pc-up').value = selected.dataset.defup;
          update('def-pc-up');
        }
        gtag('event', 'pick', {
          event_category: 'Damage Reduction',
          event_label: selected.value,
        });
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
      resolve();
      gtag('event', 'pick', {
        event_category: 'Artifact',
        event_label: artiSelector.value,
      });
    };

    const hero = heroes[heroSelector.value];
    build(hero);
    refreshArtifactList(hero);
    buildArtifact(artifacts[artiSelector.value]);
    refreshCompareBadge();
  } catch (e) {}

  resolve();
  $('[data-toggle="tooltip"]').tooltip();
  const dmgBlock = $('#damage-block');
  dmgBlock.on('focus', '[data-toggle="popover"]', (event) => {
    $(event.target).popover('show');
  });
  dmgBlock.on('blur', '[data-toggle="popover"]', (event) => {
    $(event.target).popover('hide');
  });
});

(function() {
  let darkSwitch = document.getElementById('dark-switch');
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', function(event) {
      applyTheme();
      gtag('event', 'switch', {
        event_category: 'Theme',
        event_label: darkSwitch.checked ? 'dark' : 'light',
      });
    });
    function initTheme() {
      const darkThemeSelected =
          localStorage.getItem('dark-switch') !== null &&
          localStorage.getItem('dark-switch') === 'dark';
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected
          ? document.body.setAttribute('data-theme', 'dark')
          : document.body.removeAttribute('data-theme');
    }
    function applyTheme() {
      if (darkSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('dark-switch', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('dark-switch');
      }
    }
  }
})();