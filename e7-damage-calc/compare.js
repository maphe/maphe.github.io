const getSavedBuilds = () => {
  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};
  return allSets[document.getElementById('hero').value] || {};
}

const setDefaultSettingName = () => {
  const artifact = new Artifact(document.getElementById('artifact').value);
  const hero = new Hero(document.getElementById('hero').value, artifact);

  return `${Math.round(hero.atk)}⚔️x${Math.round(hero.crit)}% (${artifact.getName()}) vs ${Math.round(hero.target.def)}🛡️`;
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
        dmg[skillId+'_sb'] = {
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
  gtag('event', 'save', {
    event_category: 'Hero',
    event_label: hero.id,
  });
  refreshCompareBadge();
};

const compare = (heroId) => {
  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};
  const heroSets = allSets[heroId] || {};

  if (Object.keys(heroSets).length === 0) {
    document.getElementById('compare-splash').style.display = 'block';
    document.getElementById('damage-comparison-block').style.display = 'none';
    return;
  }

  const headers = document.getElementById('damage-header');
  headers.innerHTML = '<th></th><th>Build</th>';
  for (const skillId of Object.keys(heroSets[Object.keys(heroSets)[0]])) {
    $(headers).append(`<th class="text-right">${compareSkillLabel(skillId)}</th>`)
  }

  const body = document.getElementById('damage-comparison');
  body.innerHTML = '';
  for (const setName of Object.keys(heroSets)) {
    let html = `<td class="text-center align-middle"><a href="#" class="compare-clear-single" data-hero="${heroId}" data-build="${setName}"><i class="fas fa-trash-alt"></i></a></td><td class="py-2">${setName}</td>`;
    for (const skillId of Object.keys(heroSets[setName])) {
      const dmg = heroSets[setName][skillId];
      const output = dmg['crit'] || dmg['normal'] || dmg['miss'] || 0;
      html += `<td class="text-right py-2">${output}</td>`;
    }
    $(body).append(`<tr>${html}</tr>`)
  }

  document.getElementById('compare-splash').style.display = 'none';
  document.getElementById('damage-comparison-block').style.display = 'block';
  gtag('event', 'compare', {
    event_category: 'Hero',
    event_label: heroId,
  });
};

const clearCompare = (heroId) => {
  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};

  delete allSets[heroId];
  localStorage.setItem('heroes', JSON.stringify(allSets));
  refreshCompareBadge();
}

const clearCompareBuild = (heroId, buildName) => {
  const allSets = localStorage.getItem('heroes') ? JSON.parse(localStorage.getItem('heroes')) : {};
  const builds = getSavedBuilds();
  if (builds[buildName]) {
    delete builds[buildName];
    allSets[heroId] = builds;
    localStorage.setItem('heroes', JSON.stringify(allSets));
  }
  compare(heroId);
  refreshCompareBadge();
}

const refreshCompareBadge = () => {
  document.getElementById('compare-pool-size').innerText = Object.keys(getSavedBuilds()).length;
}

$(() => {
  document.getElementById('compare-add-open').onclick = () => {
    document.getElementById('damage-mem-name').value = setDefaultSettingName();
  };

  document.getElementById('compare-add').onclick = () => {
    addToComparePool();
    $('#compareAddModal').modal('toggle');
  }

  document.getElementById('clear-compare').onclick = () => {
    const heroSelector = document.getElementById('hero');
    clearCompare(heroSelector.value);
    compare(heroSelector.value);
  }

  $('#compareModal').on('shown.bs.modal', () => {
    const heroSelector = document.getElementById('hero');
    compare(heroSelector.value);
  });

  $('#damage-comparison-block').on('click', '.compare-clear-single', (event) => {
    clearCompareBuild(event.currentTarget.dataset.hero, event.currentTarget.dataset.build);
  });
});