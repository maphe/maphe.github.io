const heroes = {
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
        enhance: [0.05, 0, 0.1, 0, 0.15]
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
  haste: {
    name: 'Haste',
    form: [elements.nb_targets],
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
  lilibet: {
    name: 'Lilibet',
    form: [elements.target_has_buff],
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
        mult: () => 1 + (100-elements.caster_hp_pc.value())*0.04,
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
        critDmgBoost: 0.2,
        enhance: [0.05, 0, 0, 0, 0.1, 0.15]
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
  sigret: {
    name: 'Sigret',
    form: [elements.target_nb_debuff],
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
  silver_blade_aramintha: {
    name: 'Silver Blade Aramintha',
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
        mult: () => elements.target_has_buff.value() ? 1.2 : 1, // 20% increased damage if target has no buffs
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
  }
};