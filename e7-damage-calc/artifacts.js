const artifactDmgType = {
  damage: 'damage',
  penetrate: 'penetrate',
  aftermath: 'aftermath',
  attack: 'attack',
  critDmgBoost: 'crit-dmg-boost',
  flat: 'flat',
  burn: 'burn'
};

const artifacts = {
  air_to_surface_missile_misha: {
    id: 'air_to_surface_missile_misha',
    name: 'Air-to-Surface Missile: MISHA',
    scale: [0.15, 0.17, 0.18, 0.2, 0.21, 0.23, 0.24, 0.26, 0.27, 0.29, 0.3],
    type: artifactDmgType.critDmgBoost,
    exclusive: classType.ranger,
  },
  a_little_queens_crown: {
    id: 'a_little_queens_crown',
    name: 'A Little Queen\'s Huge Crown',
    scale: [0.16, 0.176, 0.192, 0.208, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32],
    type: artifactDmgType.damage,
    exclusive: classType.warrior,
    form: [elements.target_has_barrier],
    applies: (skill) => skill.single === true,
    value: (artiScale) => artiScale/(elements.target_has_barrier.value() ? 1 : 2),
  },
  a_symbol_of_unity: {
    id: 'a_symbol_of_unity',
    name: 'A Symbol of Unity',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage
  },
  ambrote: {
    id: 'ambrote',
    name: 'Ambrote',
    type: artifactDmgType.damage,
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    exclusive: classType.ranger,
    applies: (_, skillId) => skillId === 's1',
  },
  ancient_sheath: {
    id: 'ancient_sheath',
    name: 'Ancient Sheath',
    type: artifactDmgType.damage,
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    applies: (_, skillId) => skillId === 's1',
  },
  black_hand_of_the_goddess: {
    id: 'black_hand_of_the_goddess',
    name: 'Black Hand of the Goddess',
    scale: [0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.24],
    type: artifactDmgType.critDmgBoost,
    exclusive: classType.mage,
    form: [elements.attack_skill_stack_5],
    value: (artiScale) => artiScale - ((artiScale / 10) * elements.attack_skill_stack_5.value()),
  },
  border_coin: {
    id: 'border_coin',
    name: 'Border Coin',
    type: artifactDmgType.attack,
    scale: [0.075, 0.0825, 0.09, 0.0975, 0.105, 0.1125, 0.12, 0.1275, 0.135, 0.1425, 0.15],
    form: [elements.non_attack_skill_stack_3],
    exclusive: classType.warrior,
    value: (artiScale) => elements.non_attack_skill_stack_3.value()*artiScale
  },
  daydream_joker: {
    id: 'daydream_joker',
    name: 'Daydream Joker',
    scale: [0.015, 0.0165, 0.018, 0.0195, 0.021, 0.0225, 0.024, 0.0255, 0.027, 0.0285, 0.03],
    type: artifactDmgType.flat,
    form: [elements.target_max_hp],
    flat: (artiScale) => elements.target_max_hp.value()*artiScale
  },
  dignus_orb: {
    id: 'dignus_orb',
    name: 'Dignus Orb',
    value: 0.15,
    type: artifactDmgType.damage,
    exclusive: classType.mage,
  },
  double_edged_decrescent: {
    id: 'double_edged_decrescent',
    name: 'Double-Edged Decrescent',
    type: artifactDmgType.attack,
    scale: [0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1],
    form: [elements.single_attack_stack_3],
    exclusive: classType.thief,
    value: (artiScale) => elements.single_attack_stack_3.value()*artiScale
  },
  draco_plate: {
    id: 'draco_plate',
    name: 'Draco Plate',
    scale: [0.15, 0.17, 0.18, 0.2, 0.21, 0.23, 0.24, 0.26, 0.27, 0.29, 0.3],
    type: artifactDmgType.critDmgBoost,
    exclusive: classType.warrior
  },
  dux_noctis: {
    id: 'dux_noctis',
    name: 'Dux Noctis',
    type: artifactDmgType.attack,
    scale: [0.02, 0.022, 0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04],
    form: [elements.critical_hit_stack_8],
    exclusive: classType.ranger,
    value: (artiScale) => elements.critical_hit_stack_8.value()*artiScale
  },
  els_fist: {
    id: 'els_fist',
    name: 'El\'s Fist',
    type: artifactDmgType.attack,
    scale: [0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5],
    form: [elements.caster_hp_pc],
    exclusive: classType.warrior,
    value: (artiScale) => {
      if (elements.caster_hp_pc.value() < 25) return artiScale;
      if (elements.caster_hp_pc.value() < 50) return artiScale*2/3;
      if (elements.caster_hp_pc.value() < 75) return artiScale/3;
      return 0.1;
    }
  },
  exorcist_tonfa: {
    id: 'exorcist_tonfa',
    name: 'Exorcist\'s Tonfa',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage
  },
  elyha_knife: {
    id: 'elyha_knife',
    name: 'Elyha\'s Knife',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.penetrate,
    exclusive: classType.thief
  },
  hell_cutter: {
    id: 'hell_cutter',
    name: 'Hell Cutter',
    type: artifactDmgType.attack,
    scale: [0.02, 0.022, 0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04],
    form: [elements.turn_stack],
    exclusive: classType.warrior,
    value: (artiScale) => elements.turn_stack.value()*artiScale
  },
  iron_fan: {
    id: 'iron_fan',
    name: 'Iron Fan',
    scale: [0.16, 0.176, 0.192, 0.208, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32],
    type: artifactDmgType.damage,
    exclusive: classType.ranger,
  },
  jack_o_symbol: {
    id: 'jack_o_symbol',
    name: 'Jack-O\'s Symbol',
    scale: [0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.24],
    type: artifactDmgType.damage,
    exclusive: classType.warrior,
    applies: (skill) => skill.single === true && elements.target_has_debuff.value() !== false,
  },
  junkyard_dog:{
    id: 'junkyard_dog',
    name: 'Junkyard Dog',
    type: artifactDmgType.burn,
    exclusive: classType.warrior
  },
  kaladra: {
    id: 'kaladra',
    name: 'Kal\'adra',
    scale: [0.15, 0.17, 0.18, 0.2, 0.21, 0.23, 0.24, 0.26, 0.27, 0.28, 0.3],
    type: artifactDmgType.damage,
    exclusive: classType.mage
  },
  last_teatime: {
    id: 'last_teatime',
    name: 'Last Teatime',
    scale: [0.07, 0.077, 0.084, 0.091, 0.098, 0.105, 0.112, 0.119, 0.126, 0.133, 0.14],
    type: artifactDmgType.damage,
    exclusive: classType.mage,
    applies: (skill) => skill.aoe === true
  },
  merciless_glutton: {
    id: 'merciless_glutton',
    name: 'Merciless Glutton',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage,
    exclusive: classType.warrior,
    applies: (skill) => skill.single === true
  },
  portrait_of_the_saviors: {
    id: 'portrait_of_the_saviors',
    name: 'Portrait of the Saviors',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.damage
  },
  otherworldly_machinery: {
    id: 'otherworldly_machinery',
    name: 'Otherworldly Machinery',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage,
    exclusive: classType.ranger,
    applies: (skill) => skill.aoe === true
  },
  radiant_forever: {
    id: 'radiant_forever',
    name: 'Radiant Forever',
    scale: [0.25, 0.275, 0.3, 0.325, 0.35, 0.375, 0.4, 0.425, 0.45, 0.475, 0.5],
    type: artifactDmgType.damage,
    exclusive: classType.mage,
    applies: (skill) => skill.aoe === true
  },
  reingar_special_drink: {
    id: 'reingar_special_drink',
    name: 'Reingar’s Special Drink',
    type: artifactDmgType.aftermath,
    atkPercent: 0.3,
    penetrate: 0.7,
    exclusive: classType.ranger,
    applies: (skill) => skill.aoe === true
  },
  severed_horn_wand: {
    id: 'severed_horn_wand',
    name: 'Severed Horn Wand',
    type: artifactDmgType.attack,
    exclusive: classType.mage,
    value: () => 0.15
  },
  shepherd_of_the_hollow: {
    id: 'shepherd_of_the_hollow',
    name: 'Shepherd of the Hollow',
    scale: [0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.24],
    type: artifactDmgType.damage,
    exclusive: classType.thief,
    form: [elements.caster_hp_pc],
    value: (artiScale) => {
      if (elements.caster_hp_pc.value() < 25) return artiScale;
      if (elements.caster_hp_pc.value() < 50) return artiScale*0.83;
      if (elements.caster_hp_pc.value() < 75) return artiScale*0.66;
      return artiScale*0.5;
    }
  },
  sigurd_scythe: {
    id: 'sigurd_scythe',
    name: 'Sigurd Scythe',
    type: artifactDmgType.attack,
    exclusive: classType.warrior,
    value: () => 0.25
  },
  spear_of_a_new_dawn: {
    id: 'spear_of_a_new_dawn',
    name: 'Spear of a New Dawn',
    type: artifactDmgType.aftermath,
    atkPercent: 0.4,
    penetrate: 0.7,
    exclusive: classType.knight,
    applies: (_, skillId) => skillId === 's1',
  },
  sword_of_summer_twilight: {
    id: 'sword_of_summer_twilight',
    name: 'Sword of Summer Twilight',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.penetrate,
    exclusive: classType.thief,
    applies: (skill) => skill.aoe === true,
  },
  sword_of_winter_shadow: {
    id: 'sword_of_winter_shadow',
    name: 'Sword of Winder Shadow',
    type: artifactDmgType.attack,
    exclusive: classType.thief,
    value: () => 0.15
  },
  sword_of_the_morning: {
    id: 'sword_of_the_morning',
    name: 'Sword of the Morning',
    type: artifactDmgType.attack,
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
  },
  tear_of_the_desert: {
    id: 'tear_of_the_desert',
    name: 'Tear of the Desert',
    type: artifactDmgType.attack,
    scale: [0.02, 0.022, 0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04],
    form: [elements.aoe_stack_5],
    exclusive: classType.mage,
    value: (artiScale) => elements.aoe_stack_5.value()*artiScale
  },
  time_matter: {
    id: 'time_matter',
    name: 'Time Matter',
    scale: [0.18, 0.198, 0.216, 0.234, 0.252, 0.27, 0.288, 0.306, 0.324, 0.342, 0.36],
    type: artifactDmgType.damage,
    exclusive: classType.mage,
  },
  uberius_tooth: {
    id: 'uberius_tooth',
    name: 'Uberius’s Tooth',
    type: artifactDmgType.aftermath,
    atkPercent: 0.45,
    penetrate: 0.7,
    exclusive: classType.warrior,
    applies: (skill) => skill.single === true,
  },
  victorious_flag: {
    id: 'victorious_flag',
    name: 'Victorious Flag',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage,
    info: infoLabel('victorious_flag'),
    applies: (skill) => {
      const hero = heroes[document.getElementById('hero').value];
      if (hero.element === element.dark || hero.element === element.light) return false;

      return (document.getElementById('elem-adv').checked || ((skill.elemAdv !== undefined) && skill.elemAdv() === true));
    }
  },
  violet_talisman: {
    id: 'violet_talisman',
    name: 'Violet Talisman',
    type: artifactDmgType.attack,
    scale: [0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1],
    form: [elements.turn_stack_3],
    exclusive: classType.thief,
    value: (artiScale) => elements.turn_stack_3.value()*artiScale
  },
  wind_rider: {
    id: 'wind_rider',
    name: 'Wind Rider',
    type: artifactDmgType.attack,
    scale: [0.3, 0.33, 0.36, 0.39, 0.42, 0.45, 0.48, 0.51, 0.54, 0.57, 0.6],
    exclusive: classType.thief
  },
  wings_of_light_and_shadow: {
    id: 'wings_of_light_and_shadow',
    name: 'Wings of Light and Shadow',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.damage,
    exclusive: classType.knight,
  },
};