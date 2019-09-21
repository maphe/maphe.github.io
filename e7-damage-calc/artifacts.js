const scaleValue = (scale) => scale[Math.floor((((4)))/3)];

const artifactDmgType = {
  damage: 'damage',
  penetrate: 'penetrate'
};

const artifacts = {
  exorcist_tonfa: {
    name: 'Exorcist\'s Tonfa',
    scale: [1.08, 1.088, 1.096, 1.104, 1.112, 1.12, 1.128, 1.136, 1.144, 1.152, 1.16],
    type: artifactDmgType.damage
  },
  elyha_knife: {
    name: 'Elyha\'s Knife',
    scale: [0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2],
    type: artifactDmgType.penetrate
  },
  iron_fan: {
    name: 'Iron Fan',
    scale: [1.16, 1.176, 1.192, 1.208, 1.224, 1.24, 1.256, 1.272, 1.288, 1.304, 1.32],
    type: artifactDmgType.damage
  },
  kaladra: {
    name: 'Kal\'adra',
    scale: [1.15, 1.17, 1.18, 1.2, 1.21, 1.23, 1.24, 1.26, 1.27, 1.29, 1.3],
    type: artifactDmgType.damage
  },
  portrait_of_the_saviors: {
    name: 'Portrait of the Saviors',
    scale: [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2],
    type: artifactDmgType.damage
  },
  otherworldly_machinery: {
    name: 'Otherworldly Machinery',
    scale: [1.08, 1.088, 1.096, 1.104, 1.112, 1.12, 1.128, 1.136, 1.144, 1.152, 1.16],
    type: artifactDmgType.damage
  }
};