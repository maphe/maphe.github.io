const dot = {
  bleed: 'bleed',
  burn: 'burn'
};

const classType = {
  knight: 'knight',
  mage: 'mage',
  ranger: 'ranger',
  soul_weaver: 'soul-weaver',
  thief: 'thief',
  warrior: 'warrior',
};

const element = {
  ice: 'ice',
  fire: 'fire',
  earth: 'earth',
  dark: 'dark',
  light: 'light',
};

const heroes = {
  achates: {
    name: 'Achates',
    element: element.fire,
    classType: classType.soul_weaver,
    baseAtk: 603,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
    }
  },
  adlay: {
    name: 'Adlay',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 1039,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.25 : 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  adventurer_ras: {
    name: 'Adventurer Ras',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 758,
    form: [elements.caster_max_hp, elements.skill_tree_completed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.04,
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.1 : 0),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.04,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
    }
  },
  ains: {
    name: 'Ains',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 951,
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s1_crit: {
        onlyCrit: true,
        name: 'S1 Satisfying Strike',
        rate: 1,
        pow: 1,
        enhance_from: 's1'
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1.5,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  aither: {
    name: 'Aither',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 705,
    barrier: () => Number(document.getElementById(`atk`).value),
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      }
    }
  },
  alencia: {
    name: 'Alencia',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 975,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s2: {
        name: 'Trample',
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.15,
        enhance: [0.05, 0.05, 0, 0.05, 0.15],
      }
    }
  },
  alexa: {
    name: 'Alexa',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1081,
    form: [elements.target_nb_debuff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0.15],
      },
      s1_extra: {
        name: 'S1 Extra Attack',
        rate: 0.75,
        pow: 1,
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        mult: () => 1 + elements.target_nb_debuff.value()*0.15,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      }
    }
  },
  all_rounder_wanda: {
    name: 'All-Rounder Wanda',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1005,
    skills: {
      s1: {
        rate: 0.9,
        pow: 0.95,
        mult: () => elements.target_has_target.value() ? 1.35 : 1,
        enhance: [0.05, 0, 0, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0, 0.15, 0.15]
      }
    }
  },
  ambitious_tywin: {
    name: 'Ambitious Tywin',
    element: element.light,
    classType: classType.knight,
    baseAtk: 894,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.6,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0, 0.1, 0.15]
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0, 0.05, 0, 0, 0.05, 0.15]
      },
    }
  },
  angelic_montmorancy: {
    name: 'Angelic Montmorancy',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 540,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  angelica: {
    name: 'Angelica',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 576,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.15,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  apocalypse_ravi: {
    name: 'Apocalypse Ravi',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 975,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1,
        pow: 0.95,
        flat: (soulburn) => elements.caster_max_hp.value() * (soulburn ? 0.2 : 0.12),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1.3,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value() * 0.2,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  aramintha: {
    name: 'Aramintha',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1197,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0.15]
      },
      s3: {
        rate: 0.85,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
      }
    }
  },
  arbiter_vildred: {
    name: 'Arbiter Vildred',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1283,
    form: [elements.caster_full_focus],
    skills: {
      s1: {
        rate: 0.975,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => {
          if (elements.caster_full_focus.value()) {
            return soulburn ? 1.55 : 1.23;
          } else {
            return soulburn ? 1.29 : 1.04;
          }
        },
        pow: 0.85,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
      }
    }
  },
  armin: {
    name: 'Armin',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 721,
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.6,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1, 0.1]
      },
      s2: {
        rate: 0.3,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.5,
        enhance: [0.05, 0.1, 0.1, 0, 0, 0.15]
      }
    }
  },
  arowell: {
    name: 'Arowell',
    element: element.light,
    classType: classType.knight,
    baseAtk: 758,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.09,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 0.7,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.02,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        enhance: [0.02, 0.02, 0.02]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  assassin_cartuja: {
    name: 'Assassin Cartuja',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1119,
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  assassin_cidd: {
    name: 'Assassin Cidd',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 930,
    form: [elements.caster_speed, elements.target_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2: 1.5,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.001 + elements.target_speed.value()*0.003,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  assassin_coli: {
    name: 'Assassin Coli',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1027,
    form: [elements.caster_speed, elements.caster_stealth],
    skills: {
      s1: {
        rate: () => elements.caster_stealth.value() ? 1.2 : 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 3 : 1.5,
        pow: 0.8,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.15]
      }
    }
  },
  auxiliary_lots: {
    name: 'Auxiliary Lots',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1021,
    skills: {
      s1: {
        rate: 1,
        pow: 0.8,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1 : 0.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  azalea: {
    name: 'Azalea',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1019,
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0, 0.1, 0, 0.15, 0]
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0, 0.05, 0.05]
      },
    }
  },
  baal_and_sezan: {
    name: 'Baal & Sezan',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1197,
    form: [elements.target_nb_debuff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.15, 0, 0.15]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.35 : 1.1,
        pow: 0.9,
        mult: () => 1 + (elements.target_nb_debuff.value()*0.15),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      },
      s3: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  baiken: {
    name: 'Baiken',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.target_bleed_detonate],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.85 : 1.6,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        detonate: dot.bleed,
        detonation: () => 1.3
      }
    }
  },
  basar: {
    name: 'Basar',
    element: element.earth,
    baseAtk: 1316,
    classType: classType.mage,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      },
      s3: {
        rate: 0.9,
        pow: 0.9,
        enhance: [0.05, 0.1, 0, 0.1, 0.15]
      },
    }
  },
  bask: {
    name: 'Bask',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 842,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0.1, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
      }
    }
  },
  batisse: {
    name: 'Batisse',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1039,
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s1_rock_smash: {
        name: 'S1 Rock Smash',
        rate: 0.5,
        pow: 0.95,
        enhance_from: 's1',
      },
      s3: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  bellona: {
    name: 'Bellona',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 1003,
    form: [elements.target_max_hp, elements.nb_targets],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        flat: () => elements.target_max_hp.value() * 0.04,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 0.8,
        pow: 0.95,
        mult: () => elements.nb_targets.value() > 1 ? 1 + (elements.nb_targets.value() - 1) * 0.1 : 1,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.2 : 0.95,
        pow: 1,
        enhance: [0.15, 0, 0, 0, 0.15]
      }
    }
  },
  benevolent_romann: {
    name: 'Benevolent Romann',
    element: element.light,
    classType: classType.mage,
    baseAtk: 957,
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      mana_burst: {
        name: 'Mana Burst',
        rate: 0.5,
        pow: 1,
      },
      s3: {
        rate: 0.9,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15]
      }
    }
  },
  blaze_dingo: {
    name: 'Blaze Dingo',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 859,
    skills: {
      s1: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      }
    }
  },
  blood_blade_karin: {
    name: 'Blood Blade Karin',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1138,
    form: [elements.caster_hp_pc],
    atkUp: () => {
      let mult = 1;
      let boost = 0.167;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += 0.167 * heroes.blood_blade_karin.skills.s2.enhance[i];
      }

      if (elements.caster_hp_pc.value() < 75) mult += boost;
      if (elements.caster_hp_pc.value() < 50) mult += boost;
      if (elements.caster_hp_pc.value() < 25) mult += boost;

      return mult;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.45 : 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      },
    }
  },
  blood_moon_haste: {
    name: 'Blood Moon Haste',
    element: element.dark,
    classType: classType.soul_weaver,
    baseAtk: 621,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.4,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0.1, 0.15]
      },
      s2: {
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        noCrit: true,
        rate: 0.3,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        penetrate: () => 1.0,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
      },
    }
  },
  butcher_corps_inquisitor: {
    name: 'Butcher Corps Inquisitor',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 963,
    form: [elements.caster_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 0.85,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.005,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15]
      },
    }
  },
  captain_rikoris: {
    name: 'Captain Rikoris',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 951,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
      },
      s3: {
        rate: 0.85,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      }
    }
  },
  carmainerose: {
    name: 'Carmainerose',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1168,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  carrot: {
    name: 'Carrot',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.target_burn_detonate],
    dot: [dot.burn],
    barrier: () => Number(document.getElementById(`atk`).value)*0.6,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        detonate: dot.burn,
        detonation: () => 1.1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        enhance: [0.15, 0.15]
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  cartuja: {
    name: 'Cartuja',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 903,
    form: [elements.caster_max_hp, elements.caster_hp_pc],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.06,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => (elements.caster_hp_pc.value() < 75 ? 1 : 0.6) + (soulburn ? 0.2 : 0),
        pow: 1,
        flat: (soulburn) => {
          if (soulburn) {
            return elements.caster_max_hp.value() * (elements.caster_hp_pc.value() < 75 ? 0.1 : 0.08)
          } else {
            return elements.caster_max_hp.value() * (elements.caster_hp_pc.value() < 75 ? 0.0625 : 0.05)
          }
        },
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  cecilia: {
    name: 'Cecilia',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s2: {
        rate: 0.4,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.06,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s3: {
        rate: 0.6,
        pow: 1.5,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0, 0, 0, 0.15],
      }
    }
  },
  celeste: {
    name: 'Celeste',
    element: element.light,
    classType: classType.ranger,
    baseAtk: 929,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
      },
    }
  },
  celestial_mercedes: {
    name: 'Celestial Mercedes',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1187,
    form: [elements.target_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15],
      },
      s2: {
        rate: 0.9,
        pow: 0.9,
        flat: () => elements.target_max_hp.value()*0.04,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
      },
      s3: {
        rate: 1.2,
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
      }
    }
  },
  celine: {
    name: 'Celine',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1228,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        critDmgBoost: () => 0.2,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1.4,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.8,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  cerise: {
    name: 'Cerise',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 970,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s2: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
      },
      s3: {
        rate: 0.9,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
      },
    }
  },
  cermia: {
    name: 'Cermia',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1359,
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.65 : 1.15,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        penetrate: () => 0.5
      },
    }
  },
  challenger_dominiel: {
    name: 'Challenger Dominiel',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1187,
    form: [elements.critical_hit_stack],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1,
        pow: (soulburn) => soulburn ? 1 : 0.9,
        critDmgBoost: () => 0.2,
        flat: () => {
          let mult = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            mult += heroes.challenger_dominiel.skills.s2.enhance[i];
          }

          return Number(document.getElementById(`atk`).value) * elements.critical_hit_stack.value()*(0.054 + (0.054*mult));
        },
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
      },
      s2: {
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
      }
    }
  },
  champion_zerato: {
    name: 'Champion Zerato',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1159,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  chaos_inquisitor: {
    name: 'Chaos Inquisitor',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 963,
    form: [elements.caster_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 0.85,
        mult: () => 1 + (1-(elements.caster_hp_pc.value()/100))/2, // 0.5% increased damage per 1% self Health missing
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15]
      }
    }
  },
  chaos_sect_axe: {
    name: 'Chaos Sect Axe',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.target_hp_pc, elements.caster_max_hp],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.002,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1 : 0.8,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15]
      }
    }
  },
  charles: {
    name: 'Charles',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 957,
    form: [elements.caster_nb_buff, elements.nb_targets, elements.exclusive_equipment_2],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
      },
      s2: {
        rate: () => 1.5 + elements.caster_nb_buff.value()*0.07,
        pow: 1,
        enhance: [0.1, 0, 0.1, 0, 0.1],
      },
      s3: {
        rate: 1.2,
        pow: 1,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 3: return 1.267;
            case 2: return 1.534;
            case 1: return 1.801;
            default: return 1;
          }
        },
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
      }
    }
  },
  charlotte: {
    name: 'Charlotte',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 1134,
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s3: {
        rate: 1.4,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
      }
    }
  },
  chloe: {
    name: 'Chloe',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1177,
    form: [elements.target_magic_nailed],
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        mult: () => elements.target_magic_nailed.value() ? 1.3 : 1,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
      },
      s2: {
        rate: 0.9,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 3.5 : 2,
        pow: 0.8,
        mult: () => elements.target_magic_nailed.value() ? 1.35 : 1,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
      }
    }
  },
  church_of_ilryos_axe: {
    name: 'Church of Ilryos Axe',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.target_hp_pc],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.002,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s2: {
        rate: (soulburn) => soulburn ? 1 : 0.8,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15]
      }
    }
  },
  cidd: {
    name: 'Cidd',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1029,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: () => {
          let mult = 1.0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            mult += heroes.cidd.skills.s2.enhance[i];
          }

          return 0.95*mult;
        },
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.0021,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  clarissa: {
    name: 'Clarissa',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1252,
    form: [elements.caster_enrage],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 1,
        mult: () => elements.caster_enrage.value() ? 1.3 : 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  coli: {
    name: 'Coli',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1138,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 1.2,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        enhance: [0.05, 0.1, 0, 0.1, 0.15]
      }
    }
  },
  commander_lorina: {
    name: 'Commander Lorina',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.target_hp_pc, elements.attack_skill_stack_5],
    atkUp: () => {
      let boost = 0.1;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.commander_lorina.skills.s2.enhance[i];
      }

      return 1 + elements.attack_skill_stack_5.value()*boost;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s2: {
        enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  corvus: {
    name: 'Corvus',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 903,
    form: [elements.caster_defense, elements.caster_enrage],
    skills: {
      s1: {
        rate: () => elements.caster_enrage.value() ? 0.9 : 0.7,
        pow: 1,
        flat: () => (elements.caster_enrage.value() ? 1.2 : 0.9)*elements.caster_defense.value(),
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      },
      s2: {
        rate: 0.3,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.05, 0, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  crescent_moon_rin: {
    name:  'Crescent Moon Rin',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1027,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1.6,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  crimson_armin: {
    name: 'Crimson Armin',
    element: element.light,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.8,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.6,
        enhance: [0.05, 0, 0.1, 0, 0, 0.15]
      }
    }
  },
  crozet: {
    name: 'Crozet',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 739,
    form: [elements.caster_max_hp, elements.caster_defense],
    barrier: () => elements.caster_max_hp.value()*0.15,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 0.6,
        pow: 1.05,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.1, 0, 0, 0.15]
      },
      s2: {
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.75 : 0.5,
        pow: 0.95,
        flat: () => elements.caster_defense.value()*0.6,
        enhance: [0.1, 0, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  dark_corvus: {
    name: 'Dark Corvus',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      },
      s3: {
        noCrit: true,
        soulburn: true,
        rate: 0,
        pow: 0.95,
        flat: (soulburn) => elements.caster_max_hp.value()*(soulburn ? 0.34 : 0.2),
        penetrate: () => 1.0,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  desert_jewel_basar: {
    name: 'Desert Jewel Basar',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 932,
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  destina: {
    name: 'Destina',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 621,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
      }
    }
  },
  diene: {
    name: 'Diene',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 649,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0, 0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  dingo: {
    name: 'Dingo',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 957,
    dot: [dot.bleed, dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
      }
    }
  },
  dizzy: {
    name: 'Dizzy',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.target_has_debuff],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        mult: () => elements.target_has_debuff.value() ? 1.3 : 1.0,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        onlyCrit: true,
        noCrit: true,
        rate: 2.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  dominiel: {
    name: 'Dominiel',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 957,
    barrier: () => Number(document.getElementById(`atk`).value),
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      },
      s3: {
        rate: 0.75,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  doris: {
    name: 'Doris',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 540,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  eaton: {
    name: 'Eaton',
    element: element.light,
    classType: classType.knight,
    baseAtk: 685,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.25,
    barrierEnhance: 's3',
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        enhance: [0.05, 0.1, 0, 0.1, 0.15]
      }
    }
  },
  elena: {
    name: 'Elena',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 649,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0.15]
      }
    }
  },
  elphelt_valentine: {
    name: 'Elphelt Valentine',
    element: element.fire,
    classType: classType.ranger,
    baseAtk: 1003,
    form: [elements.target_nb_debuff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s2: {
        rate: 1,
        pow: 0.85,
        mult: () => 1 + (elements.target_nb_debuff.value()*0.15),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        rate: 1.1,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15]
      }
    }
  },
  elson: {
    name: 'Elson',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 540,
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.1]
      },
      s2: {
        rate: 0.7,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15]
      }
    }
  },
  enott: {
    name: 'Enott',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1019,
    form: [elements.target_hp_pc],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      }
    }
  },
  faithless_lidica: {
    name: 'Faithless Lidica',
    element: element.light,
    classType: classType.ranger,
    baseAtk: 1182,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.15]
      },
      s3: {
        rate: 1.4,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      },
    }
  },
  falconer_kluri: {
    name: 'Falconer Kluri',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 703,
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.5,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15]
      }
    }
  },
  fallen_cecilia: {
    name: 'Fallen Cecilia',
    element: element.dark,
    classType: classType.knight,
    baseAtk: 894,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.1,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
      },
      s3: {
        rate: 0.65,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  fighter_maya: {
    name: 'Fighter Maya',
    element: element.light,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_defense, elements.target_hp_pc],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.75,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.7,
        pow: 1,
        flat: () => elements.caster_defense.value()*1.5,
        mult: () => elements.target_hp_pc.value() < 30 ? 3 : 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  free_spirit_tieria: {
    name: 'Free Spirit Tieria',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 957,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        critDmgBoost: () => 0.2,
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.05, 0.15]
      }
    }
  },
  furious: {
    name: 'Furious',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 1068,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.95 : 1.65,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.1]
      }
    }
  },
  general_purrgis: {
    name: 'General Purrgis',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 903,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  gloomyrain: {
    name: 'Gloomyrain',
    element: element.light,
    classType: classType.mage,
    baseAtk: 1199,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.1, 0, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.95 : 0.7,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15, 0]
      }
    }
  },
  guider_aither: {
    name: 'Guider Aither',
    element: element.light,
    classType: classType.mage,
    baseAtk: 1252,
    barrier: () => Number(document.getElementById(`atk`).value),
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.8,
        pow: 0.95,
        enhance: [0.1, 0, 0, 0.1, 0.15]
      }
    }
  },
  gunther: {
    name: 'Gunther',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 1426,
    form: [elements.target_has_bleed],
    dot: [dot.bleed],
    skills: {
      s1: {
        noCrit: true,
        rate: 1,
        pow: 0.85,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        noCrit: true,
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.9 : 2.2,
        pow: 0.85,
        mult: () => elements.target_has_bleed.value() ? 1.3 : 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  hataan: {
    name: 'Hataan',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 1081,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.95,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.3,
        pow: 0.85,
        mult: () => 1 + elements.caster_speed.value()*0.00125,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1, 0.1]
      }
    }
  },
  haste: {
    name: 'Haste',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 1089,
    form: [elements.nb_targets],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1,
        pow: 1,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 1: return 2.5;
            case 2: return 2.0;
            case 3: return 1.5;
            default: return 1.0;
          }
        },
        enhance: [0.15, 0, 0, 0, 0.15]
      }
    }
  },
  hazel: {
    name: 'Hazel',
    element: element.fire,
    classType: classType.soul_weaver,
    baseAtk: 762,
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      }
    }
  },
  helga: {
    name: 'Helga',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1000,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      },
      s2: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      }
    }
  },
  hurado: {
    name: 'Hurado',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 930,
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0, 0, 0.15]
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  iseria: {
    name: 'Iseria',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 1158,
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0.05, 0.1, 0.1]
      },
      s3: {
        rate: 2,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      }
    }
  },
  jecht: {
    name: 'Jecht',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 796,
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      },
      s3: {
        rate: 0.9,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  jena: {
    name: 'Jena',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1063,
    form: [elements.target_nb_debuff],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        mult: () => 1 + elements.target_nb_debuff.value()*0.1,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  judge_kise: {
    name: 'Judge Kise',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 1039,
    form: [elements.nb_targets],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.15, 0, 0, 0.15]
      },
      s2: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (elements.nb_targets.value()-1)*0.1,
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0, 0.1, 0, 0, 0.1, 0.15]
      }
    }
  },
  judith: {
    name: 'Judith',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 848,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  karin: {
    name: 'Karin',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1188,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.1, 0.1, 0.1]
      },
      s2: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.6,
        pow: 0.85,
        critDmgBoost: () => 0.5,
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.1]
      }
    }
  },
  kawerik: {
    name: 'Kawerik',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1306,
    form: [elements.target_speed, elements.caster_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.4,
        pow: 1,
        mult: () => 1 + elements.target_speed.value()*0.003,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 0.8,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        penetrate: () => elements.caster_speed_up.value() ? 0.3 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  kayron: {
    name: 'Kayron',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 1119,
    form: [elements.caster_hp_pc, elements.exclusive_equipment_1, elements.exclusive_equipment_2],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.35 : 0.95,
        pow: 1,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.0015,
        exEq: () => elements.exclusive_equipment_1.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
      },
      s3: {
        rate: 1.7,
        pow: 0.9,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.003,
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      }
    }
  },
  ken: {
    name: 'Ken',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.caster_max_hp, elements.caster_vigor],
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1.2,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.3,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15]
      }
    }
  },
  khawana: {
    name: 'Khawana',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 957,
    form: [elements.target_has_debuff, elements.all_allies_fire],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        afterMath: () => elements.target_has_debuff.value() ? { atkPercent: 0.6, penetrate: 0.7 } : null,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 1,
        mult: (soulburn) => elements.all_allies_fire.value() ? (soulburn ? 1.25 : 1.35) : 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
    }
  },
  khawazu: {
    name: 'Khawazu',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1119,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  kikirat_v2: {
    name: 'Kikirat v2',
    element: element.light,
    classType: classType.knight,
    baseAtk: 667,
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.05, 0, 0.05, 0, 0.05]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.5 : 0.4,
        pow: 1,
        flat: (soulburn) => elements.caster_defense.value()*(soulburn ? 0.6 : 0.5),
        enhance: [0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  kiris: {
    name: 'Kiris',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 857,
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.05, 0.05]
      }
    }
  },
  kise: {
    name: 'Kise',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1283,
    form: [elements.target_has_buff, elements.caster_stealth, elements.caster_hp_pc],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.4 : 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        mult: () => elements.target_has_buff.value() ? 1.7 : 1
      },
      s2: {
        rate: 0.8,
        pow: 1,
        penetrate: () => elements.caster_stealth.value() ? 0.6 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        rate: 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_hp_pc.value()*0.0035,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  kitty_clarissa: {
    name: 'Kitty Clarissa',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 957,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.9,
        pow: 0.8,
        flat: () => elements.caster_max_hp.value()*0.06,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1]

      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 0.95,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  kizuna_ai: {
    name: 'Kizuna AI',
    element: element.fire,
    classType: classType.soul_weaver,
    baseAtk: 576,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.14,
    barrierEnhance: 's3',
    skills: {
      s1: {
        rate: 0.5,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        enhance: [0.05, 0.1, 0.15]
      },
    }
  },
  kluri: {
    name: 'Kluri',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 703,
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.5,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15]
      }
    }
  },
  krau: {
    name: 'Krau',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 839,
    form: [elements.caster_max_hp, elements.caster_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => 0.085*elements.caster_max_hp.value(),
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => 0.13*elements.caster_max_hp.value(),
        enhance: [0.05, 0, 0.05, 0, 0, 0.1, 0.1]
      },
      s3: {
        noCrit: true,
        rate: 0.3,
        pow: 1,
        flat: () => 0.53571*(elements.caster_max_hp.value()-elements.caster_hp.value()),
        penetrate: () => 1.0,
      }
    }
  },
  lena: {
    name: 'Lena',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 951,
    form: [elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1.15,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.2 : 1,
        pow: 1,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.002,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
      },
    }
  },
  leo: {
    name: 'Leo',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 930,
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      },
      s2: {
        rate: 1.35,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        rate: 0.8,
        pow: 0.8,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  lidica: {
    name: 'Lidica',
    element: element.fire,
    classType: classType.ranger,
    baseAtk: 1283,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.6,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  lilias: {
    name: 'Lilias',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_max_hp, elements.highest_ally_attack],
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1,
        atk: () =>  elements.highest_ally_attack.value() * (elements.ally_atk_up.value() ? 1.5 : 1) * (elements.ally_atk_up_great.value() ? 1.75 : 1),
        noBuff: true,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
      }
    }
  },
  lilibet: {
    name: 'Lilibet',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1119,
    form: [elements.target_has_buff, elements.exclusive_equipment_1, elements.exclusive_equipment_3],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        exEq: () => elements.exclusive_equipment_1.value() ? 0.2 : 0,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.5,
        pow: 1,
        mult: () => 1 + (elements.target_has_buff.value() ? 0 : 0.2),
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.6 : 2,
        pow: 0.95,
        exEq: () => elements.exclusive_equipment_3.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  little_queen_charlotte: {
    name: 'Little Queen Charlotte',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 1119,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1.5,
        pow: 1,
        mult: () => document.getElementById(`elem-adv`).checked ? 1.3 : 1,
        penetrate: () => 0.5,
        enhance: [0.05, 0.05, 0, 0.05, 0.15]
      },
    }
  },
  lorina: {
    name: 'Lorina',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.target_hp_pc, elements.attack_skill_stack_5],
    atkUp: () => {
      let boost = 0.1;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.lorina.skills.s2.enhance[i];
      }

      return 1 + elements.attack_skill_stack_5.value()*boost;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s2: {
        enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  lots: {
    name: 'Lots',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 603,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      }
    }
  },
  ludwig: {
    name: 'Ludwig',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 1412,
    form: [elements.caster_invincible],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.65,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 0.95,
        penetrate: () => elements.caster_invincible.value() ? 0.5 : 0.2,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  luluca: {
    name: 'Luluca',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1316,
    form: [elements.target_hp_pc, elements.s3_stack],
    barrier: () => Number(document.getElementById('atk').value)*(1+elements.s3_stack.value()*0.2)*0.375,
    barrierEnhance: 's2',
    atkUp: () => 1 + elements.s3_stack.value()*0.2,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (1-(elements.target_hp_pc.value()/100))*0.2,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        enhance: [0.05, 0.05, 0, 0.05, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      }
    }
  },
  luna: {
    name: 'Luna',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1119,
    form: [elements.caster_hp_above_50pc, elements.nb_hits],
    atkUp: () => {
      if (!elements.caster_hp_above_50pc.value()) {
        return 1;
      }

      let mult = 1.2;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        mult += heroes.luna.skills.s2.enhance[i];
      }

      return mult;
    },
    skills: {
      s1: {
        rate: () => elements.nb_hits.value()*0.7,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        enhance: [0.01, 0.02, 0.02, 0.02, 0.03]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 1.05,
        enhance: [0.05, 0, 0.1, 0, 0.1]
      }
    }
  },
  maid_chloe: {
    name: 'Maid Chloe',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 640,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      }
    }
  },
  martial_artist_ken: {
    name: 'Martial Artist Ken',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1359,
    form: [elements.caster_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        onlyCrit: true,
        rate: 1.2,
        pow: 0.95,
        mult: () => {
          let extra = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s1`).value); i++) {
            extra += heroes.martial_artist_ken.skills.s1.enhance[i];
          }
          return (1 + (100-elements.caster_hp_pc.value())*0.004 + extra)
        },
        enhance: [0.05, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  mascot_hazel: {
    name: 'Mascot Hazel',
    element: element.fire,
    classType: classType.soul_weaver,
    baseAtk: 762,
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      }
    }
  },
  maya: {
    name: 'Maya',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.5,
        pow: 0.95,
        flat: () => elements.caster_defense.value()*0.75,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.8,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      }
    }
  },
  melissa: {
    name: 'Melissa',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1412,
    form: [elements.caster_hp_pc],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.5 : 1,
        pow: 1.1,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.0035,
        enhance: [0.05, 0, 0.05, 0, 0.1]
      },
      s2: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  mercedes: {
    name: 'Mercedes',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1187,
    form: [elements.nb_targets, elements.target_hp_pc],
    skills: {
      s1: {
        rate: 0.7,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.9 : 0.7,
        pow: 0.9,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 1: return 1.9;
            case 2: return 1.6;
            case 3: return 1.3;
            default: return 1;
          }
        },
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        rate: 1.2,
        pow: 0.8,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.003,
        enhance: [0.1, 0.1, 0, 0.15, 0.15]
      }
    }
  },
  mercenary_helga: {
    name: 'Mercenary Helga',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1000,
    form: [elements.skill_tree_completed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.1 : 0),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      },
      s2: {
        rate: 1.5,
        pow: 0.95,
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.05 : 0),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      }
    }
  },
  mighty_scout: {
    name: 'Mighty Scout (Mouse)',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 919,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1.35,
        pow: 1,
        penetrate: () => 0.7,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  mirsa: {
    name: 'Mirsa',
    element: element.light,
    classType: classType.thief,
    baseAtk: 885,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.1, 0, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1.8,
        pow: 0.85,
        mult: () => 1 + elements.caster_speed.value()*0.0015,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15]
      }
    }
  },
  mistychain: {
    name: 'Mistychain',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1244,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 1.3,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  montmorancy: {
    name: 'Montmorancy',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 540,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  mucacha: {
    name: 'Mucacha',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1000,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.5,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      }
    }
  },
  nemunas: {
    name: 'Nemunas',
    element: element.fire,
    classType: classType.ranger,
    baseAtk: 920,
    form: [elements.target_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.15]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.7 : 1,
        pow: 0.8,
        flat: (soulburn) => elements.target_max_hp.value()*(soulburn ? 0.085 : 0.05),
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.15]
      }
    }
  },
  otillie: {
    name: 'Otillie',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 885,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 1,
        enhance: [0.1, 0, 0, 0, 0.15]
      }
    }
  },
  pavel: {
    name: 'Pavel',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 1283,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1.1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.05, 0, 0.1]
      },
      s2: {
        aoe: true,
        rate: 0.8,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        rate: 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.0015,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  pearlhorizon: {
    name: 'Pearlhorizon',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 921,
    form: [elements.target_max_hp, elements.target_has_sleep],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
      },
      s2: {
        rate: 0.6,
        pow: 1,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 0.9,
        flat: () => elements.target_has_sleep.value() ? elements.target_max_hp.value()*0.2 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      },
    }
  },
  purrgis: {
    name: 'Purrgis',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1119,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        name: 'S2 (Counter)',
        rate: 1,
        pow: 1,
        enhance_from: 's1',
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  pyllis: {
    name: 'Pyllis',
    element: element.dark,
    classType: classType.knight,
    baseAtk: 685,
    form: [elements.caster_defense],
    barrier: () => elements.caster_defense.value()*0.6,
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.4,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.3,
        pow: 0.95,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  ras: {
    name: 'Ras',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 758,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.04,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.04,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
    }
  },
  ravi: {
    name: 'Ravi',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.attack_skill_stack_5],
    atkUp: () => 1 + elements.attack_skill_stack_5.value()*0.15,
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.05, 0.05]
      }
    }
  },
  ray: {
    name: 'Ray',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 694,
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.1, 0.15]
      }
    }
  },
  remnant_violet: {
    name: 'Remnant Violet',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1283,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.3,
        pow: 1,
        penetrate: () => 0.5,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  requiemroar: {
    name: 'Requiemroar',
    element: element.dark,
    classType: classType.soul_weaver,
    baseAtk: 827,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.7 : 1.8,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
    }
  },
  researcher_carrot: {
    name: 'Researcher Carrot',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.target_burn_detonate, elements.skill_tree_completed],
    dot: [dot.burn],
    barrier: () => Number(document.getElementById(`atk`).value)*0.6,
    barrierEnhance: 's2',
    skills: {
      s1: {
        pow: 0.95,
        rate: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        detonate: dot.burn,
        detonation: () => 1.1,
      },
      s2: {
        enhance: [0.15, 0.15]
      },
      s3: {
        pow: 1,
        rate: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15],
        mult: () => elements.skill_tree_completed.value() ? 1.1 : 1
      }
    }
  },
  righteous_thief_roozid: {
    name: 'Righteous Thief Roozid',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 812,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.8,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.2,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  rikoris: {
    name: 'Rikoris',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 951,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
      },
      s3: {
        rate: 0.6,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      }
    }
  },
  rima: {
    name: 'Rima',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 822,
    skills: {
      s1: {
        rate: 1,
        pow: 0.8,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        rate: 1.3,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  rin: {
    name: 'Rin',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 594,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      }
    }
  },
  roaming_warrior_leo: {
    name: 'Roaming Warrior Leo',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1088,
    form: [elements.target_has_debuff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => elements.target_has_debuff.value() ? 1.1 : 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 0.8,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15]
      }
    }
  },
  roana: {
    name: 'Roana',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 621,
    form: [elements.caster_max_hp],
    barrier: () => {
      const scale = [0, 0.05, 0, 0.1, 0, 0.1, 0];
      let boost = 1.0;
      for (let i = 0; i < Number(document.getElementById(`molagora-s1`).value); i++) {
        boost += scale[i];
      }

      return elements.caster_max_hp.value()*0.1*boost;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
      }
    }
  },
  romann: {
    name: 'Romann',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1109,
    form: [elements.target_has_buff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      },
      s3: {
        rate: 0.9,
        pow: 0.85,
        mult: () => elements.target_has_buff.value() ? 1.3 : 1,
        enhance: [0.05, 0.1, 0, 0.15, 0.15]
      },
    }
  },
  roozid: {
    name: 'Roozid',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 812,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.8,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.2,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  rose: {
    name: 'Rose',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_defense],
    barrier: () => elements.caster_defense.value(),
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  ruele_of_light: {
    name: 'Ruele of Light',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 621,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.2,
    skills: {
      s1: {
        rate: 0.81,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  sage_baal_and_sezan: {
    name: 'Sage Baal & Sezan',
    element: element.light,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.caster_max_hp, elements.caster_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1.1,
        enhance: [0.05, 0, 0.05, 0, 0.1]
      },
      s2: {
        rate: 0.85,
        pow: 1.3,
      },
      s3: {
        rate: 1.2,
        pow: 1,
        flat: () => 0.3*(elements.caster_max_hp.value()-elements.caster_hp.value()),
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  schuri: {
    name: 'Schuri',
    element: element.fire,
    classType: classType.ranger,
    baseAtk: 1068,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  shooting_star_achates: {
    name: 'Shooting Star Achates',
    element: element.dark,
    classType: classType.soul_weaver,
    baseAtk: 576,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.1, 0, 0, 0.1, 0.1]
      }
    }
  },
  seaside_bellona: {
    name: 'Seaside Bellona',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 1182,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1,
        pow: 1,
        critDmgBoost: () => 0.2,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  serila: {
    name: 'Serila',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1218,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      }
    }
  },
  sez: {
    name: 'Sez',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.002,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 0.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 3.2 : 1.8,
        pow: 0.95,
        mult: (soulburn) => 1 + (100-elements.target_hp_pc.value())*(soulburn ? 0.007 : 0.003),
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  shadow_rose: {
    name: 'Shadow Rose',
    element: element.dark,
    classType: classType.knight,
    baseAtk: 889,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.15, 0.15]
      },
    }
  },
  sigret: {
    name: 'Sigret',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1228,
    form: [elements.target_nb_debuff, elements.exclusive_equipment_1],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        exEq: () => elements.exclusive_equipment_1.value() ? 0.2 : 0,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.25,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.7,
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        penetrate: () => Math.min(0.3 + elements.target_nb_debuff.value()*0.1, 1.0)
      },
    }
  },
  silk: {
    name: 'Silk',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 1188,
    form: [elements.caster_speed, elements.caster_nb_focus],
    skills: {
      s1: {
        rate: () => elements.caster_nb_focus.value() >= 2 ? 1.25 : 0.9,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15]
      },
      s3: {
        rate: 0.85,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      }
    }
  },
  silver_blade_aramintha: {
    name: 'Silver Blade Aramintha',
    element: element.light,
    classType: classType.mage,
    baseAtk: 1197,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
      s2: {
        rate: 0.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      },
    }
  },
  sinful_angelica: {
    name: 'Sinful Angelica',
    element: element.dark,
    classType: classType.soul_weaver,
    baseAtk: 649,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  sol: {
    name: 'Sol Badguy',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1177,
    form: [elements.target_has_buff, elements.target_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => elements.target_has_buff.value() ? 1 : 1.2, // 20% increased damage if target has no buffs
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        rate: 1,
        pow: 1,
        flat: () => elements.target_max_hp.value()*0.04, // 4% target max Health
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1.6,
        pow: 1,
        flat: () => elements.target_max_hp.value()*0.05, // 5% target max Health
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  specimen_sez: {
    name: 'Specimen Sez',
    element: element.light,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.target_is_stunned],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1.5,
        pow: 1,
        penetrate: () => elements.target_is_stunned.value() ? 1.0 : 0.3,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      }
    }
  },
  specter_tenebria: {
    name: 'Specter Tenebria',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1197,
    form: [elements.target_nb_debuff, elements.dead_people],
    atkUp: () => {
      let buff = 0.07;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        buff += heroes.specter_tenebria.skills.s2.enhance[i];
      }
      return 1 + Math.min(elements.dead_people.value(), 5)*buff;
    },
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.15],
      },
      s2: {
        enhance: [0.005, 0.01, 0.015],
      },
      s3: {
        rate: 1.8,
        pow: 0.95,
        mult: () => 1 + elements.target_nb_debuff.value()*0.2,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  surin: {
    name: 'Surin',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 1010,
    form: [elements.target_nb_bleed],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s2: {
        rate: 1.4,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        rate: 1.8,
        pow: 0.8,
        mult: () => elements.target_nb_bleed.value() > 0 ? 1.25 + (Math.min(elements.target_nb_bleed.value(), 5)-1)*0.25 : 1,
        enhance: [0.1, 0.1, 0, 0.15, 0.15]
      },
    }
  },
  sven: {
    name: 'Sven',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1039,
    form: [elements.caster_hp_pc, elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s1_extra: {
        name: 'S1 Extra Attack',
        rate: 0.7,
        pow: 1,
        enhance_from: 's1',
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.003,
      },
      s3: {
        rate: 0.8,
        pow: 0.8,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.005 + (100-elements.target_hp_pc.value())*0.0015,
        enhance: [0.05, 0.05, 0.1, 0, 0.1, 0.1, 0.1]
      }
    }
  },
  tamarinne: {
    name: 'Tamarinne',
    element: element.fire,
    classType: classType.soul_weaver,
    baseAtk: 932,
    skills: {
      s1: {
        rate: 1,
        pow: 0.75,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
      }
    }
  },
  taranor_guard: {
    name: 'Taranor Guard',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 951,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      }
    }
  },
  taranor_royal_guard: {
    name: 'Taranor Royal Guard',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 842,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.8,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.025,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.5,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  temmpest_surin: {
    name: 'Tempest Surin',
    element: element.light,
    classType: classType.thief,
    baseAtk: 1010,
    form: [elements.caster_hp_pc],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.0015,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.25 : 1,
        pow: 1.05,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.002,
        enhance: [0.1, 0, 0, 0, 0.15]
      }
    }
  },
  tenebria: {
    name: 'Tenebria',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1359,
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.35 : 1.1,
        pow: 1.05,
        enhance: [0.05, 0, 0, 0.1, 0.15]
      }
    }
  },
  tieria: {
    name: 'Tieria',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 839,
    form: [elements.target_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0.15, 0]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1.2,
        pow: 0.9,
        flat: (soulburn) => elements.target_max_hp.value() * (soulburn ? 0.06 : 0.04),
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
      },
    }
  },
  troublemaker_crozet: {
    name: 'Troublemaker Crozet',
    element: element.dark,
    classType: classType.knight,
    baseAtk: 776,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.2,
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.04,
        enhance: [0, 0.05, 0, 0.05, 0, 0.1, 0.15]
      }
    }

  },
  tywin: {
    name: 'Tywin',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 821,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.04,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 0.5,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15]
      }
    }
  },
  vildred: {
    name: 'Vildred',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1283,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 0.85,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 0.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 1,
        mult: (soulburn) => 1 + elements.caster_speed.value()*(soulburn ? 0.0009 : 0.00075),
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  violet: {
    name: 'Violet',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.caster_nb_focus],
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        mult: () => 1 + elements.caster_nb_focus.value()*0.15,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1, 0.1]
      }
    }
  },
  vivian: {
    name: 'Vivian',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 1228,
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.05, 0.1]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.3 : 1.05,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
      },
      s2_wave_2: {
        name: 'S2 Wave 2',
        rate: 0.55,
        pow: 0.9,
        enhance_from: 's2'
      },
      s2_wave_3: {
        name: 'S2 Wave 3',
        rate: 0.3,
        pow: 0.9,
        enhance_from: 's2'
      }
    }
  },
  wanda: {
    name: 'Wanda',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1005,
    skills: {
      s1: {
        rate: 0.9,
        pow: 0.95,
        mult: () => elements.target_has_target.value() ? 1.35 : 1,
        enhance: [0.05, 0, 0, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0, 0.15, 0.15]
      }
    }
  },
  wanderer_silk: {
    name: 'Wanderer Silk',
    element: element.light,
    classType: classType.ranger,
    baseAtk: 930,
    form: [elements.caster_speed],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 1,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        rate: 1.8,
        pow: 0.8,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        enhance: [0.1, 0.1, 0, 0.15, 0.15]
      }
    }
  },
  watcher_schuri: {
    name: 'Watcher Schuri',
    element: element.light,
    classType: classType.ranger,
    baseAtk: 970,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.7,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15]
      },
      s3: {
        rate: 0.8,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        penetrate: () => 1.0,
      }
    }
  },
  yufine: {
    name: 'Yufine',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1228,
    form: [elements.target_has_buff, elements.exclusive_equipment_2],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        exEq: () => elements.exclusive_equipment_2.value() ? 0.3 : 0,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
      },
      s2: {
        rate: 0.9,
        pow: 1,
      },
      s3: {
        rate: 2,
        pow: 0.95,
        mult: () => elements.target_has_buff.value() ? 1.5 : 1.0,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
      }
    }
  },
  yuna: {
    name: 'Yuna',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 1158,
    form: [elements.caster_speed, elements.nb_targets, elements.exclusive_equipment_3],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.85 : 0.6,
        pow: 0.8,
        mult: () => {
          let mult = 1 + elements.caster_speed.value()*0.00075;
          switch (elements.nb_targets.value()) {
            case 3: mult += 0.2; break;
            case 2: mult += 0.4; break;
            case 1: mult += 0.6; break;
          }
          return mult;
        },
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        onlyCrit: true,
        rate: 1.5,
        pow: 0.8,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 3: return 1.2;
            case 2: return 1.4;
            case 1: return 1.6;
            default: return 1;
          }
        },
        exEq: () => elements.exclusive_equipment_3.value() ? 0.3 : 0,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
      }
    }
  },
  zeno: {
    name: 'Zeno',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.caster_max_hp, elements.non_attack_skill_stack_8],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s2: {
        enhance: [0.005, 0.005, 0.005, 0.005, 0.01],
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        mult: () => {
          let extra = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            extra += heroes.zeno.skills.s2.enhance[i];
          }

          return 1 + elements.non_attack_skill_stack_8.value()*(0.07+extra)
        },
        enhance: [0.05, 0, 0.1, 0, 0.15],
      }
    }
  },
  zerato: {
    name: 'Zerato',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1159,
    form: [elements.target_has_debuff],
    skills: {
      s1: {
        rate: 1.05,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0.15]
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 0.95,
        mult: () => elements.target_has_debuff.value() ? 1.3 : 1,
        enhance: [0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
      }
    }
  }
};