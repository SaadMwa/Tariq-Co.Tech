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
    description: 'A business-facing website for an agri-food supplier, shaped around credibility, product clarity, and direct inquiry from international buyers.',
    year: '2026',
    role: 'Project lead',
    services: ['Web strategy', 'Responsive website', 'Business positioning'],
    status: 'Live',
    visualLabel: 'Live business site',
    image: null,
    liveUrl: 'https://yousafzaiagrifoods.com/',
    caseStudyUrl: '#case-yousafzai-agri-foods',
    technologies: ['Business website', 'Responsive UI', 'Inquiry path'],
    collaborators: [
      { ...people.saad, creditRole: 'Product / Engineering' }
    ],
    caseStudy: [
      { label: 'Problem', text: 'The business needed a credible public presence that could support supplier conversations and make the offer easy to understand.' },
      { label: 'Approach', text: 'The site was structured around clarity: company context, product communication, and a short path to inquiry.' },
      { label: 'Product', text: 'A focused responsive website that presents the business as a serious supplier rather than a generic brochure.' },
      { label: 'Engineering', text: 'The implementation prioritizes fast loading, simple navigation, and maintainable static delivery.' }
    ],
    featured: true
  },
  {
    name: 'Crispiano Cafe',
    category: 'Hospitality web experience',
    description: 'A polished cafe website with strong atmosphere, menu-led browsing, responsive sections, and a direct ordering path.',
    year: '2026',
    role: 'Project lead',
    services: ['Front-end build', 'Hospitality UI', 'Responsive experience'],
    status: 'Live',
    image: 'images/crispiano_cafe.PNG',
    liveUrl: 'https://crispiano-cafe-eight.vercel.app/',
    caseStudyUrl: '#case-crispiano-cafe',
    technologies: ['Restaurant website', 'Responsive layout', 'Customer journey'],
    collaborators: [
      { ...people.saad, creditRole: 'Product / Engineering' }
    ],
    caseStudy: [
      { label: 'Problem', text: 'The cafe needed a web presence that communicated atmosphere and made common customer actions easy.' },
      { label: 'Approach', text: 'The interface uses a warm visual direction, clear navigation, and menu-focused content hierarchy.' },
      { label: 'Product', text: 'A responsive hospitality website with a strong first impression and visible ordering path.' },
      { label: 'Engineering', text: 'The build keeps the presentation lightweight while preserving large visual impact.' }
    ],
    featured: true
  },
  {
    name: 'TechStem Technologies',
    category: 'Technology company website',
    description: 'A service-led technology website with structured front-end execution, strong visual hierarchy, and clear company messaging.',
    year: '2026',
    role: 'Web development collaborator',
    services: ['Front-end execution', 'Responsive website', 'Service presentation'],
    status: 'Live',
    image: 'images/tecstem_project.PNG',
    liveUrl: 'https://techstem-technologies.vercel.app/',
    caseStudyUrl: '#case-techstem-technologies',
    technologies: ['Web development', 'Service website', 'Responsive UI'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    caseStudy: [
      { label: 'Problem', text: 'The project needed a clean technology-company presentation with clear service messaging.' },
      { label: 'Approach', text: 'The layout uses structured content blocks, confident spacing, and direct navigation.' },
      { label: 'Product', text: 'A responsive marketing website built to communicate technical services quickly.' },
      { label: 'Engineering', text: 'Front-end execution focuses on maintainable layout, responsive behavior, and polished presentation.' }
    ],
    featured: true
  },
  {
    name: 'Online Course Landing Page',
    category: 'Education landing page',
    description: 'A conversion-oriented course experience with dark editorial styling, offer clarity, and strong landing-page structure.',
    image: 'images/online_course.PNG',
    liveUrl: 'https://online-course-landing-page-eight.vercel.app/',
    caseStudyUrl: null,
    year: '2026',
    services: ['Landing page', 'Education UI', 'Responsive sections'],
    status: 'Live',
    technologies: ['Landing page', 'Education UI', 'Responsive sections'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  },
  {
    name: 'E-Commerce App',
    category: 'E-commerce experience',
    description: 'A fashion-focused shopping interface with product-first visuals, navigation structure, and commerce-ready presentation.',
    image: 'images/e-commerce.PNG',
    liveUrl: 'https://e-commerce-app-eta-dun.vercel.app/',
    caseStudyUrl: null,
    year: '2026',
    services: ['E-commerce UI', 'Product browsing', 'Responsive app'],
    status: 'Live',
    technologies: ['E-commerce UI', 'Product browsing', 'Responsive app'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  },
  {
    name: 'Dental Clinic',
    category: 'Healthcare website',
    description: 'A patient-facing healthcare website centered on services, trust, and straightforward clinic navigation.',
    image: 'images/dental_clinic.PNG',
    liveUrl: 'https://dental-clinic-seven-iota.vercel.app/',
    caseStudyUrl: null,
    year: '2026',
    services: ['Healthcare UI', 'Service pages', 'Responsive web'],
    status: 'Live',
    technologies: ['Healthcare UI', 'Service pages', 'Responsive web'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  },
  {
    name: 'Veylora Fine Dining',
    category: 'Fine dining website',
    description: 'A cinematic restaurant website with premium typography, hospitality atmosphere, and reservation-led presentation.',
    image: 'images/Veylora.PNG',
    liveUrl: null,
    caseStudyUrl: null,
    year: '2026',
    services: ['Restaurant UI', 'Editorial layout', 'Responsive web'],
    status: 'Concept',
    technologies: ['Restaurant UI', 'Editorial layout', 'Responsive web'],
    collaborators: [
      { ...people.mahak, creditRole: 'Web Development' }
    ],
    featured: false
  }
];

function externalLink(label, url, className = 'text-link') {
  if (className.includes('button')) {
    return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label} opens in a new tab"><span class="button-label">${label}</span> <span class="button-icon" aria-hidden="true">-&gt;</span></a>`;
  }
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label} opens in a new tab">${label} <span class="link-arrow" aria-hidden="true">-&gt;</span></a>`;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderPersonLinks(person, className = 'text-link') {
  return person.links.map((link) => externalLink(link.label, link.url, className)).join('');
}

function renderProjectCredits(project) {
  const credits = project.collaborators.map((person) => `
    <article class="project-credit">
      <div class="credit-avatar" aria-hidden="true">${person.avatar}</div>
      <div>
        <h4>${person.name}</h4>
        <p>${person.creditRole || person.role}</p>
        <div class="credit-links">${renderPersonLinks(person)}</div>
      </div>
    </article>
  `).join('');

  return `
    <aside class="project-credits" aria-label="${project.name} project credits">
      <p>Project Credits</p>
      <div class="project-credit-list">${credits}</div>
    </aside>
  `;
}

function renderMedia(project) {
  if (project.image) {
    return `
      <div class="media-canvas">
        <span class="media-depth-bg" aria-hidden="true"></span>
        <div class="browser-shell">
          <div class="browser-top">
            <span></span><span></span><span></span>
            <strong>${project.category}</strong>
          </div>
          <img class="main-screen" src="${project.image}" alt="${project.name} project screenshot" loading="lazy" decoding="async" />
        </div>
        <div class="detail-screen" aria-hidden="true">
          <span>${project.status || 'Live'}</span>
          <img src="${project.image}" alt="" loading="lazy" decoding="async" />
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

  mount.innerHTML = projects.filter((project) => project.featured).map((project, index) => `
    <article class="project-feature project-moment-${index + 1}" id="project-${slugify(project.name)}" data-project-card>
      <div class="project-brief">
        <div class="project-line">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <p class="project-services">${project.services.join(' / ')}</p>
      </div>
      <div class="project-media" data-project-media data-cursor-label="${project.caseStudyUrl ? 'VIEW CASE' : 'EXPLORE'}">${renderMedia(project)}</div>
      <div class="project-detail">
        <dl class="project-meta">
          <div><dt>Type</dt><dd>${project.category}</dd></div>
          <div><dt>Status</dt><dd>${project.status}</dd></div>
          <div><dt>Services</dt><dd>${project.services.join(', ')}</dd></div>
          <div><dt>Year</dt><dd>${project.year}</dd></div>
        </dl>
        <div class="case-study-notes" id="case-${slugify(project.name)}">
          ${project.caseStudy.map((item, noteIndex) => `
            <div>
              <span>${String(noteIndex + 1).padStart(2, '0')} - ${item.label}</span>
              <p>${item.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="project-footer">
        ${renderProjectCredits(project)}
        <div class="project-actions">
          ${project.caseStudyUrl ? `<a class="text-link case-link" href="${project.caseStudyUrl}">View Case Study <span class="link-arrow" aria-hidden="true">-&gt;</span></a>` : ''}
          ${project.liveUrl ? externalLink('Live Project', project.liveUrl, 'button button-secondary') : '<span class="no-link-note">Live link withheld until verified.</span>'}
        </div>
      </div>
    </article>
  `).join('');
}

function renderSupportingProjects() {
  const mount = document.getElementById('supportingProjects');
  if (!mount) return;

  mount.innerHTML = projects.filter((project) => !project.featured).map((project) => `
    <article class="project-tile" data-project-card>
      <div class="tile-image" data-project-media data-cursor-label="EXPLORE">${renderMedia(project)}</div>
      <div class="tile-body">
        <div class="project-line">
          <span>${project.year}</span>
          <span>${project.status}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tech-list">
          ${project.technologies.slice(0, 2).map((item) => `<span class="tech-pill">${item}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${project.liveUrl ? externalLink('Live Project', project.liveUrl) : '<span class="no-link-note">No verified live link.</span>'}
        </div>
        ${renderProjectCredits(project)}
      </div>
    </article>
  `).join('');
}

function renderPeopleRows() {
  const mount = document.getElementById('peopleRows');
  if (!mount) return;

  mount.innerHTML = Object.values(people).map((person) => `
    <article class="person-row">
      <div class="avatar" aria-hidden="true">${person.avatar}</div>
      <div class="person-copy">
        <h3>${person.name}</h3>
        <p>${person.role}</p>
      </div>
      <div class="person-links">${renderPersonLinks(person)}</div>
    </article>
  `).join('');
}

function initNavigation() {
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  function setHeaderState() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 20);
  }

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }
  });
}

function initTheme() {
  const root = document.documentElement;
  const switcher = document.getElementById('themeSwitch');
  if (!switcher) return;

  const options = Array.from(switcher.querySelectorAll('[data-theme-choice]'));
  const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'tc-theme';

  function storedMode() {
    const saved = localStorage.getItem(storageKey);
    return ['system', 'light', 'dark'].includes(saved) ? saved : 'system';
  }

  function resolveTheme(mode) {
    return mode === 'system' ? (systemQuery.matches ? 'dark' : 'light') : mode;
  }

  function applyTheme(mode, shouldPersist = true) {
    const theme = resolveTheme(mode);
    const isDark = theme === 'dark';
    root.dataset.theme = theme;
    root.dataset.themeMode = mode;
    root.style.colorScheme = theme;

    options.forEach((option) => {
      const isActive = option.dataset.themeChoice === mode;
      option.setAttribute('aria-pressed', String(isActive));
    });

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', isDark ? '#070b14' : '#f5f7fb');

    if (shouldPersist) localStorage.setItem(storageKey, mode);
  }

  applyTheme(root.dataset.themeMode || storedMode(), false);

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const mode = option.dataset.themeChoice;
      if (!mode) return;
      root.classList.add('is-theme-changing');
      applyTheme(mode);
      window.setTimeout(() => root.classList.remove('is-theme-changing'), 320);
    });
  });

  const syncSystemTheme = () => {
    if (root.dataset.themeMode !== 'system') return;
    root.classList.add('is-theme-changing');
    applyTheme('system', false);
    window.setTimeout(() => root.classList.remove('is-theme-changing'), 320);
  };

  if (systemQuery.addEventListener) {
    systemQuery.addEventListener('change', syncSystemTheme);
  } else if (systemQuery.addListener) {
    systemQuery.addListener(syncSystemTheme);
  }
}

function initSystemCanvas() {
  const canvas = document.getElementById('systemCanvas');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canvas || reduced || window.innerWidth < 720) return;

  const ctx = canvas.getContext('2d');
  const nodes = [];
  const pointer = { x: 0.5, y: 0.5 };
  let width = 0;
  let height = 0;
  let rafId;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    nodes.length = 0;
    const count = Math.min(58, Math.floor(width / 26));
    for (let i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1.2 + Math.random() * 2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const pullX = (pointer.x - 0.5) * 18;
    const pullY = (pointer.y - 0.5) * 18;

    nodes.forEach((node, index) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;

      for (let j = index + 1; j < nodes.length; j += 1) {
        const other = nodes[j];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.16;
          ctx.beginPath();
          ctx.moveTo(node.x + pullX, node.y + pullY);
          ctx.lineTo(other.x + pullX, other.y + pullY);
          ctx.strokeStyle = `rgba(77, 141, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(node.x + pullX, node.y + pullY, node.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(57, 183, 255, 0.42)';
      ctx.fill();
    });

    rafId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX / window.innerWidth;
    pointer.y = event.clientY / window.innerHeight;
  }, { passive: true });

  resize();
  draw();

  window.addEventListener('pagehide', () => cancelAnimationFrame(rafId));
}

function initHeroSystem() {
  const heroSystem = document.querySelector('.hero-system');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!heroSystem || !canHover || reduced) return;

  const chips = heroSystem.querySelectorAll('.system-chip');
  const panel = heroSystem.querySelector('.system-panel');

  heroSystem.addEventListener('pointermove', (event) => {
    const rect = heroSystem.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    if (window.gsap) {
      gsap.to(panel, { x: x * 10, y: y * 8, duration: 0.45, ease: 'power3.out' });
      chips.forEach((chip, index) => {
        const depth = 8 + index * 4;
        gsap.to(chip, { x: x * depth, y: y * depth, duration: 0.5, ease: 'power3.out' });
      });
    }
  });

  heroSystem.addEventListener('pointerleave', () => {
    if (window.gsap) {
      gsap.to([panel, ...chips], { x: 0, y: 0, duration: 0.55, ease: 'power3.out' });
    }
  });
}

function initCursor() {
  const cursor = document.getElementById('cursorDot');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!cursor || !canHover || reduced) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;
  let scale = 0;
  let targetScale = 0;
  let activeMedia = null;

  function render() {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    scale += (targetScale - scale) * 0.2;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
    requestAnimationFrame(render);
  }

  document.addEventListener('pointermove', (event) => {
    if (!activeMedia) return;
    tx = event.clientX;
    ty = event.clientY;
  }, { passive: true });

  document.querySelectorAll('[data-project-media]').forEach((media) => {
    media.addEventListener('pointerenter', (event) => {
      activeMedia = media;
      tx = event.clientX;
      ty = event.clientY;
      x = tx;
      y = ty;
      cursor.dataset.label = media.dataset.cursorLabel || 'EXPLORE';
      targetScale = 1;
      cursor.classList.add('is-visible', 'is-project');
    });

    media.addEventListener('pointerleave', () => {
      activeMedia = null;
      targetScale = 0;
      cursor.classList.remove('is-visible', 'is-project');
    });
  });

  document.addEventListener('pointerleave', () => {
    activeMedia = null;
    targetScale = 0;
    cursor.classList.remove('is-visible', 'is-project');
  });

  render();
}

function initProjectMediaInteractions() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduced) return;

  document.querySelectorAll('[data-project-media]').forEach((media) => {
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

  targets.forEach((target) => observer.observe(target));
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
      submitBtn.innerHTML = '<span class="button-label">Continue via Email</span><span class="button-icon" aria-hidden="true">-&gt;</span>';
    }, 400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProjects();
  renderSupportingProjects();
  renderPeopleRows();
  initNavigation();
  initTheme();
  initSystemCanvas();
  initHeroSystem();
  initCursor();
  initProjectMediaInteractions();
  initMotion();
  initContactForm();
});
