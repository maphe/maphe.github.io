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
  }
};