const artifactDmgType = {
  damage: 'damage',
  penetrate: 'penetrate',
  aftermath: 'aftermath',
  attack: 'attack',
  critDmgBoost: 'crit-dmg-boost'
};

const artifacts = {
  border_coin: {
    name: 'Border Coin',
    type: artifactDmgType.attack,
    scale: [0.075, 0.0825, 0.09, 0.0975, 0.105, 0.1125, 0.2, 0.1275, 0.135, 0.1425, 0.15],
    form: [elements.non_attack_skill_stack_3],
    exclusive: classType.warrior,
    value: (artiScale) => 1 + elements.non_attack_skill_stack_3.value()*artiScale
  },
  daydream_joker: {
    name: 'Daydream Joker',
    scale: [0.015, 0.0165, 0.018, 0.0195, 0.021, 0.0225, 0.024, 0.0255, 0.027, 0.0285, 0.03],
    type: artifactDmgType.aftermath,
    form: [elements.target_max_hp],
    damage: (artiMult) => elements.target_max_hp.value()*artiMult
  },
  draco_plate: {
    name: 'Draco Plate',
    scale: [1.15, 1.17, 1.18, 1.2, 1.21, 1.23, 1.24, 1.26, 1.27, 1.29, 1.3],
    type: artifactDmgType.critDmgBoost,
  },
  exorcist_tonfa: {
    name: 'Exorcist\'s Tonfa',
    scale: [1.08, 1.088, 1.096, 1.104, 1.112, 1.12, 1.128, 1.136, 1.144, 1.152, 1.16],
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
    scale: [0.02, 0.022, 0.024, 0.026, 0.28, 0.30, 0.032, 0.034, 0.036, 0.038, 0.04],
    form: [elements.turn_stack],
    exclusive: classType.warrior,
    value: (artiScale) => 1 + elements.turn_stack.value()*artiScale
  },
  iron_fan: {
    name: 'Iron Fan',
    scale: [1.16, 1.176, 1.192, 1.208, 1.224, 1.24, 1.256, 1.272, 1.288, 1.304, 1.32],
    type: artifactDmgType.damage,
    exclusive: classType.ranger,
  },
  kaladra: {
    name: 'Kal\'adra',
    scale: [1.15, 1.17, 1.18, 1.2, 1.21, 1.23, 1.24, 1.26, 1.27, 1.29, 1.3],
    type: artifactDmgType.damage,
    exclusive: classType.mage
  },
  portrait_of_the_saviors: {
    name: 'Portrait of the Saviors',
    scale: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2],
    type: artifactDmgType.damage
  },
  otherworldly_machinery: {
    name: 'Otherworldly Machinery',
    scale: [1.08, 1.088, 1.096, 1.104, 1.112, 1.12, 1.128, 1.136, 1.144, 1.152, 1.16],
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
    value: () => 1.25
  },
  sword_of_the_morning: {
    name: 'Sword of the Morning',
    type: artifactDmgType.attack,
    scale: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2],
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
    scale: [1.3, 1.33, 1.36, 1.39, 1.42, 1.45, 1.48, 1.51, 1.54, 1.57, 1.6],
    exclusive: classType.thief
  }
};