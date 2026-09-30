(() => {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("SITE_CONFIG is not loaded.");
    return;
  }
  const $ = (id) => document.getElementById(id);
  const safe = (value = "") => String(value);

  document.title = cfg.site.title;
  document.querySelector('meta[name="description"]').setAttribute('content', cfg.site.description);

  const setText = (id, value) => {
    const node = $(id);
    if (node) node.textContent = safe(value);
  };

  setText('topbarName', cfg.profile.name);
  setText('topbarRole', cfg.profile.role);
  setText('topbarContact', cfg.profile.email);
  $('topbarContact').href = `mailto:${cfg.profile.email}`;

  setText('heroName', cfg.profile.name);
  setText('heroRole', cfg.profile.role);
  setText('tagline', cfg.profile.tagline);
  setText('aboutText', cfg.about.text);

  const profileImage = $('profileImage');
  profileImage.src = cfg.profile.photo;
  profileImage.alt = `${cfg.profile.name} profile photo`;

  const cvLink = $('cvLink');
  cvLink.href = cfg.profile.cv || '#';
  if (!cfg.profile.cv) cvLink.removeAttribute('download');

  $('heroMeta').innerHTML = `
    <div class="meta-panel">
      <div class="meta-age-pane">
        <span class="meta-label">AGE</span>
        <strong class="meta-age-number">${safe(cfg.profile.age)}</strong>
        <span class="meta-age-caption">years old</span>
      </div>
      <div class="meta-facts">
        ${cfg.profile.meta.map((item, index) => `
          <div class="meta-fact${index === 2 ? ' meta-fact--wide' : ''}">
            <span class="meta-label">${safe(item.label || '')}</span>
            <span class="meta-value">${safe(item.text)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  function initThemeSwitcher() {
    const themes = [
      { id: 'dark', label: 'Dark', color: '#303033' },
      { id: 'sky', label: 'Sky', color: '#003566' },
      { id: 'autumn', label: 'Autumn', color: '#e49a64' },
      { id: 'green', label: 'Green', color: '#4f772d' },
    ];
    const saved = localStorage.getItem('personal-site-theme') || 'dark';
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';
    switcher.setAttribute('aria-label', 'Color theme');
    switcher.innerHTML = `
      <span class="theme-switcher__label">Theme</span>
      ${themes.map(theme => `
        <button class="theme-dot" type="button" data-theme="${theme.id}"
          title="${theme.label}" aria-label="${theme.label} theme"
          style="--theme-dot:${theme.color}"></button>
      `).join('')}
    `;
    document.body.appendChild(switcher);

    const applyTheme = (themeId) => {
      document.documentElement.dataset.theme = themeId;
      localStorage.setItem('personal-site-theme', themeId);
      switcher.querySelectorAll('.theme-dot').forEach(button => {
        button.classList.toggle('is-active', button.dataset.theme === themeId);
      });
    };

    switcher.addEventListener('click', (event) => {
      const button = event.target.closest('.theme-dot');
      if (button) applyTheme(button.dataset.theme);
    });

    applyTheme(themes.some(theme => theme.id === saved) ? saved : 'dark');
  }

  initThemeSwitcher();

  setText('educationUniversity', cfg.education.university);
  setText('educationDegree', cfg.education.degree);
  setText('educationYears', cfg.education.years);
  $('educationLogo').src = cfg.education.logo;
  $('educationLogo').alt = `${cfg.education.university} logo`;

  if (cfg.decoration?.image) {
    $('decorationImage').src = cfg.decoration.image;
    $('decorationImage').alt = safe(cfg.decoration.alt || 'Decoration');
  }

  $('experienceList').innerHTML = cfg.experience.map(item => {
    const bullets = Array.isArray(item.bullets) && item.bullets.length
      ? `<ul class="experience-bullets">${item.bullets.map(b => `<li>${safe(b)}</li>`).join('')}</ul>`
      : (item.description ? `<p class="experience-description">${safe(item.description)}</p>` : '');
    const years = item.years ? `<p class="experience-years">${safe(item.years)}</p>` : '';
    return `
      <article class="experience-item">
        <div class="experience-dot"></div>
        <div>
          <h3>${safe(item.jobTitle)}</h3>
          <p class="experience-company">${safe(item.companyTitle)}</p>
          ${years}
          ${bullets}
        </div>
      </article>
    `;
  }).join('');

  $('skillsList').innerHTML = cfg.skills.map(skill => `<span class="chip">${safe(skill)}</span>`).join('');

  // Projects may use either the legacy `tag` string or the newer `tags` array.
  const getProjectTags = (project) => {
    if (Array.isArray(project.tags)) return project.tags.filter(Boolean).map(String);
    return project.tag ? [String(project.tag)] : [];
  };

  const allTags = [...new Set(cfg.projects.flatMap(getProjectTags))];
  let activeTag = 'All';
  let searchTerm = '';

  $('tagFilters').innerHTML = ['All', ...allTags].map(tag => `
    <button class="tag-filter${tag === 'All' ? ' is-active' : ''}" data-tag="${safe(tag)}">${safe(tag)}</button>
  `).join('');

  $('tagFilters').addEventListener('click', (event) => {
    const button = event.target.closest('.tag-filter');
    if (!button) return;
    activeTag = button.dataset.tag;
    document.querySelectorAll('.tag-filter').forEach(el => el.classList.remove('is-active'));
    button.classList.add('is-active');
    renderProjects();
  });

  $('projectSearch').addEventListener('input', (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderProjects();
  });

  function renderProjects() {
    const filtered = cfg.projects
      .filter(project => {
        const projectTags = getProjectTags(project);
        const matchesTag = activeTag === 'All' || projectTags.includes(activeTag);
        const haystack = [project.name, ...projectTags, project.description].filter(Boolean).join(' ').toLowerCase();
        const matchesSearch = !searchTerm || haystack.includes(searchTerm);
        return matchesTag && matchesSearch;
      })
      .sort((a, b) => (Number(a.priority) || 999) - (Number(b.priority) || 999));

    const groups = [];
    for (let i = 0; i < filtered.length; i += 3) groups.push(filtered.slice(i, i + 3));

    $('projectGrid').innerHTML = groups.map((group, groupIndex) => {
      const mirrored = groupIndex % 2 === 1;
      const layoutClass = mirrored ? 'project-mosaic-group--right' : 'project-mosaic-group--left';
      const partialClass = group.length < 3 ? ` project-mosaic-group--partial project-mosaic-group--count-${group.length}` : '';

      const cards = group.map((project, localIndex) => {
        const absoluteIndex = groupIndex * 3 + localIndex;
        const priority = Number(project.priority) || 999;
        const isTopPriority = priority === 1;
        const isLarge = localIndex === (mirrored ? 2 : 0);
        const banner = project.banner
          ? `<div class="project-media"><img class="project-image" src="${project.banner}" alt="${safe(project.name)} banner" onerror="this.style.display='none'; this.parentElement.classList.add('project-media--missing');"></div>`
          : '<div class="project-media project-placeholder"><span>+</span></div>';
        const linkItems = Object.entries(project.links || {})
          .filter(([, url]) => url)
          .map(([key, url]) => `<a class="project-link" href="${url}" target="_blank" rel="noreferrer">${safe(key)} <span>↗</span></a>`)
          .join('');
        const description = project.description ? `<p>${safe(project.description)}</p>` : '';
        const projectTags = getProjectTags(project);
        const tagMarkup = projectTags.length
          ? `<div class="project-tags">${projectTags.map(tag => `<span class="project-tag">${safe(tag)}</span>`).join('')}</div>`
          : '';
        const priorityMark = isTopPriority
          ? '<span class="project-rank project-rank--top">01 · HIGH</span>'
          : `<span class="project-rank">${String(absoluteIndex + 1).padStart(2, '0')}</span>`;

        return `
          <article class="project-card ${isLarge ? 'project-card--large' : 'project-card--small'} project-card--slot-${localIndex + 1}${isTopPriority ? ' project-card--top' : ''}">
            <div class="project-media-wrap">
              ${banner}
              <div class="project-media-overlay">
                ${priorityMark}
                ${tagMarkup}
              </div>
            </div>
            <div class="project-content">
              <div class="project-copy">
                <div class="project-title-row">
                  <h3>${safe(project.name)}</h3>
                  <span class="project-plus">↗</span>
                </div>
                ${isLarge ? '<div class="project-size-label">LARGE</div>' : ''}
                ${description}
              </div>
              ${linkItems ? `<div class="project-links">${linkItems}</div>` : ''}
            </div>
          </article>
        `;
      }).join('');

      return `<div class="project-mosaic-group ${layoutClass}${partialClass}">${cards}</div>`;
    }).join('');

    $('noResults').hidden = filtered.length !== 0;
  }


  const regularLinkCards = cfg.links.map(link => {
    const isEmail = link.url.startsWith('mailto:');
    const emailValue = isEmail ? link.url.replace(/^mailto:/i, '') : '';

    if (isEmail) {
      return `
        <article class="link-card link-card--email">
          <a class="link-card__main" href="${link.url}">
            <span class="link-icon">${safe(link.icon)}</span>
            <span class="link-card__label">${safe(link.label)}</span>
          </a>
          <div class="link-card__actions">
            <button class="copy-email" type="button" data-email="${safe(emailValue)}" aria-label="Copy email address">Copy</button>
            <a class="link-arrow" href="${link.url}" aria-label="Open email">↗</a>
          </div>
        </article>
      `;
    }

    return `
      <a class="link-card" href="${link.url}" target="_blank" rel="noreferrer">
        <span class="link-icon">${safe(link.icon)}</span>
        <span class="link-card__label">${safe(link.label)}</span>
        <span class="link-arrow">↗</span>
      </a>
    `;
  }).join('');

  const personalLinks = cfg.personalLinks;
  const personalLinkCard = personalLinks?.url ? `
    <a class="link-card link-card--hub" href="${personalLinks.url}" target="_blank" rel="noreferrer">
      <div class="link-hub__top">
        <span class="tile-kicker">LINK HUB</span>
        <span class="link-hub__icon">${safe(personalLinks.icon || '↗')}</span>
      </div>
      <div class="link-hub__body">
        <h3>${safe(personalLinks.label || 'Personal Links')}</h3>
        <p>${safe(personalLinks.title || 'All my links, one tile.')}</p>
        ${personalLinks.description ? `<span class="link-hub__description">${safe(personalLinks.description)}</span>` : ''}
      </div>
      <div class="link-hub__footer">
        <span>${safe(new URL(personalLinks.url).hostname.replace(/^www\./, ''))}</span>
        <span>OPEN ↗</span>
      </div>
    </a>
  ` : '';

  $('linksGrid').innerHTML = personalLinkCard + regularLinkCards;

  $('linksGrid').addEventListener('click', async (event) => {
    const button = event.target.closest('.copy-email');
    if (!button) return;

    const email = button.dataset.email || '';
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = 'Copied';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 1400);
    } catch {
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      button.textContent = 'Copied';
      button.classList.add('is-copied');
      window.setTimeout(() => {
        button.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 1400);
    }
  });

  setText('footerName', cfg.profile.name);
  setText('footerYear', new Date().getFullYear());

  renderProjects();
})();
