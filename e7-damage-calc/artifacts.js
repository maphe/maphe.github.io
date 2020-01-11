const artifactDmgType = {
  damage: 'damage',
  penetrate: 'penetrate',
  aftermath: 'aftermath',
  attack: 'attack',
  critDmgBoost: 'crit-dmg-boost',
  flat: 'flat'
};

const artifacts = {
  border_coin: {
    name: 'Border Coin',
    type: artifactDmgType.attack,
    scale: [0.075, 0.0825, 0.09, 0.0975, 0.105, 0.1125, 0.2, 0.1275, 0.135, 0.1425, 0.15],
    form: [elements.non_attack_skill_stack_3],
    exclusive: classType.warrior,
    value: (artiScale) => elements.non_attack_skill_stack_3.value()*artiScale
  },
  daydream_joker: {
    name: 'Daydream Joker',
    scale: [0.015, 0.0165, 0.018, 0.0195, 0.021, 0.0225, 0.024, 0.0255, 0.027, 0.0285, 0.03],
    type: artifactDmgType.flat,
    form: [elements.target_max_hp],
    flat: (artiScale) => elements.target_max_hp.value()*artiScale
  },
  draco_plate: {
    name: 'Draco Plate',
    scale: [0.15, 0.17, 0.18, 0.2, 0.21, 0.23, 0.24, 0.26, 0.27, 0.29, 0.3],
    type: artifactDmgType.critDmgBoost,
    exclusive: classType.warrior
  },
  exorcist_tonfa: {
    name: 'Exorcist\'s Tonfa',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage
  },
  elyha_knife: {
    name: 'Elyha\'s Knife',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.penetrate,
    exclusive: classType.thief
  },
  hell_cutter: {
    name: 'Hell Cutter',
    type: artifactDmgType.attack,
    scale: [0.02, 0.022, 0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04],
    form: [elements.turn_stack],
    exclusive: classType.warrior,
    value: (artiScale) => elements.turn_stack.value()*artiScale
  },
  iron_fan: {
    name: 'Iron Fan',
    scale: [0.16, 0.176, 0.192, 0.208, 0.224, 0.24, 0.256, 0.272, 0.288, 0.304, 0.32],
    type: artifactDmgType.damage,
    exclusive: classType.ranger,
  },
  kaladra: {
    name: 'Kal\'adra',
    scale: [0.15, 0.17, 0.18, 0.2, 0.21, 0.23, 0.24, 0.26, 0.27, 0.29, 0.3],
    type: artifactDmgType.damage,
    exclusive: classType.mage
  },
  portrait_of_the_saviors: {
    name: 'Portrait of the Saviors',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.damage
  },
  otherworldly_machinery: {
    name: 'Otherworldly Machinery',
    scale: [0.08, 0.088, 0.096, 0.104, 0.112, 0.12, 0.128, 0.136, 0.144, 0.152, 0.16],
    type: artifactDmgType.damage,
    exclusive: classType.ranger
  },
  reingar_special_drink: {
    name: 'Reingar’s Special Drink',
    type: artifactDmgType.aftermath,
    atkPercent: 0.3,
    penetrate: 0.7,
    exclusive: classType.ranger
  },
  sigurd_scythe: {
    name: 'Sigurd Scythe',
    type: artifactDmgType.attack,
    exclusive: classType.warrior,
    value: () => 0.25
  },
  sword_of_the_morning: {
    name: 'Sword of the Morning',
    type: artifactDmgType.attack,
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
  },
  uberius_tooth: {
    name: 'Uberius’s Tooth',
    type: artifactDmgType.aftermath,
    atkPercent: 0.3,
    penetrate: 0.7,
    exclusive: classType.warrior
  },
  wind_rider: {
    name: 'Wind Rider',
    type: artifactDmgType.attack,
    scale: [0.3, 0.33, 0.36, 0.39, 0.42, 0.45, 0.48, 0.51, 0.54, 0.57, 0.6],
    exclusive: classType.thief
  }
};