const dot = {
  bleed: 'bleed',
  burn: 'burn'
};

const heroes = {
  achates: {
    name: 'Achates',
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
  aither: {
    name: 'Aither',
    skills: {
      s1: {
        rate: 1,
        pow: 1.05,
        enhance: [0.1, 0, 0, 0.15]
      }
    }
  },
  alexa: {
    name: 'Alexa',
    form: [elements.target_nb_debuff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0.15],
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
  angelic_montmorancy: {
    name: 'Angelic Montmorancy',
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
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.02,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
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
  bellona: {
    name: 'Bellona',
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
        enhance: [0.05, 0, 0, 0, 0.15]
      }
    }
  },
  blaze_dingo: {
    name: 'Blaze Dingo',
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
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.45 : 1.2,
        pow: 0.95,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      },
    }
  },
  butcher_corps_inquisitor: {
    name: 'Butcher Corps Inquisitor',
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
    form: [elements.target_burn_detonate],
    dot: [dot.burn],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        detonate: dot.burn,
        detonation: () => 1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
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
        rate: (soulburn) => (elements.caster_hp_pc.value() < 50 ? 1 : 0.6) + (soulburn ? 0.2 : 0),
        pow: 1,
        flat: (soulburn) => {
          if (soulburn) {
            return elements.caster_max_hp.value() * (elements.caster_hp_pc.value() < 50 ? 0.1 : 0.08)
          } else {
            return elements.caster_max_hp.value() * (elements.caster_hp_pc.value() < 50 ? 0.0625 : 0.05)
          }
        },
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  cecilia: {
    name: 'Cecilia',
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
  cermia: {
    name: 'Cermia',
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
    form: [elements.stack_crit_hit],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1,
        pow: (soulburn) => soulburn ? 1 : 0.9,
        critDmgBoost: () => {
          let mult = 1.0;
          for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
            mult += heroes.challenger_dominiel.skills.s2.enhance[i];
          }

          return 0.2 + elements.stack_crit_hit.value()*(0.54 * mult);
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
    form: [elements.caster_nb_buff, elements.nb_targets],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
      },
      s2: {
        rate: () => 1.5 + (elements.caster_nb_buff.value() > 1 ? (elements.caster_nb_buff.value()-1)*0.07 : 0),
        pow: 1,
        enhance: [0.1, 0, 0.1, 0, 0.1],
      },
      s3: {
        rate: 1.2,
        pow: 1,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 3: return 1.534;
            case 2: return 1.801;
            case 1: return 2.068;
            default: return 1;
          }
        },
        enhance: [0.05, 0.05, 0, 0.1, 0.1],
      }
    }
  },
  charlotte: {
    name: 'Charlotte',
    form: [elements.caster_nb_focus],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
      },
      s2: {
        rate: 0.8,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0, 0.15],
      },
      s3: {
        rate: () => {
          switch (elements.caster_nb_focus.value()) {
            case 2: return 1;
            case 3: return 1.3;
            case 4: return 1.7;
            case 5: return 2.4;
            default: return 0.8;
          }
        },
        pow: 0.8,
        enhance: [0.1, 0.1, 0, 0.1, 0.1],
      }
    }
  },
  chloe: {
    name: 'Chloe',
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
    form: [elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
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
    form: [elements.caster_defense],
    skills: {
      s1: {
        rate: 0.6,
        pow: 1.05,
        flat: () => elements.caster_defense.value()*0.7,
        enhance: [0.1, 0, 0, 0.15]
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
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      },
      s3: {
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
    skills: {
      s1: {
        rate: 1.2,
        pow: 1
      }
    }
  },
  destina: {
    name: 'Destina',
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
        rate: 2.5,
        pow: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  dominiel: {
    name: 'Dominiel',
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
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      }
    }
  },
  elson: {
    name: 'Elson',
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
  falconer_kluri: {
    name: 'Falconer Kluri',
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
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.07,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 0.65,
        pow: 0.95,
        flat: () => elements.caster_max_hp.value()*0.12,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  fighter: {
    name: 'Fighter Maya',
    form: [elements.caster_defense, elements.target_hp_pc],
    skills: {
      s1: {
        rate: 0.5,
        pow: 1,
        flat: () => elements.caster_defense.value()*0.75,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.7 : 1,
        pow: 1,
        flat: () => elements.caster_defense.value()*1.5,
        mult: () => elements.target_hp_pc.value() < 30 ? 3 : 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  furious: {
    name: 'Furious',
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
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        enhance: [0.05, 0.1, 0, 0, 0.15]
      },
      s2: {
        rate: 1.5,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.15]
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
    form: [elements.target_has_bleed],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 0.85,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.15]
      },
      s3: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.9 : 2.2,
        pow: 0.85,
        mult: () => elements.target_has_bleed.value() ? 1.3 : 1,
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  haste: {
    name: 'Haste',
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
            default: return 1.0;
          }
        },
        enhance: [0.15, 0, 0, 0, 0.15]
      }
    }
  },
  hazel: {
    name: 'Hazel',
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
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.1, 0.1, 0.1]
      },
      s2: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.05, 0.05]
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
  kayron: {
    name: 'Kayron',
    form: [elements.caster_hp_pc],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 1.35 : 0.95,
        pow: 1,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.0015,
        enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
      },
      s3: {
        rate: 1.7,
        pow: 0.9,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.003,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      }
    }
  },
  ken: {
    name: 'Ken',
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
  khawazu: {
    name: 'Khawazu',
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
    form: [elements.caster_stealth, elements.caster_hp_pc],
    skills: {
      s1: {
        rate: (soulburn) => soulburn ? 1.4 : 1.1,
        pow: 1,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
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
  kluri: {
    name: 'Kluri',
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
    form: [elements.caster_max_hp, elements.caster_hp],
    skills: {
      s1: {
        rate: 0.7,
        pow: 1,
        flat: () => 0.085*elements.caster_max_hp.value(), // 8.5% self max Health
        enhance: [0.05, 0, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 0.8,
        pow: 1,
        flat: () => 0.13*elements.caster_max_hp.value(), // 13% self max Health
        enhance: [0.05, 0, 0.05, 0, 0, 0.1, 0.1]
      },
      s3: {
        rate: 0.3,
        pow: 1,
        flat: () => 0.53571*(elements.caster_max_hp.value()-elements.caster_hp.value()), // 0.53571 flat per 1 hp missing
        penetrate: () => 1.0,
      }
    }
  },
  leo: {
    name: 'Leo',
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
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
      }
    }
  },
  lilibet: {
    name: 'Lilibet',
    form: [elements.target_has_buff],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
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
        enhance: [0.05, 0.05, 0, 0.1, 0.15]
      }
    }
  },
  lorina: {
    name: 'Lorina',
    form: [elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.9,
        enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
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
        enhance: [0.05, 0, 0, 0, 0.1]
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
    form: [elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        mult: () => 1 + (1-(elements.target_hp_pc.value()/100))*0.2, // increased damage equal to 20% of enemies missing health percent (ie 50% hp enemy = 10% dmg boost)
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
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
    form: [elements.nb_hits],
    skills: {
      s1: {
        rate: () => elements.nb_hits.value()*0.7,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
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
    form: [elements.caster_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.1, 0, 0.1, 0, 0.15]
      },
      s2: {
        rate: 1.2,
        pow: 0.95,
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.004,
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
  mercedes: {
    name: 'Mercedes',
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
  mirsa: {
    name: 'Mirsa',
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
        enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.05]
      }
    }
  },
  mistychain: {
    name: 'Mistychain',
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
  pearlhorizon: {
    name: 'Pearlhorizon',
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
        rate: (soulburn) => soulburn ? 2.2 : 1.5,
        pow: 0.9,
        flat: () => elements.target_has_sleep.value() ? elements.target_max_hp.value()*0.2 : 0,
        enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
      },
    }
  },
  purrgis: {
    name: 'Purrgis',
    form: [elements.caster_max_hp],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
        flat: () => elements.caster_max_hp.value()*0.05,
        enhance: [0.1, 0, 0.1, 0, 0.15]
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
    form: [elements.caster_defense],
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
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
      },
    }
  },
  ravi: {
    name: 'Ravi',
    form: [elements.caster_fighting_spirit],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 2.5 : 1,
        pow: 1,
        mult: () => 1 + Math.floor(elements.caster_fighting_spirit.value()/20)*0.15,
        enhance: [0.05, 0, 0.1, 0, 0.15]
      },
      s3: {
        rate: 1.2,
        pow: 0.95,
        mult: () => 1 + Math.floor(elements.caster_fighting_spirit.value()/20)*0.15,
        enhance: [0.05, 0.05, 0, 0.05, 0.05]
      }
    }
  },
  requiemroar: {
    name: 'Requiemroar',
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
    form: [elements.target_burn_detonate],
    dot: [dot.burn],
    skills: {
      s1: {
        pow: 0.95,
        rate: 1,
        enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
        detonate: dot.burn,
        detonation: () => 1,
      },
      s2: {
        pow: 1,
        rate: 1,
        enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15]
      }
    }
  },
  righteous_thief_roozid: {
    name: 'Righteous Thief Roozid',
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
  romann: {
    name: 'Romann',
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
    form: [elements.caster_defense],
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
    form: [elements.caster_max_hp],
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
    form: [elements.target_nb_debuff],
    dot: [dot.bleed],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
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
        penetrate: () => 0.3 + elements.target_nb_debuff.value()*0.1
      },
    }
  },
  silk: {
    name: 'Silk',
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
  sol: {
    name: 'Sol Badguy',
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
        penetrate: () => elements.target_is_stunned.value() ? 1.0 : 0,
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
      }
    }
  },
  specter_tenebria: {
    name: 'Specter Tenebria',
    form: [elements.target_nb_debuff, elements.dead_people],
    skills: {
      s1: {
        rate: 1.2,
        pow: 1,
        enhance: [0.05, 0, 0.05, 0, 0.05, 0.15],
        mult: () => 1 + Math.min(elements.dead_people.value(), 5)*0.07
      },
      s3: {
        rate: 1.8,
        pow: 0.95,
        mult: () => 1 + elements.target_nb_debuff.value()*0.2 + Math.min(elements.dead_people.value(), 5)*0.07,
        enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
      }
    }
  },
  surin: {
    name: 'Surin',
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
        mult: () => elements.target_nb_bleed.value() > 0 ? 1.4 + (Math.min(elements.target_nb_bleed.value(), 5)-1)*0.15 : 1,
        enhance: [0.1, 0.1, 0, 0.15, 0.15]
      },
    }
  },
  sven: {
    name: 'Sven',
    form: [elements.caster_hp_pc, elements.target_hp_pc],
    skills: {
      s1: {
        rate: 1,
        pow: 0.95,
        enhance: [0.05, 0.05, 0.1, 0.15]
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
  tenebria: {
    name: 'Tenebria',
    skills: {
      s1: {
        rate: 1,
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
  tywin: {
    name: 'Tywin',
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
        rate: (soulburn) => soulburn ? 1.29 : 1.04,
        pow: 1,
        mult: (soulburn) => 1 + elements.caster_speed.value()*(soulburn ? 0.0009 : 0.00075),
        enhance: [0.05, 0.05, 0, 0.1, 0.1]
      }
    }
  },
  violet: {
    name: 'Violet',
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
      }
    }
  },
  wanda: {
    name: 'Wanda',
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
        enhance: [0.1, 0.1, 0, 0, 0.15]
      }
    }
  },
  watcher_schuri: {
    name: 'Watcher Schuri',
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
    form: [elements.target_has_buff],
    skills: {
      s1: {
        rate: 1,
        pow: 1,
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
    form: [elements.caster_speed, elements.nb_targets],
    skills: {
      s1: {
        soulburn: true,
        rate: (soulburn) => soulburn ? 0.85 : 0.6,
        pow: 0.8,
        mult: () => {
          let mult = 1 + elements.caster_speed.value()*0.00075;
          switch (elements.nb_targets.value()) {
            case 2: mult += 0.4; break;
            case 1: mult += 0.6; break;
          }
          return mult;
        },
        enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
      },
      s3: {
        rate: 1.5,
        pow: 0.8,
        mult: () => {
          switch (elements.nb_targets.value()) {
            case 2: return 1.4;
            case 1: return 1.6;
            default: return 1;
          }
        },
        enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
      }
    }
  },
  zerato: {
    name: 'Zerato',
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
