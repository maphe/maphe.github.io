const dot = {
  bleed: 'bleed',
  burn: 'burn',
  bomb: 'bomb',
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
    }
  },
  adin: {
    name: 'Adin',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1081,
    form: [elements.nb_targets],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 3: return 1.2;
            case 2: return 1.4;
            case 1: return 1.6;
            default: return 1;
          }
        },
        multTip: () => ({ per_fewer_target: 20 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.8,
        pow: 1.05,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 4 }),
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.1 : 0),
        multTip: () => ({ skill_tree: 10 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.04,
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
    }
  },
  ainos: {
    name: 'Ainos',
    element: element.dark,
    classType: classType.soul_weaver,
    baseAtk: 804,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        aoe: true,
      }
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
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s1_crit: {
        onlyCrit: true,
        name: 'S1 Satisfying Strike',
        rate: 1,
        pow: 1,
        enhance_from: 's1',
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1.5,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      }
    }
  },
  aither: {
    name: 'Aither',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 705,
    barrier: (hero) => hero.getAtk(),
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        name: infoLabel('alencia_trample'),
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.15,
        flatTip: () => ({ caster_max_hp: 15 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.15],
        aoe: true,
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
        single: true,
      },
      s1_extra: {
        name: infoLabel('s1_extra_attack'),
        rate: 0.75,
        pow: 1,
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        mult: () => 1 + elements.target_nb_debuff.value()*0.15,
        multTip: ()=> ({ per_target_debuff: 15 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1],
        single: true,
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
        multTip: () => elements.target_has_target.value() ? { target_debuff: 35 } : null,
        enhance: [0.05, 0, 0, 0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0, 0.15, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0, 0.05, 0, 0, 0.05, 0.15],
        aoe: true,
      },
    }
  },
  angel_of_light_angelica: {
    name: 'Angel of Light Angelica',
    element: element.light,
    classType: classType.mage,
    baseAtk: 957,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.1, 0, 0.1, 0, 0.1],
        single: true,
      }
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
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  apocalypse_ravi: {
    name: 'Apocalypse Ravi',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 975,
    form: [elements.caster_max_hp, elements.dead_people],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1,
        pow: 0.95,
        flat: (soulburn) => elements.caster_max_hp.value() * (soulburn ? 0.2 : 0.12),
        flatTip: (soulburn) => ({ caster_max_hp: soulburn ? 20 : 12 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.3,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value() * 0.2,
        flatTip: () => ({ caster_max_hp: 20 }),
        mult: () => 1 + Math.min(elements.dead_people.value(), 3)*0.25,
        multTip: () => ({ dead_people: 25 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
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
        enhance: [0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  archdemon_shadow: {
    name: "Archdemon's Shadow",
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1316,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.6,
        pow: 1.3,
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
      }
    }
  },
  aria: {
    name: 'Aria',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.caster_hp_pc, elements.caster_defense],
    barrier: () => elements.caster_defense.value()*0.8,
    info: infoLabel('aria_scaling'),
    skills: {
      s1: {
        rate: 0.6,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.7,
        flatTip: () => ({ caster_defense: 70 }),
        critDmgBoost: () => (100-elements.caster_hp_pc.value())*0.005,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.05, 0.1],
      },
      s2: {
        rate: 0.6,
        pow: 1.3,
        flat: () => elements.caster_defense.value()*1.15,
        flatTip: () => ({ caster_defense: 115 }),
        critDmgBoost: () => (100-elements.caster_hp_pc.value())*0.005,
        aoe: true,
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
        flatTip: () => ({ caster_defense: 60 }),
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.3,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.5,
        flatTip: () => ({ caster_defense: 50 }),
        enhance: [0.05, 0.1, 0.1, 0, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 2 }),
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.02, 0.02, 0.02]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2: 1.5,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.001 + elements.target_speed.value()*0.003,
        multTip: () => ({ caster_speed: 0.1, target_speed: 0.3 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
      }
    }
  },
  assassin_coli: {
    name: 'Assassin Coli',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1027,
    form: [elements.caster_speed, elements.caster_stealth, elements.exclusive_equipment_1],
    skills: {
      s1: {
        rate: () => elements.caster_stealth.value() ? 1.2 : 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        exEq: () => elements.exclusive_equipment_1.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 3 : 1.5,
        pow: 0.8,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.15],
        single: true,
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
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1 : 0.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0, 0.1, 0, 0.15, 0],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15],
        aoe: true,
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
        multTip: () => ({ per_target_debuff: 15 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  bad_cat_armin: {
    name: 'Bad Cat Armin',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 912,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.15,
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.06,
        flatTip: () => ({ caster_max_hp: 6 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.3,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.2,
        flatTip: () => ({ caster_max_hp: 20 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.85 : 1.6,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        detonate: dot.bleed,
        detonation: () => 1.3,
        single: true,
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
        enhance: [0.05, 0, 0, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 0.9,
        pow: 0.9,
        enhance: [0.05, 0.1, 0, 0.1, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 7 }),
        enhance: [0.05, 0, 0.1, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1],
        single: true,
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
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s1_rock_smash: {
        name: 'S1 Rock Smash',
        rate: 0.5,
        pow: 0.95,
        enhance_from: 's1',
        aoe: true,
      },
      s3: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  belian: {
    name: 'Belian',
    element: element.light,
    classType: classType.knight,
    form: [elements.caster_max_hp],
    baseAtk: 821,
    skills: {
      s1: {
        rate: 0.6,
        pow: 1.05,
        flat: () => elements.caster_max_hp.value()*0.09,
        flatTip: () => ({ caster_max_hp: 9 }),
        enhance: [0.05, 0, 0.05, 0, 0.05, 0, 0.1],
        aoe: true,
      },
      s1_extra: {
        name: 'S1 Incursion',
        rate: 0.6,
        pow: 1.3,
        flat: () => elements.caster_max_hp.value()*0.045,
        flatTip: () => ({ caster_max_hp: 4.5 }),
        enhance_from: 's1',
        aoe: true,
      },
      s3: {
        rate: 0.6,
        pow: 1.3,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        aoe: true,
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
        flatTip: () => ({ target_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 0.95,
        mult: () => elements.nb_targets.value() > 1 ? 1 + (elements.nb_targets.value() - 1) * 0.1 : 1,
        multTip: () => ({ per_target: 10 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.2 : 0.95,
        pow: 1,
        enhance: [0.15, 0, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      mana_burst: {
        name: 'Mana Burst',
        rate: 0.5,
        pow: 1,
        aoe: true,
      },
      s3: {
        rate: 0.9,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
      }
    }
  },
  blaze_dingo: {
    name: 'Blaze Dingo',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 880,
    skills: {
      s1: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        aoe: true,
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
      let boost = 0.0051;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += 0.0051 * heroes.blood_blade_karin.skills.s2.enhance[i];
      }
      return 1+(100-elements.caster_hp_pc.value())*boost;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.45 : 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0.1, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        noCrit: true,
        rate: 0.3,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        penetrate: () => 1.0,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
        single: true,
      },
    }
  },
  briar_witch_iseria: {
    name: 'Briar Witch Iseria',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1182,
    skills: {
      s1: {
        rate: 0.85,
        pow: 1,
        afterMath: (hitType) => (hitType !== hitTypes.miss) ? { atkPercent: 0.3, penetrate: 0.7 } : null,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.2 : 0.95,
        pow: 1.1,
        afterMath: (hitType) => (hitType !== hitTypes.miss) ? { atkPercent: 0.3, penetrate: 0.7 } : null,
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
      }
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
        enhance: [0.05, 0, 0.1, 0, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 0.85,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.005,
        multTip: () => ({ caster_lost_hp_pc: 50 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15],
        single: true,
      },
    }
  },
  camilla: {
    name: 'Camilla',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 885,
    form: [elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.05, 0.1],
        mult: () => 1 + (100 - elements.target_hp_pc.value())*0.01,
        multTip: () => ({ target_lost_hp_pc: 1 }),
        single: true,
      }
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
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.85,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        aoe: true,
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
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
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
    barrier: (hero) => hero.getAtk()*0.6,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        detonate: dot.burn,
        detonation: () => 1.1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.15, 0.15]
      },
      s3: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 6 }),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
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
        flatTip: (soulburn) => (elements.caster_hp_pc.value() < 75)
            ? { caster_hp_pc_under_hp_threshold: soulburn ? 10 : 6.25 }
            : { caster_hp_pc_over_hp_threshold: soulburn ? 8 : 5 },
        enhance: [0.05, 0, 0, 0.1, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 7 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.4,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.06,
        flatTip: () => ({ caster_max_hp: 6 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
      },
      s3: {
        rate: 0.6,
        pow: 1.05,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.25 : 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1],
        aoe: true,
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
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 0.9,
        flat: () => elements.target_max_hp.value()*0.04,
        flatTip: () => ({ target_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.2,
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        aoe: true,
      }
    }
  },
  celine: {
    name: 'Celine',
    element: element.earth,
    classType: classType.thief,
    form: [elements.exclusive_equipment_2, elements.exclusive_equipment_3],
    baseAtk: 1228,
    barrier: (hero) => hero.getAtk()*0.5,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        critDmgBoost: () => 0.2,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.4,
        pow: 1,
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        noTrans: true,
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.8,
        pow: 1,
        exEq: () => elements.exclusive_equipment_3.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
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
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 1,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        elemAdv: () => true,
        aoe: true,
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
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.65 : 1.15,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        penetrate: () => 0.5,
        single: true,
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
        mult: () => {
          let mult = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            mult += heroes.challenger_dominiel.skills.s2.enhance[i];
          }

          return 1 + (elements.critical_hit_stack.value() * (0.054 + (0.054*mult)));
        },
        multTip: () => {
          let mult = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            mult += heroes.challenger_dominiel.skills.s2.enhance[i];
          }
          return { per_crit_hit: (5.4 + (5.4*mult)).toFixed(2) }
        },
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  chaos_inquisitor: {
    name: 'Chaos Inquisitor',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 963,
    form: [elements.caster_hp_pc, elements.skill_tree_completed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.05 : 0),
        multTip: () => ({ skill_tree: 5 }),
        enhance: [0.05, 0, 0.1, 0, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 0.85,
        mult: () => 1 + (1-(elements.caster_hp_pc.value()/100))/2 + (elements.skill_tree_completed.value() ? 0.12 : 0),
        multTip: () => ({ caster_lost_hp_pc: 50, skill_tree: 12 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15],
        single: true,
      }
    }
  },
  chaos_sect_axe: {
    name: 'Chaos Sect Axe',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.caster_max_hp, elements.caster_attacked_stack_5],
    dot: [dot.bleed],
    atkUp: () => 1 + elements.caster_attacked_stack_5.value()*0.06,
    skills: {
      s1: {
        rate: 0.85,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.04,
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 0.75,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1.2,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        penetrate: () => document.getElementById(`elem-adv`).checked ? 0.4 : 0,
        enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15],
        single: true,
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
        single: true,
      },
      s2: {
        rate: () => 1.5 + elements.caster_nb_buff.value()*0.07,
        pow: 1,
        enhance: [0.1, 0, 0.1, 0, 0.1],
        single: true,
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
        multTip: () => ({ per_fewer_target: 26.7 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
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
        aoe: true,
      },
      s3: {
        rate: 1.4,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
        aoe: true,
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
        multTip: () => ({ target_magic_nail: 30 }),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1.2,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 3 : 1.7,
        pow: 0.8,
        mult: () => elements.target_magic_nailed.value() ? 1.35 : 1,
        multTip: () => ({ target_magic_nail: 35 }),
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        single: true,
      }
    }
  },
  choux: {
    name: 'Choux',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.15],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: 0.5,
        pow: 1,
        flat: (soulburn) => elements.caster_max_hp.value()*(soulburn ? 0.23 : 0.15),
        flatTip: (soulburn) => ({ caster_max_hp: (soulburn ? 23 : 15) }),
        penetrate: () => 0.5,
        enhance: [0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.15,
        flatTip: () => ({ caster_max_hp: 15 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
        aoe: true,
      }
    }
  },
  christy: {
    name: 'Christy',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 667,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 1.1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0, 0.1, 0, 0.1, 0],
        single: true
      }
    }
  },
  church_of_ilryos_axe: {
    name: 'Church of Ilryos Axe',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.caster_max_hp],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 0.85,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.04,
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 0.75,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1.2,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15],
        single: true,
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
        rate: () => elements.caster_speed_up.value() ? 1.5 : 0.9,
        pow: () => elements.caster_speed_up.value() ? 0.9 : 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.0021,
        multTip: () => ({ caster_speed: 0.21 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        elemAdv: () => elements.caster_speed_up.value(),
        single: true,
      }
    }
  },
  clarissa: {
    name: 'Clarissa',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1252,
    form: [elements.caster_enrage, elements.exclusive_equipment_3],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 1,
        mult: () => elements.caster_enrage.value() ? 1.3 : 1,
        multTip: () => ({ caster_rage: 30 }),
        exEq: () => elements.exclusive_equipment_3.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
   closer_charles: {
    name:  'Closer Charles',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.target_hp_pc, elements.caster_perception],
     skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s1_alt: {
        rate: 1.2,
        pow: 1,
        name: 'S1 Demolition',
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.004,
        multTip: () => ({ tagret_lost_hp_pc: 0.4 }),
        enhance_from: 's1',
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.25 : 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0.1, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  commander_lorina: {
    name: 'Commander Lorina',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.target_max_hp, elements.target_hp_pc, elements.attack_skill_stack_5],
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
        flat: () => elements.target_max_hp.value() * 0.02,
        flatTip: () => ({ target_max_hp: 2 }),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s2: {
        enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        multTip: () => ({ target_lost_hp_pc: 50 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  commander_model_laika: {
    name: 'Commander Model Laika',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 1182,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  conqueror_lilias: {
    name: 'Conqueror Lilias',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 885,
    skills: {
      s1: {
        rate: 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
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
        flatTip: () => ({ caster_defense: elements.caster_enrage.value() ? 120 : 90 }),
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.3,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*0.7,
        flatTip: () => ({ caster_defense: 70 }),
        enhance: [0.05, 0, 0, 0, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
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
        flatTip: () => ({ caster_defense: 60 }),
        enhance: [0.05, 0, 0.1, 0, 0, 0.15],
        single: true,
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
        flatTip: () => ({ caster_defense: 70 }),
        enhance: [0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.05, 0.1, 0.1]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.75 : 0.5,
        pow: 0.95,
        flat: () => elements.caster_defense.value()*0.6,
        flatTip: () => ({ caster_defense: 60 }),
        enhance: [0.1, 0, 0, 0, 0.1, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 7 }),
        enhance: [0.05, 0, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        noCrit: true,
        soulburn: true,
        rate: 0,
        pow: 0.95,
        flat: (soulburn) => elements.caster_max_hp.value()*(soulburn ? 0.34 : 0.2),
        flatTip: (soulburn) => ({ caster_max_hp: soulburn ? 34 : 20 }),
        penetrate: () => 1.0,
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
      }
    }
  },
  desert_jewel_basar: {
    name: 'Desert Jewel Basar',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 948,
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      }
    }
  },
  designer_lilibet: {
    name: 'Designer Lilibet',
    element: element.dark,
    classType: classType.warrior,
    form: [elements.caster_defense],
    baseAtk: 975,
    skills: {
      s1: {
        rate: 0.6,
        pow: 1,
        flat: () => elements.caster_defense.value()*1.0,
        flatTip: () => ({ caster_defense: 100 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 0.6,
        pow: 1,
        flat: () => elements.caster_defense.value()*1.15,
        flatTip: () => ({ caster_defense: 115 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0.05, 0.05, 0, 0.1, 0.1],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1],
        aoe: true,
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
        multTip: () => ({ target_debuff: 30 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        onlyCrit: true,
        noCrit: true,
        rate: 2.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  doll_maker_pearlhorizon: {
    name: 'Doll Maker Pearlhorizon',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 921,
    form: [elements.target_max_hp, elements.target_has_sleep],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.6,
        pow: 1,
        aoe: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        extraDmg: () => elements.target_has_sleep.value() ? elements.target_max_hp.value()*0.3 : 0,
        extraDmgTip: () => ({ target_max_hp: elements.target_has_sleep.value() ? 30 : 0 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1],
        single: true,
      },
    }
  },
  dominiel: {
    name: 'Dominiel',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 957,
    barrier: (hero) => hero.getAtk(),
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 0.75,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        enhance: [0.05, 0.1, 0, 0.1, 0.15]
      }
    }
  },
  eda: {
    name: 'Eda',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1255,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true
      },
      s3: {
        rate: 1.05,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true
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
        enhance: [0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0.15],
        aoe: true,
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
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (elements.target_nb_debuff.value()*0.2),
        multTip: () => ({ per_target_debuff: 20 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.1,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  emilia: {
    name: 'Emilia',
    element: element.ice,
    classType: classType.soul_weaver,
    baseAtk: 649,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value() * 0.15,
    skills: {
      s1: {
        rate: 0.95,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0.05, 0, 0.1, 0.1],
        single: true
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
        multTip: () => ({ target_lost_hp_pc: 0.5 }),
        enhance: [0.05, 0, 0, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      }
    }
  },
  ervalen: {
    name: 'Ervalen',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.target_max_hp, elements.caster_max_hp],
    barrier: (hero) => hero.getAtk()*1.2,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.4,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        mult: () => elements.caster_max_hp.value() < elements.target_max_hp.value() ? 1 + Math.min((elements.target_max_hp.value() - elements.caster_max_hp.value())*0.00009, 0.6) : 1,
        multTip: () => ({ caster_vs_target_hp_diff: 9 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  fairytale_tenebria: {
    name: 'Fairytale Tenebria',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.target_has_provoke, elements.target_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        extraDmg: (hitType) => hitType !== hitTypes.miss && elements.target_has_provoke.value() ? elements.target_max_hp.value()*0.1 : 0,
        extraDmgTip: () => ({ target_max_hp: elements.target_has_provoke.value() ? 10 : 0 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.10],
        aoe: true,
      },
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
        enhance: [0.05, 0, 0.05, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1.4,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
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
        flatTip: () => ({ caster_defense: 70 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 7 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
      },
      s3: {
        rate: 0.65,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_defense: 75 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 1.7,
        pow: 1,
        flat: () => elements.caster_defense.value()*1.5,
        flatTip: () => ({ caster_defense: 150 }),
        mult: () => elements.target_hp_pc.value() < 30 ? 4 : 1,
        multTip: () => ({ under_threshold: 400 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  flan: {
    name: 'Flan',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 1003,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
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
        enhance: [0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.05, 0.15],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.95 : 1.65,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.1],
        single: true,
      }
    }
  },
  general_purrgis: {
    name: 'General Purrgis',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 903,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => 0.06*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 6 }),
        enhance: [0.05, 0, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.8,
        pow: 1,
        flat: () => 0.08*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 8 }),
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  glenn: {
    name: 'Glenn',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 920,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      }
    }
  },
  gloomyrain: {
    name: 'Gloomyrain',
    element: element.light,
    classType: classType.mage,
    form: [elements.caster_has_debuff],
    baseAtk: 1199,
    atkUp: () => {
      if (!elements.caster_has_debuff.value()) return 1;

      let boost = 0.2;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.gloomyrain.skills.s2.enhance[i];
      }

      return 1 + boost;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.05, 0.1],
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.95 : 0.7,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15, 0],
        aoe: true,
      }
    }
  },
  godmother: {
    name: 'Godmother',
    element: element.fire,
    classType: classType.ranger,
    baseAtk: 1005,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 1.65,
        pow: 0.95,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15],
        single: true,
      }
    }
  },
  great_chief_khawana: {
    name: 'Great Chief Khawana',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1138,
    form: [elements.dual_attack_stack_5, elements.exclusive_equipment_1],
    barrier: (hero) => hero.getAtk()*0.5,
    atkUp: () => 1 + elements.dual_attack_stack_5.value()*0.15,
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1.1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        exEq: () => elements.exclusive_equipment_1.value() ? 0.1 : 0,
        single: true,
      }
    }
  },
  guider_aither: {
    name: 'Guider Aither',
    element: element.light,
    classType: classType.mage,
    baseAtk: 1252,
    barrier: (hero) => hero.getAtk(),
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.8,
        pow: 0.95,
        enhance: [0.1, 0, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  gunther: {
    name: 'Gunther',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 1426,
    dot: [dot.bleed],
    innateAtkUp: () => {
      let boost = 0.5;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.gunther.skills.s2.enhance[i];
      }

      return boost;
    },
    skills: {
      s1: {
        noCrit: true,
        rate: 1,
        pow: 0.85,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05],
      },
      s3: {
        noCrit: true,
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.9 : 2.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.3,
        pow: 0.85,
        mult: () => 1 + elements.caster_speed.value()*0.00125,
        multTip: () => ({ caster_speed: 0.125 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      }
    }
  },
  hasol: {
    name: 'Hasol',
    element: element.dark,
    classType: classType.knight,
    baseAtk: 758,
    form: [elements.caster_max_hp, elements.enemy_counters, elements.caster_turn],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        fixed: () => elements.caster_turn.value() ? 500 + elements.enemy_counters.value()*1000 : 0,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  haste: {
    name: 'Haste',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 1089,
    form: [elements.nb_targets, elements.target_bleed_detonate],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
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
        multTip: () => ({ per_fewer_target: 50 }),
        detonate: dot.bleed,
        detonation: () => document.getElementById('elem-adv').checked ? 1.05 : 0,
        enhance: [0.15, 0, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.1, 0, 0, 0.15],
        single: true,
      }
    }
  },
  helen: {
    name: 'Helen',
    element: element.ice,
    classType: classType.knight,
    baseAtk: 685,
    form: [elements.caster_defense],
    barrier: () => elements.caster_defense.value()*0.8,
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.8,
        flatTip: () => ({ caster_defense: 80 }),
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1],
        single: true
      },
      s2: {
        rate: 1.2,
        pow: 1,
        flat: () => elements.caster_defense.value(),
        flatTip: () => ({ caster_defense: 100 }),
        enhance: [0.1, 0.1, 0.1, 0, 0, 0, 0],
        single: true
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
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 1.55,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      }
    }
  },
  holiday_yufine: {
    name: 'Holiday Yufine',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1119,
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.05, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  hwayoung: {
    name: 'Hwayoung',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1510,
    form: [elements.caster_has_buff, elements.caster_max_hp, elements.target_max_hp],
    barrier: (hero) => hero.getAtk()*0.45,
    innateAtkUp: () => {
      let boost = 0.35;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.hwayoung.skills.s2.enhance[i];
      }
      return boost;
    },
    skills: {
      s1: {
        rate: 0.6,
        pow: 1,
        afterMath: () => elements.caster_has_buff.value() ? ({ atkPercent: 0.5, penetrate: 0.7 }) : null,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
        noCrit: true,
      },
      s2: {
        enhance: [0.02, 0.03, 0.03, 0.03, 0.04],
      },
      s3: {
        rate: 0.55,
        pow: 1,
        mult: () => elements.caster_max_hp.value() < elements.target_max_hp.value()
            ? 1 + Math.min((elements.target_max_hp.value() - elements.caster_max_hp.value())*0.00015, 1)
            : 1,
        multTip: () => ({ caster_vs_target_hp_diff: 15 }),
        penetrate: () => 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
        noCrit: true,
      },
    }
  },
  ian: {
    name: 'Ian',
    element: element.ice,
    classType: classType.ranger,
    baseAtk: 1081,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.15 : 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15],
        aoe: true,
      }
    }
  },
  ilynav: {
    name: 'Ilynav',
    element: element.fire,
    classType: classType.knight,
    baseAtk: 957,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.08,
        flatTip: () => ({ caster_max_hp: 8 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.18,
        flatTip: () => ({ caster_max_hp: 18 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  inferno_khawazu: {
    name: 'Inferno Khawazu',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1119,
    form: [elements.target_burn_detonate],
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 0.95,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1,  0.1],
        single: true,
      },
      s3: {
        rate: 0.7,
        pow: 1,
        detonate: dot.burn,
        detonation: () => 1.2,
        single: true,
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
        enhance: [0.05, 0.05, 0, 0, 0.05, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 2,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1],
        single: true,
      }
    }
  },
  jack_o: {
    name: 'Jack-O\'',
    element: element.fire,
    classType: classType.warrior,
    form: [elements.target_has_debuff],
    baseAtk: 1228,
    skills: {
      s1: {
        rate: 0.75,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s1_extra: {
        name: infoLabel('s1_extra_attack'),
        rate: 1.1,
        pow: 1,
        enhance_from: 's1',
        single: true,
      },
      s3: {
        rate: 0.95,
        pow: 1,
        mult: () => elements.target_has_debuff.value() ? 1.3 : 1,
        multTip: () => ({ target_has_debuff: 30 }),
        penetrate: () => 0.5,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  januta: {
    name: 'Januta',
    element: element.fire,
    classType: classType.warrior,
    form: [elements.caster_enrage],
    baseAtk: 1144,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => elements.caster_enrage.value() ? 1.3 : 1,
        multTip: () => ({ caster_rage: 30 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      }
    }
  },
  jecht: {
    name: 'Jecht',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 804,
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1],
        aoe: true,
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
        multTip: () => ({ per_target_debuff: 10 }),
        enhance: [0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.15],
        aoe: true,
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
        enhance: [0.15, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (elements.nb_targets.value()-1)*0.1,
        multTip: () => ({ per_target: 10 }),
        enhance: [0.05, 0, 0.05, 0, 0, 0.1, 0.1],
        aoe: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      }
    }
  },
  kanna: {
    name: 'Kanna',
    element: element.fire,
    classType: classType.ranger,
    form: [elements.caster_speed],
    baseAtk: 1182,
    skills: {
      s1: {
        rate: 0.75,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.6,
        pow: 0.85,
        critDmgBoost: () => 0.5,
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.1],
        single: true,
      }
    }
  },
  kawerik: {
    name: 'Kawerik',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1306,
    form: [elements.target_speed, elements.caster_speed, elements.exclusive_equipment_3],
    skills: {
      s1: {
        rate: 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.4,
        pow: 1,
        mult: () => 1 + elements.target_speed.value()*0.003,
        multTip: () => ({ target_speed: 0.3 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.8,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        penetrate: () => 0.3,
        exEq: () => elements.exclusive_equipment_3.value() ? 0.2 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
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
        rate: (soulburn) => soulburn ? 1.35 : 0.85,
        pow: 1,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.0015,
        multTip: () => ({ caster_lost_hp_pc: 0.15 }),
        exEq: () => elements.exclusive_equipment_1.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1.7,
        pow: 0.9,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.003,
        multTip: () => ({ caster_lost_hp_pc: 0.3 }),
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1],
        single: true,
      }
    }
  },
  ken: {
    name: 'Ken',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.caster_max_hp],
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        flat: () => elements.caster_max_hp.value()*0.3,
        flatTip: () => ({ caster_max_hp: 30 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15],
        single: true,
      }
    }
  },
  khawana: {
    name: 'Khawana',
    element: element.fire,
    classType: classType.thief,
    baseAtk: 957,
    form: [elements.target_has_debuff, elements.caster_speed],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        afterMath: () => elements.target_has_debuff.value() ? { atkPercent: 0.6, penetrate: 0.7 } : null,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.5,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
    }
  },
  khawazu: {
    name: 'Khawazu',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 1119,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
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
        flatTip: () => ({ caster_defense: 70 }),
        enhance: [0.05, 0, 0.05, 0, 0.05],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.5 : 0.4,
        pow: 1,
        flat: (soulburn) => elements.caster_defense.value()*(soulburn ? 0.6 : 0.5),
        flatTip: (soulburn) => ({ caster_defense: soulburn ? 60 : 50 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.05, 0.05],
        aoe: true,
      }
    }
  },
  kise: {
    name: 'Kise',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1283,
    form: [elements.target_has_buff, elements.caster_stealth, elements.caster_hp_pc, elements.exclusive_equipment_2],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.4 : 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        mult: (soulburn) => {
          if (!elements.target_has_buff.value()) return 1;

          return soulburn ? 2 : 1.7;
        },
        multTip: (soulburn) => ({ target_debuff: soulburn ? 100 : 70 }),
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        penetrate: () => elements.caster_stealth.value() ? 0.6 : 0.3,
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_hp_pc.value()*0.0035,
        multTip: () => ({ caster_left_hp_pc: 0.35 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 6 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,

      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 0.95,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
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
        flatTip: () => ({ caster_defense: 70 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 8.5 }),
        enhance: [0.05, 0, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => 0.13*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 13 }),
        enhance: [0.05, 0, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        noCrit: true,
        rate: 0.3,
        pow: 1,
        flat: () => 0.53571*Math.max(elements.caster_max_hp.value()-elements.caster_hp.value(), 0),
        flatTip: () => ({ caster_lost_hp: 53.571 }),
        penetrate: () => 1.0,
        single: true,
      }
    }
  },
  landy: {
    name: 'Landy',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 1158,
    form: [elements.caster_full_fighting_spirit, elements.attack_skill_stack_3],
    atkUp: () => {
      let boost = 0.15;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.landy.skills.s2.enhance[i];
      }

      return 1 + elements.attack_skill_stack_3.value()*boost;
    },
    skills: {
      s1: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
      },
      s3: {
        aoe: true,
        rate: 0.9,
        pow: 1,
        penetrate: () => elements.caster_full_fighting_spirit.value() ? 0.5 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  last_rider_krau: {
    name: 'Last Rider Krau',
    element: element.light,
    classType: classType.knight,
    baseAtk: 839,
    form: [elements.caster_max_hp, elements.attack_skill_stack_3],
    barrier: () => elements.caster_max_hp.value()*0.07,
    barrierEnhance: 's2',
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => 0.1*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
      },
      s3: {
        noCrit: true,
        rate: 0.3,
        pow: 1,
        flat: () => 0.06*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 6 }),
        mult: () => 1 + elements.attack_skill_stack_3.value()*0.2,
        multTip: () => ({ per_stack: 20 }),
        penetrate: () => 1.0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.2 : 1,
        pow: 1,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.002,
        multTip: () => ({ tagret_lost_hp_pc: 0.2 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
        aoe: true,
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
        enhance: [0.05, 0, 0, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 1.35,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.8,
        pow: 0.8,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 12 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        atk: () =>  elements.highest_ally_attack.value(),
        noBuff: true,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
        aoe: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1,
        mult: () => 1 + (elements.target_has_buff.value() ? 0 : 0.2),
        multTip: () => ({ target_debuff: 20 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.6 : 2,
        pow: 0.95,
        exEq: () => elements.exclusive_equipment_3.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  lionheart_cermia: {
    name: 'Lionheart Cermia',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.caster_defense],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1 : 0.6,
        pow: 0.9,
        flat: (soulburn) => elements.caster_defense.value()*(soulburn ? 1.6 : 1.0),
        flatTip: (soulburn) => ({ caster_defense: (soulburn ? 160 : 100) }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.3,
        pow: 0.9,
        flat: () => elements.caster_defense.value()*1.35,
        flatTip: () => ({ caster_defense: 135 }),
        penetrate: () => 0.5,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
    }
  },
  little_queen_charlotte: {
    name: 'Little Queen Charlotte',
    element: element.light,
    classType: classType.warrior,
    baseAtk: 1119,
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 1,
        mult: () => document.getElementById(`elem-adv`).checked ? 1.3 : 1,
        multTip: () => ({ elemental_advantage: 30 }),
        penetrate: () => 0.5,
        enhance: [0.05, 0.05, 0, 0.05, 0.15],
        single: true,
      },
      s3_splash: {
        name: infoLabel('lqc_s3_splash'),
        rate: 0,
        pow: 0,
        afterMath: () => document.getElementById(`elem-adv`).checked ? { atkPercent: 1.2, penetrate: 0.7 } : null,
        noCrit: true,
        noMiss: true,
      }
    }
  },
  lorina: {
    name: 'Lorina',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1144,
    form: [elements.target_max_hp, elements.target_hp_pc, elements.attack_skill_stack_5],
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
        flat: () => elements.target_max_hp.value() * 0.02,
        flatTip: () => ({ target_max_hp: 2 }),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s2: {
        enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.005,
        multTip: () => ({ target_lost_hp_pc: 0.5 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  lucy: {
    name: 'Lucy',
    element: element.earth,
    classType: classType.soul_weaver,
    baseAtk: 558,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.2,
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  ludwig: {
    name: 'Ludwig',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 1412,
    form: [elements.caster_invincible, elements.exclusive_equipment_3],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.65,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 0.95,
        penetrate: () => elements.caster_invincible.value() ? 0.5 : 0.2,
        exEq: () => elements.exclusive_equipment_3.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  luluca: {
    name: 'Luluca',
    element: element.ice,
    classType: classType.mage,
    baseAtk: 1316,
    form: [elements.target_hp_pc, elements.s3_stack],
    barrier: (hero) => hero.getAtk()*(1+elements.s3_stack.value()*0.2)*0.375,
    barrierEnhance: 's2',
    atkUp: () => 1 + elements.s3_stack.value()*0.2,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (1-(elements.target_hp_pc.value()/100))*0.2,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        enhance: [0.05, 0.05, 0, 0.05, 0.1]
      },
      s3: {
        rate: 0.9,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        aoe: true,
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
        soulburn: true,
        rate: (soulburn) => (soulburn ? 3 : elements.nb_hits.value())*0.7,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        enhance: [0.01, 0.02, 0.02, 0.02, 0.03]
      },
      s3: {
        rate: 1.1,
        pow: 1.05,
        penetrate: () => 0.5,
        enhance: [0.05, 0, 0.1, 0, 0.1],
        elemAdv: () => true,
        single: true,
      }
    }
  },
  magic_scholar_doris: {
    name: 'Magic Scholar Doris',
    element: element.light,
    classType: classType.soul_weaver,
    baseAtk: 540,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        single: true,
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
        multTip: () => ({ caster_lost_hp_pc: 40 }),
        enhance: [0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.9,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15],
        aoe: true,
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
        enhance: [0.1, 0, 0, 0.15],
        single: true,
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
        flatTip: () => ({ caster_defense: 75 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.8,
        flatTip: () => ({ caster_defense: 80 }),
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  mediator_kawerik: {
    name: 'Mediator Kawerik',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 966,
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => 0.04*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1,
        flat: () => 0.09*elements.caster_max_hp.value(),
        flatTip: () => ({ caster_max_hp: 9 }),
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  melany: {
    name: 'Melany',
    element: element.fire,
    classType: classType.warrior,
    baseAtk: 951,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.1, 0, 0.1, 0, 0.1],
        single: true
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true
      }
    }
  },
  melissa: {
    name: 'Melissa',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1412,
    form: [elements.caster_hp_pc, elements.exclusive_equipment_2],
    skills: {
      s1: {
        rate: 1,
        pow: 1.1,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.0035,
        multTip: () => ({ caster_lost_hp_pc: 0.35 }),
        enhance: [0.05, 0, 0.05, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        single: true,
      },
      s3: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  mercedes: {
    name: 'Mercedes',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1187,
    form: [elements.nb_targets, elements.target_hp_pc, elements.caster_immense_power],
    atkUp: () => elements.caster_immense_power.value() ? 1.15 : 1,
    skills: {
      s1: {
        rate: 0.8,
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
        multTip: () => ({ per_fewer_target: 30 }),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        aoe: true,
      },
      s2_bis: {
        name: infoLabel('s2_wave_2'),
        rate: 0.35,
        pow: 0.9,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 1: return 1.9;
            case 2: return 1.6;
            case 3: return 1.3;
            default: return 1;
          }
        },
        multTip: () => ({ per_fewer_target: 30 }),
        enhance_from: 's2',
        aoe: true,
      },
      s3: {
        rate: 1.15,
        pow: 0.95,
        critDmgBoost: () => 0.2,
        mult: () => 1 + (100-elements.target_hp_pc.value())*0.003,
        multTip: () => ({ caster_lost_hp_pc: 0.3 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
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
        multTip: () => ({ skill_tree: 10 }),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 1.55,
        pow: 0.9,
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.05 : 0),
        multTip: () => ({ skill_tree: 5 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
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
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.35,
        pow: 1,
        penetrate: () => 0.7,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  milim: {
    name: 'Milim',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1359,
    skills: {
      s1: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        aoe: true,
      },
      s3: {
        rate: 1.7,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        noTrans: true,
        single: true,
      },
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.1, 0, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1.8,
        pow: 0.85,
        mult: () => 1 + elements.caster_speed.value()*0.0015,
        multTip: () => ({ caster_speed: 0.15 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15],
        single: true,
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
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.3,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      }
    }
  },
  mort: {
    name: 'Mort',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 957,
    form: [elements.caster_max_hp, elements.caster_enrage, elements.exclusive_equipment_3],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.08,
        flatTip: () => ({ caster_max_hp: 8 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.15,
        flatTip: () => ({ caster_max_hp: 15 }),
        exEq: () => elements.exclusive_equipment_3.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      }
    }
  },
  mui: {
    name: 'Mui',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1039,
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  muse_rima: {
    name: 'Muse Rima',
    element: element.ice,
    classType: classType.ranger,
    form: [elements.skill_tree_completed],
    baseAtk: 822,
    skills: {
      s1: {
        rate: 1,
        pow: 0.8,
        mult: () => 1 + (elements.skill_tree_completed.value() ? 0.05 : 0),
        multTip: () => ({ skill_tree: 5 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 1.3,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  muwi: {
    name: 'Muwi',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1039,
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.25 : 1,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.15],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.7 : 1,
        pow: 0.8,
        flat: (soulburn) => elements.target_max_hp.value()*(soulburn ? 0.085 : 0.05),
        flatTip: (soulburn) => ({ target_max_hp: soulburn ? 8.5 : 5 }),
        enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.15],
        single: true,
      }
    }
  },
  operator_sigret: {
    name: 'Operator Sigret',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1079,
    form: [elements.target_has_barrier, elements.caster_speed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 0.75,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        penetrate: () => elements.target_has_barrier.value() ? 1.0 : 0.5,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1,
        pow: 1.1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
      }
    }
  },
  orte: {
    name: 'Orte',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 857,
    form: [elements.caster_perception, elements.caster_speed, elements.target_speed],
    skills: {
      s1: {
        rate: 0.65,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.7,
        pow: 0.95,
        penetrate: () => {
          const casterSpd = elements.caster_speed.value();
          const targetSpd = elements.target_speed.value();

          const penDiff = (casterSpd-targetSpd)*0.003;
          return Math.min(Math.max(0, penDiff) + 0.3, 0.7);
        },
        penetrateTip: () => ({ caster_target_spd_diff: 0.3 }),
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.05, 0.1],
        single: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 1,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.05, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.0015,
        multTip: () => ({ caster_speed: 0.15 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        noTrans: true,
        single: true,
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
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.6,
        pow: 1,
        aoe: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        extraDmg: () => elements.target_has_sleep.value() ? elements.target_max_hp.value()*0.2 : 0,
        extraDmgTip: () => ({ target_max_hp: elements.target_has_sleep.value() ? 20 : 0 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1],
        single: true,
      },
    }
  },
  peira: {
    name: 'Peira',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1075,
    barrier: () => {
      let boost = 1.0;
      for (let i = 0; i < Number(document.getElementById(`molagora-s3`).value); i++) {
        boost += heroes.peira.skills.s3.enhance[i];
      }
      return 180*boost*60;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
      }
    }
  },
  penelope: {
    name: 'Penelope',
    element: element.dark,
    classType: classType.thief,
    baseAtk: 1039,
    form: [elements.attack_skill_stack_3],
    atkUp: () => 1 + elements.attack_skill_stack_3.value()*0.15,
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn? 1.6 : 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 1.2,
        enhance: [0, 0.1, 0, 0, 0],
        single: true,
      },
    }
  },
  pirate_captain_flan: {
    name: 'Pirate Captain Flan',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1182,
    form: [elements.target_burn_detonate, elements.target_bomb_detonate],
    dot: [dot.burn, dot.bomb],
    skills: {
      s1: {
        rate: 0.7,
        pow: 0.95,
        detonate: [dot.burn, dot.bomb],
        detonation: () => 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
        aoe: true,
      },
    }
  },
  politis: {
    name: 'Politis',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1197,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        name: infoLabel('s2_counter'),
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance_from: 's1',
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.05 : 0.8,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  pyllis: {
    name: 'Pyllis',
    element: element.dark,
    classType: classType.knight,
    baseAtk: 685,
    form: [elements.caster_defense, elements.caster_attacked_stack_3],
    barrier: () => elements.caster_defense.value()*(1+elements.caster_attacked_stack_3.value()*0.1) * 0.6,
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_defense.value()*(1+elements.caster_attacked_stack_3.value()*0.1) * 0.5,
        flatTip: () => ({ caster_defense: 50, per_stack: 10 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.3,
        pow: 0.95,
        flat: () => elements.caster_defense.value()*(1+elements.caster_attacked_stack_3.value()*0.1) * 0.7,
        flatTip: () => ({ caster_defense: 70, per_stack: 10 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  ram:{
    name: 'Ram',
    element: element.earth,
    classType: classType.mage,
    baseAtk: 1556,
    innateAtkUp: () => 0.3,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
      },
      s3: {
        rate: 1.8, 
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true
      }
    }
  },
  ran: {
    name: 'Ran',
    element: element.ice,
    classType: classType.thief,
    baseAtk: 1119,
    form: [elements.caster_speed, elements.target_speed],
    skills: {
      s1: {
        rate: 0.9,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        penetrate: () => 0.2,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.8,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.00075 + elements.target_speed.value()*0.0015,
        multTip: () => ({ caster_speed: 0.075, target_speed: 0.15 }),
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1],
        aoe: true,
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
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.04,
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.05, 0.05],
        aoe: true,
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
        enhance: [0.05, 0.1, 0.15],
        single: true,
      }
    }
  },
  rem:{
    name: 'Rem',
    element: element.ice,
    classType: classType.warrior,
    baseAtk: 1208,
    skills: {
      s1: {
        rate: 0.95,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true
      },
      s2: {
        rate: 0.5, 
        pow: 1,
        aoe: true
      },
      s3: {
        rate: 1, 
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.3,
        pow: 1,
        penetrate: () => 0.5,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  requiemroar: {
    name: 'Requiemroar',
    element: element.dark,
    classType: classType.soul_weaver,
    baseAtk: 842,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.7 : 1.8,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
    }
  },
  researcher_carrot: {
    name: 'Researcher Carrot',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.target_burn_detonate],
    dot: [dot.burn],
    barrier: (hero) => hero.getAtk()*0.6,
    barrierEnhance: 's2',
    skills: {
      s1: {
        pow: 0.95,
        rate: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        detonate: dot.burn,
        detonation: () => 1.1,
        single: true,
      },
      s2: {
        enhance: [0.15, 0.15]
      },
      s3: {
        pow: 1.1,
        rate: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15],
        aoe: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.6,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        aoe: true,
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
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15],
        single: true,
      },
      s2: {
        rate: 1.3,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  rimuru: {
    name: 'Rimuru',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1119,
    form: [elements.allies_nb_buff],
    skills: {
      s1: {
        rate: 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 1.65,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 1,
        fixed: (hitType) => (hitType !== hitTypes.miss) ? Math.min(5000+(elements.allies_nb_buff.value()*625), 10000) : 0,
        fixedTip: () => ({ allies_buff: 625 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
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
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        flatTip: () => ({ caster_max_hp: 7 }),
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  roaming_warrior_leo: {
    name: 'Roaming Warrior Leo',
    element: element.dark,
    classType: classType.ranger,
    baseAtk: 1088,
    form: [elements.target_has_debuff],
    dot: [dot.bomb],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => elements.target_has_debuff.value() ? 1.1 : 1,
        multTip: () => ({ target_has_debuff: 10 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.8,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1],
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 0.9,
        pow: 0.85,
        mult: () => elements.target_has_buff.value() ? 1.3 : 1,
        multTip: () => ({ target_has_buff: 30 }),
        enhance: [0.05, 0.1, 0, 0.15, 0.15],
        aoe: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.2,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        flatTip: () => ({ caster_defense: 70 }),
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 7 }),
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0.05, 0, 0.1],
        single: true,
      },
      s2: {
        rate: 0.85,
        pow: 1.3,
        aoe: true,
      },
      s3: {
        rate: 0.5,
        pow: 1,
        penetrate: () => 1.0,
        flat: () => 0.25*Math.max(elements.caster_max_hp.value()-elements.caster_hp.value(), 0),
        flatTip: () => ({ caster_lost_hp: 25 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        noCrit: true,
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  senya: {
    name: 'Senya',
    element: element.earth,
    classType: classType.knight,
    baseAtk: 1445,
    innateAtkUp: () => 0.3,
    skills: {
      s1: {
        rate: 0.95,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        noCrit: true,
        single: true,
      },
      s2: {
        rate: 0,
        pow: 0,
        afterMath: () => ({ atkPercent: 0.45, penetrate: 0.7 }),
        noCrit: true,
        noMiss: true,
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 1.1,
        enhance: [0.05, 0, 0, 0, 0.15],
        noCrit: true,
        aoe: true,
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
        enhance: [0.05, 0.1, 0, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  shuna: {
    name: 'Shuna',
    element: element.fire,
    classType: classType.soul_weaver,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.18,
    barrierEnhance: 's2',
    baseAtk: 649,
    skills: {
      s1: {
        rate: 0.75,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.025,
        flatTip: () => ({ caster_max_hp: 2.5 }),
        enhance: [0.1, 0, 0.1, 0, 0.1],
        single: true,
      },
      s2: {
        enhance: [0.1, 0.1, 0, 0.1, 0.1]
      },
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
        enhance: [0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.1, 0.15],
        aoe: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        critDmgBoost: () => 0.2,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
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
        multTip: () => ({ target_lost_hp_pc: 0.2 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 3.2 : 1.8,
        pow: 0.95,
        mult: (soulburn) => 1 + (100-elements.target_hp_pc.value())*(soulburn ? 0.007 : 0.003),
        multTip: (soulburn) => ({ target_lost_hp_pc: soulburn ? 0.7 : 0.3 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
      },
      explosion: {
        name: infoLabel('sez_explosion'),
        rate: 0,
        pow: 0,
        afterMath: () => ({ atkPercent: 1.5, penetrate: 0.7 }),
        noCrit: true,
        noMiss: true,
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
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 1.05,
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        aoe: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.25,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.7,
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        penetrate: () => Math.min(0.3 + elements.target_nb_debuff.value()*0.1, 1.0),
        single: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 0.95,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
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
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
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
        mult: () => elements.target_has_buff.value() ? 1 : 1.2,
        multTip: () => ({ target_has_no_buff: 20 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.target_max_hp.value()*0.04,
        flatTip: () => ({ target_max_hp: 4 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        flat: () => elements.target_max_hp.value()*0.05,
        flatTip: () => ({ target_max_hp: 5 }),
        afterMath: () => ({ atkPercent: 0.4, penetrate: 0.7 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  solitaria_of_the_snow: {
    name: 'Solitaria of the Snow',
    element: element.light,
    classType: classType.mage,
    baseAtk: 1039,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.25,
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s1_extra: {
        name: infoLabel('s1_extra_attack'),
        rate: 0.8,
        pow: 1.3,
        aoe: true,
      },
      s3: {
        rate: 1.8,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
    }
  },
  sonia: {
    name: 'Sonia',
    element: element.light,
    classType: classType.soul_weaver,
    form: [elements.caster_max_hp],
    barrier: () => elements.caster_max_hp.value()*0.08,
    baseAtk: 540,
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
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
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.15 : 0.9,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.5,
        pow: 1,
        penetrate: () => elements.target_is_stunned.value() ? 1.0 : 0.3,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
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
        multTip: () => ({ per_target_debuff: 20 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
      }
    }
  },
  spirit_eye_celine: {
    name: 'Spirit Eye Celine',
    element: element.light,
    classType: classType.thief,
    baseAtk: 1158,
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s1_bis: {
        name: infoLabel('ml_celine_nimble_sword'),
        rate: 1.3,
        pow: 0.9,
        penetrate: () => 0.35,
        enhance_from: 's1',
        single: true,
      },
    }
  },
  straze: {
    name: 'Straze',
    element: element.dark,
    classType: classType.warrior,
    baseAtk: 1228,
    form: [elements.nb_targets, elements.target_is_highest_max_hp, elements.target_attack],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 1: return 1.6;
            case 2: return 1.4;
            case 3: return 1.2;
            default: return 1;
          }
        },
        multTip: () => ({per_fewer_target: 20}),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        rate: 0.95,
        pow: 1,
        penetrate: () => {
          if (!elements.target_is_highest_max_hp.value()) return 0;

          const targetAtk = elements.target_attack.value();
          const casterAtk = currentHero.getAtk('s3');

          const penDiff = (casterAtk-targetAtk)*0.0003;

          return Math.min(Math.max(0, penDiff) + 0.3, 1);
        },
        penetrateTip: () => ({ caster_target_atk_diff: 0.03 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
    }
  },
  summertime_iseria: {
    name: 'Summertime Iseria',
    element: element.fire,
    classType: classType.ranger,
    baseAtk: 1203,
    form: [elements.target_bomb_detonate],
    dot: [dot.bomb],
    innateAtkUp: () => {
      let boost = 0.35;
      for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
        boost += heroes.summertime_iseria.skills.s2.enhance[i];
      }

      return boost;
    },
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
        noCrit: true,
      },
      s2: {
        enhance: [0.02, 0.02, 0.03, 0.03, 0.05],
      },
      s3: {
        rate: 1.2,
        pow: 1,
        detonate: dot.bomb,
        detonation: () => 1.1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
        noCrit: true,
      },
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
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 1.4,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 0.8,
        mult: () => elements.target_nb_bleed.value() > 0 ? 1.25 + (Math.min(elements.target_nb_bleed.value(), 5)-1)*0.25 : 1,
        multTip: () => ({ per_bleed: 25 }),
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        single: true,
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
        enhance: [0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s1_extra: {
        name: 'S1 Extra Attack',
        rate: 0.7,
        pow: 1,
        enhance_from: 's1',
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.003,
        multTip: () => ({ caster_speed: 0.3 }),
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1 : 0.8,
        pow: 0.8,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.005 + (100-elements.target_hp_pc.value())*0.0015,
        multTip: () => ({ caster_lost_hp_pc: 50, target_lost_hp_pc: 15 }),
        enhance: [0.05, 0.05, 0.1, 0, 0.1, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  tamarinne: {
    name: 'Tamarinne',
    element: element.fire,
    classType: classType.soul_weaver,
    baseAtk: 948,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 1,
        enhance: [0.05, 0, 0, 0.1, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 2.5 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.3 : 1.5,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.05,
        flatTip: () => ({ caster_max_hp: 5 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
      }
    }
  },
  tempest_surin: {
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
        multTip: () => ({ caster_lost_hp_pc: 15 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.25 : 1,
        pow: 1.05,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.002,
        multTip: () => ({ caster_lost_hp_pc: 20 }),
        enhance: [0.1, 0, 0, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.35 : 1.1,
        pow: 1.05,
        enhance: [0.05, 0, 0, 0.1, 0.15],
        aoe: true,
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
        enhance: [0.1, 0, 0.15, 0],
        single: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1.2,
        pow: 0.9,
        flat: (soulburn) => elements.target_max_hp.value() * (soulburn ? 0.06 : 0.04),
        flatTip: (soulburn) => ({ target_max_hp: soulburn ? 6 : 4 }),
        enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
      },
    }
  },
  top_model_luluca: {
    name: 'Top Model Luluca',
    element: element.dark,
    classType: classType.mage,
    baseAtk: 1228,
    form: [elements.caster_speed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        noTrans: true,
        single: true,
      },
      s3: {
        rate: 1.6,
        pow: 1,
        mult: () => 1 + elements.caster_speed.value()*0.0015,
        multTip: () => ({ caster_speed: 0.15 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      }
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
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0, 0.05, 0, 0.05, 0, 0.1, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 4 }),
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 0.5,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.1,
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15],
        aoe: true,
      }
    }
  },
  verdant_adin: {
    name: 'Verdant Adin',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1081,
    form: [elements.nb_targets, elements.skill_tree_completed],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        mult: () => elements.skill_tree_completed.value() ? 1.1 : 1,
        multTip: () => (elements.skill_tree_completed.value() ? { skill_tree: 10 } : null),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s2: {
        rate: 0.8,
        pow: 1,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 3: return 1.2;
            case 2: return 1.4;
            case 1: return 1.6;
            default: return 1;
          }
        },
        multTip: () => ({ per_fewer_target: 20 }),
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      },
      s3: {
        rate: 1.8,
        pow: 1.05,
        mult: () => elements.skill_tree_completed.value() ? 1.1 : 1,
        multTip: () => (elements.skill_tree_completed.value() ? { skill_tree: 10 } : null),
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        single: true,
      },
    }
  },
  vigilante_leader_glenn: {
    name: 'Vigilante Leader Glenn',
    element: element.earth,
    classType: classType.ranger,
    baseAtk: 920,
    form: [elements.skill_tree_completed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => elements.skill_tree_completed.value() ? (1.1 + (document.getElementById(`elem-adv`).checked ? 0.25 : 0)) : 1,
        multTip: () => (elements.skill_tree_completed.value() ? ({
          skill_tree: 10,
          ...(document.getElementById(`elem-adv`).checked ? { elemental_advantage: 25 } : {}),
        }) : null),
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        mult: () => elements.skill_tree_completed.value() && document.getElementById(`elem-adv`).checked ? 1.25 : 1,
        multTip: () => ({ elemental_advantage: 25 }),
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      }
    }
  },
  vildred: {
    name: 'Vildred',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1283,
    form: [elements.caster_speed, elements.exclusive_equipment_2],
    skills: {
      s1: {
        rate: 0.85,
        pow: 0.95,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
      s2: {
        rate: 0.5,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.1 : 0.85,
        pow: 1,
        mult: (soulburn) => 1 + elements.caster_speed.value()*(soulburn ? 0.0009 : 0.00075),
        multTip: (soulburn) => ({ caster_speed: soulburn ? 0.09 : 0.075 }),
        exEq: () => elements.exclusive_equipment_2.value() ? 0.1 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  violet: {
    name: 'Violet',
    element: element.earth,
    classType: classType.thief,
    baseAtk: 1228,
    form: [elements.caster_nb_focus, elements.caster_perception],
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.9,
        mult: () => 1 + elements.caster_nb_focus.value()*0.15,
        multTip: () => ({ per_focus: 15 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1, 0.1],
        single: true,
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
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.05, 0.1],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.3 : 1.05,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
        aoe: true,
      },
      s2_wave_2: {
        name: infoLabel('s2_wave_2'),
        rate: 0.55,
        pow: 0.9,
        enhance_from: 's2',
        aoe: true,
      },
      s2_wave_3: {
        name: infoLabel('s2_wave_3'),
        rate: 0.3,
        pow: 0.9,
        enhance_from: 's2',
        aoe: true,
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
        multTip: () => ({ target_debuff: 35 }),
        enhance: [0.05, 0, 0, 0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 0.9,
        enhance: [0.05, 0.05, 0, 0, 0.15, 0.15],
        single: true,
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
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1,
        pow: 0.9,
        mult: () => 1 + elements.caster_speed.value()*0.00075,
        multTip: () => ({ caster_speed: 0.075 }),
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
        single: true,
      },
      s3: {
        rate: 1.8,
        pow: 0.8,
        mult: () => 1 + elements.caster_speed.value()*0.001125,
        multTip: () => ({ caster_speed: 0.1125 }),
        enhance: [0.1, 0.1, 0, 0.15, 0.15],
        single: true,
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
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.7,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0, 0.15],
        aoe: true,
      },
      s3: {
        rate: 0.8,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        penetrate: () => 1.0,
        single: true,
      }
    }
  },
  yoonryoung: {
    name: 'Yoonryoung',
    element: element.light,
    classType: classType.knight,
    baseAtk: 703,
    skills: {
      s1: {
        rate: 0.8,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.1],
        single: true,
      },
      s1_bis: {
        name: infoLabel('yoonryoung_slash'),
        rate: 0.5,
        pow: 1,
        enhance_from: 's1',
        single: true,
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
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 0.9,
        pow: 1,
        aoe: true,
      },
      s3: {
        rate: 2,
        pow: 0.95,
        mult: () => elements.target_has_buff.value() ? 1.5 : 1.0,
        multTip: () => ({ target_has_buff: 50 }),
        enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
        single: true,
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
        multTip: () => ({ caster_speed: 0.075, per_fewer_target: 20 }),
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1],
        aoe: true,
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
        multTip: () => ({ per_fewer_target: 20 }),
        exEq: () => elements.exclusive_equipment_3.value() ? 0.3 : 0,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1],
        aoe: true,
      }
    }
  },
  zahhak: {
    name: 'Zahhak',
    element: element.earth,
    classType: classType.warrior,
    baseAtk: 1177,
    form: [elements.target_has_buff],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.8 : 1.1,
        pow: 1,
        mult: () => elements.target_has_buff.value() ? 1.3 : 1,
        multTip: () => ({ target_has_buff: 30 }),
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
        single: true,
      },
      s3: {
        rate: 1.9,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
        single: true,
      },
    }
  },
  zealot_carmainerose: {
    name: 'Zealot Carmainerose',
    element: element.fire,
    classType: classType.mage,
    baseAtk: 1168,
    form: [elements.skill_tree_completed, elements.target_has_buff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => elements.skill_tree_completed.value() && !elements.target_has_buff.value() ? 1.1 : 1,
        multTip: () => (elements.skill_tree_completed.value() ? { target_has_no_buff: 10 } : null),
        enhance: [0.05, 0.1, 0, 0, 0.15],
        single: true,
      },
      s2: {
        rate: 1.5,
        pow: 1.05,
        mult: () => elements.skill_tree_completed.value() && !elements.target_has_buff.value() ? 1.1 : 1,
        multTip: () => (elements.skill_tree_completed.value() ? { target_has_no_buff: 10 } : null),
        enhance: [0.1, 0, 0, 0, 0.15],
        single: true,
      },
      s3: {
        rate: 1.5,
        pow: 0.95,
        mult: () => elements.skill_tree_completed.value() && !elements.target_has_buff.value() ? 1.1 : 1,
        multTip: () => (elements.skill_tree_completed.value() ? { target_has_no_buff: 10 } : null),
        enhance: [0.05, 0.05, 0, 0.1, 0.15],
        single: true,
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
        flatTip: () => ({ caster_max_hp: 10 }),
        enhance: [0.05, 0, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        enhance: [0.005, 0.005, 0.005, 0.005, 0.01],
      },
      s3: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.12,
        flatTip: () => ({ caster_max_hp: 12 }),
        mult: () => {
          let extra = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            extra += heroes.zeno.skills.s2.enhance[i];
          }

          return 1 + elements.non_attack_skill_stack_8.value()*(0.07+extra)
        },
        multTip: () => {
          let extra = 0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            extra += heroes.zeno.skills.s2.enhance[i]*100;
          }

          return { per_stack: 7+extra };
        },
        enhance: [0.05, 0, 0.1, 0, 0.15],
        aoe: true,
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
        enhance: [0.05, 0.1, 0, 0.15],
        single: true,
      },
      s2: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2 : 1.5,
        pow: 0.95,
        mult: () => elements.target_has_debuff.value() ? 1.3 : 1,
        multTip: () => ({ target_has_debuff: 30 }),
        enhance: [0.05, 0.05, 0.1, 0.15],
        single: true,
      },
      s3: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1],
        aoe: true,
      }
    }
  }
};
