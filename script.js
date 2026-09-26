const people = {
  saad: {
    label: 'Built / Led by',
    name: 'Saad Tariq',
    role: 'Founder / Software Engineer',
    avatar: 'ST',
    links: [
      { label: 'GitHub', url: 'https://github.com/SaadMwa' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saad-tariq-ab7827336/' }
    ]
  },
  mahak: {
    label: 'Project Contributor',
    name: 'Mahak',
    role: 'Web Development Collaborator',
    avatar: 'MK',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/mahak_codes22/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mahak-webdev/' }
    ]
  }
};

const projects = [
  {
    name: 'Yousafzai Agri Foods',
    category: 'B2B supply website',
    description: 'A unified operations platform designed to replace manual buyer inquiries with a structured, credible product catalog and direct quote system.',
    year: '2026',
    role: 'Project lead',
    services: ['Web strategy', 'Responsive website', 'Business positioning'],
    status: 'Live',
    visualLabel: 'Live business site',
    image: 'images/yousafzay.PNG',
    liveUrl: 'https://yousafzaiagrifoods.com/',
    slug: 'yousafzai-agri-foods',
    technologies: ['B2B Supply', 'Quote System', 'Digital Storefront'],
    collaborators: [
      { ...people.saad, creditRole: 'Product Direction & Engineering' }
    ],
    problem: 'The business needed a credible public presence that could support supplier conversations and make the offer easy to understand.',
    system: 'The site was structured around clarity: company context, product communication, and a short path to inquiry.',
    result: 'A focused responsive website that presents the business as a serious supplier rather than a generic brochure.',
    engineering: 'The implementation prioritizes fast loading, simple navigation, and maintainable static delivery.',
    featured: true
  },
  {
    name: 'Crispiano Cafe',
    category: 'Hospitality web experience',
    description: 'A dedicated web experience built to transition scattered social media traffic into a centralized ordering path with a premium atmosphere.',
    year: '2026',
    role: 'Project lead',
    services: ['Front-end build', 'Hospitality UI', 'Responsive experience'],
    status: 'Live',
    image: 'images/crispiano_cafe.PNG',
    liveUrl: 'https://crispiano-cafe-eight.vercel.app/',
    slug: 'crispiano-cafe',
    technologies: ['Hospitality Web', 'Direct Ordering', 'Menu Management'],
    collaborators: [
      { ...people.saad, creditRole: 'Product Direction & Engineering' }
    ],
    problem: 'The cafe needed a web presence that communicated atmosphere and made common customer actions easy.',
    system: 'The interface uses a warm visual direction, clear navigation, and menu-focused content hierarchy.',
    result: 'A responsive hospitality website with a strong first impression and visible ordering path.',
    engineering: 'The build keeps the presentation lightweight while preserving large visual impact.',
    featured: true
  },
  {
    name: 'TechStem Technologies',
    category: 'Technology company website',
    description: 'A marketing and service platform developed to organize complex technical offerings into direct, readable service pathways for prospective clients.',
    year: '2026',
    role: 'Web development collaborator',
    services: ['Front-end execution', 'Responsive website', 'Service presentation'],
    status: 'Live',
    image: 'images/tecstem_project.PNG',
    liveUrl: 'https://techstem-technologies.vercel.app/',
    slug: 'techstem-technologies',
    technologies: ['Service Pathways', 'Technical Marketing', 'Content Architecture'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    problem: 'The project needed a clean technology-company presentation with clear service messaging.',
    system: 'The layout uses structured content blocks, confident spacing, and direct navigation.',
    result: 'A responsive marketing website built to communicate technical services quickly.',
    engineering: 'Front-end execution focuses on maintainable layout, responsive behavior, and polished presentation.',
    featured: true
  },
  {
    name: 'Online Course Landing Page',
    category: 'Education landing page',
    description: 'A conversion-focused enrollment system created to streamline student registration, course detailing, and syllabus presentation into one flow.',
    image: 'images/online_course.PNG',
    liveUrl: 'https://online-course-landing-page-eight.vercel.app/',
    slug: null,
    year: '2026',
    services: ['Landing page', 'Education UI', 'Responsive sections'],
    status: 'Live',
    technologies: ['Student Registration', 'Syllabus Presentation', 'Conversion Optimization'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  },
  {
    name: 'E-Commerce App',
    category: 'E-commerce experience',
    description: 'A unified retail interface engineered to replace fragmented purchasing steps with a smooth product discovery and checkout experience.',
    image: 'images/e-commerce.PNG',
    liveUrl: 'https://e-commerce-app-eta-dun.vercel.app/',
    slug: null,
    year: '2026',
    services: ['E-commerce UI', 'Product browsing', 'Responsive app'],
    status: 'Live',
    technologies: ['Retail Interface', 'Product Discovery', 'Checkout Flow'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  },
  {
    name: 'Dental Clinic',
    category: 'Healthcare website',
    description: 'A patient management front-end designed to consolidate appointment booking, clinic services, and contact information into a trusted medical resource.',
    image: 'images/dental_clinic.PNG',
    liveUrl: 'https://dental-clinic-seven-iota.vercel.app/',
    slug: null,
    year: '2026',
    services: ['Healthcare UI', 'Service pages', 'Responsive web'],
    status: 'Live',
    technologies: ['Patient Front-end', 'Appointment Booking', 'Medical Resource'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  },
  {
    name: 'Veylora Fine Dining',
    category: 'Fine dining website',
    description: 'An immersive digital reservation platform built to reflect premium hospitality while guiding guests straight to table booking.',
    image: 'images/Veylora.PNG',
    liveUrl: 'https://veylora-the-fine-dining.vercel.app/',
    slug: null,
    year: '2026',
    services: ['Restaurant UI', 'Editorial layout', 'Responsive web'],
    status: 'Concept',
    technologies: ['Digital Reservation', 'Premium Hospitality', 'Brand Interface'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  }
];

const pageTemplates = {};
let activePage = null;

function externalLink(label, url, className = 'text-link') {
  if (className.includes('button')) {
    return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label} opens in a new tab"><span class="button-label">${label}</span> <span class="button-icon" aria-hidden="true">-&gt;</span></a>`;
  }
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label} opens in a new tab">${label} <span class="link-arrow" aria-hidden="true">-&gt;</span></a>`;
}

function assetPath(filePath) {
  if (!filePath || filePath.startsWith('/') || filePath.startsWith('http')) return filePath;
  return '/' + filePath;
}

function capturePageTemplates() {
  document.querySelectorAll('template[id^="template-page-"]').forEach((template) => {
    const page = template.content.firstElementChild;
    if (page?.classList.contains('page-view')) {
      pageTemplates[page.id] = page;
    }
  });

  document.querySelectorAll('body > .page-view').forEach((page) => {
    pageTemplates[page.id] = page;
    page.remove();
  });
}

function mountPage(id) {
  if (activePage?.id === id) return activePage;

  activePage?.remove();

  const source = pageTemplates[id];
  if (!source) return null;

  const page = source.cloneNode(true);
  page.classList.add('is-active');
  document.querySelector('.footer')?.before(page);
  activePage = page;
  return page;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderPersonLinks(person, className = 'text-link') {
  return person.links.map((link) => externalLink(link.label, link.url, className)).join('');
}

function creditContribution(person) {
  if (person.contribution) return person.contribution;
  const role = person.creditRole || person.role || '';
  if (/web development/i.test(role)) return 'Frontend implementation and web development.';
  if (/product direction|engineering/i.test(role)) return 'Product direction, engineering, and delivery.';
  return '';
}

function socialIcon(label) {
  const key = label.toLowerCase();
  const commonAttrs = 'class="credit-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"';

  if (key.includes('instagram')) {
    return `<svg ${commonAttrs}><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.4"></circle><circle cx="17" cy="7" r="1"></circle></svg>`;
  }

  if (key.includes('linkedin')) {
    return `<svg ${commonAttrs}><path d="M6.5 10v8"></path><path d="M6.5 7v.01"></path><path d="M11 18v-8"></path><path d="M11 13.4c0-2.1 1.3-3.6 3.3-3.6 1.9 0 3.2 1.2 3.2 3.8V18"></path></svg>`;
  }

  if (key.includes('github')) {
    return `<svg ${commonAttrs}><path d="M9 19c-4 1.2-4-2-5.6-2.4"></path><path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.1 0-1.4-.5-2.5-1.3-3.4.1-.3.6-1.7-.1-3.4 0 0-1.1-.3-3.5 1.3a12.2 12.2 0 0 0-6.4 0C6.5 3.3 5.4 3.6 5.4 3.6c-.7 1.7-.2 3.1-.1 3.4A5 5 0 0 0 4 10.4c0 4.7 2.9 5.8 5.7 6.1-.4.4-.7 1-.7 2V22"></path></svg>`;
  }

  return `<svg ${commonAttrs}><path d="M10 6H6.8A2.8 2.8 0 0 0 4 8.8v8.4A2.8 2.8 0 0 0 6.8 20h8.4a2.8 2.8 0 0 0 2.8-2.8V14"></path><path d="M14 4h6v6"></path><path d="M11 13 20 4"></path></svg>`;
}

function renderCreditLinks(person) {
  return (person.links || []).map((link) => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer">
      ${socialIcon(link.label)}
      <span>${link.label}</span>
      <span class="link-arrow" aria-hidden="true">-&gt;</span>
    </a>
  `).join('');
}

function renderProjectCredits(project) {
  const collaborators = project.collaborators || [];
  if (!collaborators.length) return '';

  const credits = collaborators.map((person, index) => `
    <article class="project-credit-row">
      <div class="credit-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="credit-main">
        <h4>${person.name}</h4>
        <p>${person.creditRole || person.role}</p>
        ${creditContribution(person) ? `<span>${creditContribution(person)}</span>` : ''}
        <div class="credit-links">${renderCreditLinks(person)}</div>
      </div>
      <div class="credit-monogram" aria-hidden="true">${person.avatar}</div>
    </article>
  `).join('');

  return `
    <aside class="project-credits" aria-label="${project.name} project credits">
      <div class="credit-heading">
        <p>Project Team</p>
        <span>${String(collaborators.length).padStart(2, '0')}</span>
      </div>
      <div class="project-credit-list">${credits}</div>
    </aside>
  `;
}

function renderProjectCta(project, linkUrl) {
  const isCaseStudy = Boolean(project.slug);
  const attrs = isCaseStudy ? '' : 'target="_blank" rel="noopener noreferrer"';
  return `
    <a href="${linkUrl}" class="project-case-row" ${attrs}>
      <span>${isCaseStudy ? 'Explore the full project' : 'Open live project'}</span>
      <strong>${isCaseStudy ? 'View Case Study' : 'Explore'}</strong>
      <i aria-hidden="true">-&gt;</i>
    </a>
  `;
}

function renderMedia(project) {
  const image = assetPath(project.image);

  if (project.image) {
    return `
      <div class="media-canvas">
        <span class="media-depth-bg" aria-hidden="true"></span>
        <div class="browser-shell">
          <div class="browser-top">
            <span></span><span></span><span></span>
            <strong>${project.category}</strong>
          </div>
          <img class="main-screen" src="${image}" alt="${project.name} project screenshot" loading="lazy" decoding="async" />
        </div>
        <div class="detail-screen" aria-hidden="true">
          <span>${project.status || 'Live'}</span>
          <img src="${image}" alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    `;
  }

  return `
    <div class="media-canvas media-canvas-abstract" role="img" aria-label="${project.name} live project proof without a local screenshot asset">
      <span class="media-depth-bg" aria-hidden="true"></span>
      <div class="abstract-window">
        <span>${project.visualLabel}</span>
        <strong>${project.name}</strong>
        <div class="abstract-flow"><i></i><i></i><i></i><i></i></div>
      </div>
      <div class="detail-screen abstract-detail" aria-hidden="true">
        <span>Inquiry path</span>
        <strong>Supplier -> Buyer</strong>
      </div>
    </div>
  `;
}

function renderFeaturedProjects() {
  const mount = document.getElementById('featuredProjects');
  if (!mount) return;

  const featured = projects.filter(p => p.featured).slice(0, 3);
  
  let html = '';
  featured.forEach((project, index) => {
    const isLarge = index === 0;
    const linkUrl = project.slug ? '/work/' + project.slug : (project.liveUrl || '#');
    const wrapper = isLarge ? 'article' : 'div';
    const classes = isLarge ? 'project-feature is-large' : 'project-tile';
    
    html += `
      <${wrapper} class="${classes}" data-project-card>
        ${!isLarge ? `<div class="tile-image" data-project-media data-cursor-label="${project.slug ? 'VIEW CASE' : 'EXPLORE'}" data-link="${linkUrl}">${renderMedia(project)}</div>` : ''}
        
        <div class="${isLarge ? 'project-brief' : 'tile-body'}">
          <div class="project-line">
            <span>${isLarge ? '0' + (index + 1) : project.year}</span>
            <span>${isLarge ? project.year : project.category}</span>
          </div>
          <h3>${project.name}</h3>
          <p class="${isLarge ? 'project-description' : ''}">${project.description}</p>
          ${isLarge ? `<p class="project-services">${project.services.join(' / ')}</p>` : ''}
          ${renderProjectCredits(project)}
          ${renderProjectCta(project, linkUrl)}
        </div>
        
        ${isLarge ? `
        <div class="project-media" data-project-media data-cursor-label="${project.slug ? 'VIEW CASE' : 'EXPLORE'}" data-link="${linkUrl}">
          ${renderMedia(project)}
        </div>
        ` : ''}
      </${wrapper}>
    `;
  });

  mount.innerHTML = html;
  bindMediaClicks();
}

function renderArchiveProjects() {
  const mount = document.getElementById('archiveProjects');
  if (!mount) return;

  mount.innerHTML = projects.map((project) => {
    const linkUrl = project.slug ? '/work/' + project.slug : (project.liveUrl || '#');
    return `
    <article class="project-tile ${project.featured ? 'is-featured' : ''}" data-project-card>
      <div class="tile-image" data-project-media data-cursor-label="${project.slug ? 'VIEW CASE' : 'EXPLORE'}" data-link="${linkUrl}">${renderMedia(project)}</div>
      <div class="tile-body">
        <div class="project-line">
          <span>${project.year}</span>
          <span>${project.category}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        ${renderProjectCredits(project)}
        ${renderProjectCta(project, linkUrl)}
      </div>
    </article>
  `}).join('');
  bindMediaClicks();
}

function renderCaseStudy(slug) {
  const project = projects.find(p => p.slug === slug);
  if (!project) return false;

  document.getElementById('csTitle').textContent = project.name;
  document.getElementById('csPositioning').textContent = project.description;
  
  const hero = document.getElementById('csHero');
  if (project.image) {
    hero.innerHTML = `<img src="${assetPath(project.image)}" alt="${project.name} preview">`;
  } else {
    hero.innerHTML = `<div style="padding:120px; text-align:center; background:var(--surface);"><h2 style="font-family:'Manrope',sans-serif;">${project.name}</h2><p>No preview available</p></div>`;
  }

  document.getElementById('csMetadata').innerHTML = `
    <div class="cs-meta-item"><dt>Year</dt><dd>${project.year}</dd></div>
    <div class="cs-meta-item"><dt>Type</dt><dd>${project.category}</dd></div>
    <div class="cs-meta-item"><dt>Services</dt><dd>${project.services ? project.services.join('<br>') : 'Development'}</dd></div>
    ${project.liveUrl ? `<div class="cs-meta-item"><dt>Live Product</dt><dd><a href="${project.liveUrl}" target="_blank" class="text-link">${project.liveUrl.replace('https://', '')} -&gt;</a></dd></div>` : ''}
  `;

  const fillSection = (id, text) => {
    const el = document.getElementById(id);
    if (text) {
      el.innerHTML = `<p>${text}</p>`;
      el.parentElement.style.display = 'block';
    } else {
      el.parentElement.style.display = 'none';
    }
  };

  fillSection('csProblem', project.problem || '');
  fillSection('csSystem', project.system || '');
  fillSection('csProduct', project.product || '');
  fillSection('csEngineering', project.engineering || '');
  fillSection('csResult', project.result || '');

  document.getElementById('csCredits').innerHTML = renderProjectCredits(project);

  const currentIndex = projects.findIndex(p => p.slug === slug);
  let nextProject = null;
  for (let i = currentIndex + 1; i < projects.length; i++) {
    if (projects[i].slug) {
      nextProject = projects[i];
      break;
    }
  }
  if (!nextProject) nextProject = projects.find(p => p.slug);

  if (nextProject) {
    document.getElementById('csNext').innerHTML = `
      <p>Next Project</p>
      <a href="/work/${nextProject.slug}" style="text-decoration:none;"><h2>${nextProject.name} <span aria-hidden="true">-&gt;</span></h2></a>
    `;
  }

  document.title = project.name + " - Tariq & Co.Tech";
  return true;
}

function restoreRouteScroll() {
  if (window.location.hash) {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(targetId);

    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto', block: 'start' }));
      return;
    }
  }

  window.scrollTo({ top: 0, behavior: 'auto' });
}

function handleRoute() {
  const path = window.location.pathname;

  // Custom cursor cleanup
  const cursor = document.getElementById('cursorDot');
  if (cursor) cursor.classList.remove('is-active', 'is-project');

  if (path === '/' || path.endsWith('/index.html') || (!path.includes('/work') && !path.includes('/work/'))) {
    document.title = "Tariq & Co.Tech - Software Studio";
    mountPage('page-home');
    renderFeaturedProjects();
    initContactForm();
    initTeamVisual();
  } else if (path === '/work' || path === '/work/') {
    document.title = "Selected Work - Tariq & Co.Tech";
    mountPage('page-work');
    renderArchiveProjects();
  } else if (path.startsWith('/work/')) {
    const slug = path.split('/work/')[1].replace('/', '');
    mountPage('page-case-study');
    if (renderCaseStudy(slug)) {
      activePage?.classList.add('is-active');
    } else {
      mountPage('page-work');
      renderArchiveProjects();
    }
  } else {
    // Fallback for file:// protocols or unknown routes
    document.title = "Tariq & Co.Tech - Software Studio";
    mountPage('page-home');
    renderFeaturedProjects();
    initContactForm();
    initTeamVisual();
  }

  restoreRouteScroll();
}

function bindMediaClicks() {
  document.querySelectorAll('[data-project-media]').forEach((media) => {
    if (media.dataset.clickBound) return;
    media.dataset.clickBound = 'true';

    media.addEventListener('click', () => {
      const link = media.dataset.link;
      if (!link) return;
      if (link.startsWith('/')) {
        history.pushState(null, '', link);
        handleRoute();
      } else if (link.startsWith('#')) {
        const target = document.querySelector(link);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

function initRouter() {
  window.addEventListener('popstate', handleRoute);

  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link || !link.href) return;
    if (!link.href.startsWith(window.location.origin)) return;
    if (link.target === '_blank') return;

    const url = new URL(link.href);
    if (url.pathname === window.location.pathname && url.hash) return;

    e.preventDefault();
    history.pushState(null, '', url.pathname + url.search + url.hash);
    handleRoute();
  });

  handleRoute();
  bindMediaClicks();
}

function initNavigation() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  navLinks?.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    navLinks.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
}

function initTeamVisual() {
  const visual = document.querySelector('.team-orbit');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!visual || !canHover || visual.dataset.teamBound) return;

  visual.dataset.teamBound = 'true';
  const labels = visual.querySelectorAll('span[data-depth]');

  visual.addEventListener('pointermove', (event) => {
    const rect = visual.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;

    labels.forEach((label) => {
      const depth = Number(label.dataset.depth || 0);
      label.style.translate = `${x * depth}px ${y * depth}px`;
    });
  }, { passive: true });

  visual.addEventListener('pointerleave', () => {
    labels.forEach((label) => {
      label.style.translate = '0 0';
    });
  });
}

function initProjectMediaInteractions() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduced) return;

  document.querySelectorAll('[data-project-media]').forEach((media) => {
    if (media.dataset.cursorBound) return;
    media.dataset.cursorBound = 'true';
    const canvas = media.querySelector('.media-canvas');
    const main = media.querySelector('.main-screen, .abstract-window');
    const secondary = media.querySelector('.detail-screen');
    const depthBg = media.querySelector('.media-depth-bg');
    const quick = window.gsap ? {
      canvasRotateX: canvas ? gsap.quickTo(canvas, 'rotateX', { duration: 0.45, ease: 'power3.out' }) : null,
      canvasRotateY: canvas ? gsap.quickTo(canvas, 'rotateY', { duration: 0.45, ease: 'power3.out' }) : null,
      mainX: main ? gsap.quickTo(main, 'x', { duration: 0.45, ease: 'power3.out' }) : null,
      mainY: main ? gsap.quickTo(main, 'y', { duration: 0.45, ease: 'power3.out' }) : null,
      secondaryX: secondary ? gsap.quickTo(secondary, 'x', { duration: 0.45, ease: 'power3.out' }) : null,
      secondaryY: secondary ? gsap.quickTo(secondary, 'y', { duration: 0.45, ease: 'power3.out' }) : null,
      secondaryRotate: secondary ? gsap.quickTo(secondary, 'rotate', { duration: 0.45, ease: 'power3.out' }) : null,
      bgX: depthBg ? gsap.quickTo(depthBg, 'x', { duration: 0.45, ease: 'power3.out' }) : null,
      bgY: depthBg ? gsap.quickTo(depthBg, 'y', { duration: 0.45, ease: 'power3.out' }) : null
    } : null;

    const apply = (target, values) => {
      if (!target || window.gsap) return;
      const transforms = [];
      if (typeof values.x === 'number' || typeof values.y === 'number') transforms.push(`translate3d(${values.x || 0}px, ${values.y || 0}px, 0)`);
      if (typeof values.rotateX === 'number') transforms.push(`rotateX(${values.rotateX}deg)`);
      if (typeof values.rotateY === 'number') transforms.push(`rotateY(${values.rotateY}deg)`);
      if (typeof values.rotate === 'number') transforms.push(`rotate(${values.rotate}deg)`);
      target.style.transform = transforms.join(' ');
    };

    media.addEventListener('pointermove', (event) => {
      const rect = media.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      if (quick) {
        quick.canvasRotateX?.(y * -0.8);
        quick.canvasRotateY?.(x * 0.8);
        quick.mainX?.(x * 4);
        quick.mainY?.(y * 4);
        quick.secondaryX?.(x * 8);
        quick.secondaryY?.(y * 7);
        quick.secondaryRotate?.(x * 0.7);
        quick.bgX?.(x * -7);
        quick.bgY?.(y * -7);
        return;
      }

      apply(canvas, { rotateX: y * -0.8, rotateY: x * 0.8 });
      apply(main, { x: x * 4, y: y * 4 });
      apply(secondary, { x: x * 8, y: y * 7, rotate: x * 0.7 });
      apply(depthBg, { x: x * -7, y: y * -7 });
    }, { passive: true });

    media.addEventListener('pointerleave', () => {
      if (quick) {
        quick.canvasRotateX?.(0);
        quick.canvasRotateY?.(0);
        quick.mainX?.(0);
        quick.mainY?.(0);
        quick.secondaryX?.(0);
        quick.secondaryY?.(0);
        quick.secondaryRotate?.(0);
        quick.bgX?.(0);
        quick.bgY?.(0);
        return;
      }

      apply(canvas, { rotateX: 0, rotateY: 0 });
      apply(main, { x: 0, y: 0 });
      apply(secondary, { x: 0, y: 0, rotate: 0 });
      apply(depthBg, { x: 0, y: 0 });
    });
  });
}

function initTheme() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const validModes = ['system', 'light', 'dark'];

  const getSavedMode = () => {
    try {
      const saved = localStorage.getItem('tc-theme');
      return validModes.includes(saved) ? saved : 'system';
    } catch (error) {
      return 'system';
    }
  };

  const resolveTheme = (mode) => mode === 'system'
    ? (systemQuery.matches ? 'dark' : 'light')
    : mode;

  const setTheme = (mode, persist = true) => {
    const safeMode = validModes.includes(mode) ? mode : 'system';
    const theme = resolveTheme(safeMode);

    root.dataset.theme = theme;
    root.dataset.themeMode = safeMode;
    root.style.colorScheme = theme;

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === safeMode));
    });

    if (persist) {
      try {
        localStorage.setItem('tc-theme', safeMode);
      } catch (error) {
        // Storage can be blocked in some browser privacy modes.
      }
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      root.classList.add('is-theme-changing');
      setTheme(button.dataset.themeChoice);
      window.setTimeout(() => root.classList.remove('is-theme-changing'), 320);
    });
  });

  systemQuery.addEventListener?.('change', () => {
    if (root.dataset.themeMode === 'system') setTheme('system', false);
  });

  setTheme(getSavedMode(), false);
}

function fallbackReveal() {
  const targets = document.querySelectorAll('[data-animate], .project-feature, .project-tile, .services-list article, .process-rail article, .person-row, .people-block, .about-copy, .contact-copy, .contact-form, .editorial-grid > *');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach((target) => {
    target.classList.add('will-animate');
    observer.observe(target);
  });
}

function initMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = window.gsap && window.ScrollTrigger;

  if (reduced || !hasGsap) {
    fallbackReveal();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.split-line', {
    y: 34,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.reveal-item').forEach(item => {
    // Force visibility just in case
    item.style.opacity = '1';
  });
  
  gsap.from('.reveal-item', {
    y: 24,
    opacity: 0,
    filter: 'blur(8px)',
    duration: 0.9,
    delay: 0.2,
    stagger: 0.14,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.section-heading').forEach((heading) => {
    const kicker = heading.querySelector('.kicker');
    const title = heading.querySelector('.section-title');
    const copy = heading.querySelector(':scope > p:not(.kicker)');
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: 'top 84%',
        once: true
      }
    });

    if (kicker) timeline.from(kicker, { y: 14, opacity: 0, duration: 0.45, ease: 'power3.out' }, 0);
    if (title) {
      timeline.fromTo(title, {
        clipPath: 'inset(100% 0 0 0)',
        y: 18
      }, {
        clipPath: 'inset(0% 0 0 0)',
        y: 0,
        duration: 0.7,
        ease: 'power3.out'
      }, 0.08);
    }
    if (copy) timeline.from(copy, { y: 20, opacity: 0, duration: 0.55, ease: 'power3.out' }, 0.18);
  });

  gsap.utils.toArray('.editorial-grid > *, .services-list article, .process-rail article, .person-row, .people-block, .about-copy, .contact-copy, .contact-form').forEach((item) => {
    item.classList.add('will-animate');
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 84%'
      }
    });
  });

  gsap.utils.toArray('.project-feature, .project-tile').forEach((card) => {
    card.classList.add('will-animate');
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 82%'
      }
    });
  });

  gsap.from('.system-panel', {
    y: 24,
    opacity: 0,
    scale: 0.98,
    duration: 0.9,
    delay: 0.55,
    ease: 'power3.out'
  });

  gsap.from('.system-chip', {
    y: 16,
    opacity: 0,
    scale: 0.9,
    duration: 0.7,
    delay: 0.72,
    stagger: 0.08,
    ease: 'power3.out'
  });

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return;

  document.querySelectorAll('.magnetic, .nav-cta').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.12, y: y * 0.18, duration: 0.3, ease: 'power2.out' });
    });
    button.addEventListener('pointerleave', () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.35, ease: 'power2.out' });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      company: document.getElementById('company'),
      message: document.getElementById('message')
    };
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    Object.values(fields).forEach((field) => field.classList.remove('input-error'));

    if (!fields.name.value.trim()) {
      errors.push('Name is required.');
      fields.name.classList.add('input-error');
    }
    if (!emailRegex.test(fields.email.value.trim())) {
      errors.push('Enter a valid email address.');
      fields.email.classList.add('input-error');
    }
    if (!fields.company.value.trim()) {
      errors.push('Company or business is required.');
      fields.company.classList.add('input-error');
    }
    if (!fields.message.value.trim()) {
      errors.push('Project details are required.');
      fields.message.classList.add('input-error');
    }

    if (errors.length) {
      status.className = 'form-status error';
      status.textContent = errors.join(' ');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="button-label">Preparing...</span><span class="button-icon" aria-hidden="true">-&gt;</span>';
    status.className = 'form-status';
    status.textContent = 'Preparing your email draft.';

    const subject = `Project discussion - ${fields.company.value.trim()}`;
    const body = [
      `Name: ${fields.name.value.trim()}`,
      `Email: ${fields.email.value.trim()}`,
      `Company / Business: ${fields.company.value.trim()}`,
      '',
      'Workflow or project:',
      fields.message.value.trim()
    ].join('\n');
    const mailtoUrl = `mailto:saadtariq.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      status.className = 'form-status success';
      status.innerHTML = `Draft ready. <a href="${mailtoUrl}">Open your email app</a>.`;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="button-label">Send Project Brief</span><span class="button-icon" aria-hidden="true">-&gt;</span>';
    }, 400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  capturePageTemplates();
  initRouter();
  initNavigation();
  initTheme();
  initTeamVisual();
  if (typeof initSystemCanvas === 'function') initSystemCanvas();
  if (typeof initHeroSystem === 'function') initHeroSystem();
});
