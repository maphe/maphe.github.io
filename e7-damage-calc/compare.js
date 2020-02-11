const setDefaultSettingName = () => {
  const artifact = new Artifact(document.getElementById('artifact').value);
  const hero = new Hero(document.getElementById('hero').value, artifact);

  return `${hero.atk}⚔️x${hero.crit}% (${artifact.getName()}) vs ${hero.target.def}🛡️`;
};

const addToComparePool = () => {
  const artifact = new Artifact(document.getElementById('artifact').value);
  const hero = new Hero(document.getElementById('hero').value, artifact);

  let dmg = {};
  for (const skillId of Object.keys(hero.skills)) {
    const skill = hero.skills[skillId];

    if (skill.rate !== undefined) {
      const damage = hero.getDamage(skillId);
      dmg[skillId] = {
        'crit': damage['crit'],
        'normal': damage['normal'],
        'miss': damage['miss'],
      };

      if (skill.soulburn) {
        const damage = hero.getDamage(skillId, true);
        dmg[skillId+'+sb'] = {
          'crit': damage['crit'],
          'normal': damage['normal'],
          'miss': damage['miss'],
        };
      }
    }
  }

  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};
  const heroSets = allSets[hero.id] || {};
  heroSets[document.getElementById('damage-mem-name').value] = dmg;
  allSets[hero.id] = heroSets;
  localStorage.setItem('heroes', JSON.stringify(allSets));
};

const compare = (heroId) => {
  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};
  const heroSets = allSets[heroId] || {};
  console.log(heroSets[Object.keys(heroSets)[0]]);

  const headers = document.getElementById('damage-header');
  headers.innerHTML = '<th>Set</th>';
  for (const skillId of Object.keys(heroSets[Object.keys(heroSets)[0]])) {
    $(headers).append(`<th>${skillId}</th>`)
  }

  const body = document.getElementById('damage-comparison');
  body.innerHTML = '';
  for (const setName of Object.keys(heroSets)) {
    let html = `<td>${setName}</td>`;
    for (const skillId of Object.keys(heroSets[setName])) {
      html += `<td>${heroSets[setName][skillId]['crit']}</td>`;
    }
    $(body).append(`<tr>${html}</tr>`)
  }
};


$(() => {
  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};

  const heroSelector = document.getElementById('compare-hero-picker');
  Object.keys(allSets).map((id => {
    $(heroSelector).append(`<option value="${id}" data-content="${elemIcon(heroes[id].element)}${classIcon(heroes[id].classType)} <span>${heroName(id)}</span>">${heroName(id)}</option>`)
  }));
  if (heroSelector) {
    heroSelector.onchange = () => {
      const hero = heroes[heroSelector.value];
      compare(heroSelector.value)
    };
  }

  document.getElementById('compare').onclick = () => {
    document.getElementById('damage-mem-name').value = setDefaultSettingName();
  };

  document.getElementById('compare-add').onclick = () => {
    addToComparePool();
  }
});