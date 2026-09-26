const people = {
  saad: {
    label: 'Built / Led by',
    name: 'Saad Tariq',
    role: 'Founder / Software Engineer',
    avatar: 'S',
    links: [
      { label: 'GitHub', url: 'https://github.com/SaadMwa' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saad-tariq-ab7827336/' }
    ]
  },
  mahak: {
    label: 'Project Contributor',
    name: 'Mahak',
    role: 'Web Development Collaborator',
    avatar: 'M',
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
    technologies: ['Business website', 'Responsive UI', 'Inquiry path'],
    contributor: people.saad,
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
    technologies: ['Restaurant website', 'Responsive layout', 'Customer journey'],
    contributor: people.saad,
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
    technologies: ['Web development', 'Service website', 'Responsive UI'],
    contributor: people.mahak,
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
    technologies: ['Landing page', 'Education UI', 'Responsive sections'],
    contributor: people.mahak,
    featured: false
  },
  {
    name: 'E-Commerce App',
    category: 'E-commerce experience',
    description: 'A fashion-focused shopping interface with product-first visuals, navigation structure, and commerce-ready presentation.',
    image: 'images/e-commerce.PNG',
    liveUrl: 'https://e-commerce-app-eta-dun.vercel.app/',
    technologies: ['E-commerce UI', 'Product browsing', 'Responsive app'],
    contributor: people.mahak,
    featured: false
  },
  {
    name: 'Dental Clinic',
    category: 'Healthcare website',
    description: 'A patient-facing healthcare website centered on services, trust, and straightforward clinic navigation.',
    image: 'images/dental_clinic.PNG',
    liveUrl: 'https://dental-clinic-seven-iota.vercel.app/',
    technologies: ['Healthcare UI', 'Service pages', 'Responsive web'],
    contributor: people.mahak,
    featured: false
  },
  {
    name: 'Veylora Fine Dining',
    category: 'Fine dining website',
    description: 'A cinematic restaurant website with premium typography, hospitality atmosphere, and reservation-led presentation.',
    image: 'images/Veylora.PNG',
    liveUrl: null,
    technologies: ['Restaurant UI', 'Editorial layout', 'Responsive web'],
    contributor: people.mahak,
    featured: false
  }
];

function externalLink(label, url, className = 'text-link') {
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label} opens in a new tab">${label} <span class="link-arrow" aria-hidden="true">-&gt;</span></a>`;
}

function renderCredit(person) {
  const links = person.links.map((link) => externalLink(link.label, link.url)).join('');
  return `
    <div class="credit-card">
      <div class="credit-avatar" aria-hidden="true">${person.avatar}</div>
      <div>
        <div class="credit-label">${person.label}</div>
        <div class="credit-name">${person.name}</div>
        <div class="credit-role">${person.role}</div>
        <div class="credit-links">${links}</div>
      </div>
    </div>
  `;
}

function renderMedia(project) {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.name} project screenshot" loading="lazy" decoding="async" />`;
  }

  return `
    <div class="project-placeholder" role="img" aria-label="${project.name} live project proof without a local screenshot asset">
      <span>${project.visualLabel}</span>
      <strong>${project.name}</strong>
    </div>
  `;
}

function renderFeaturedProjects() {
  const mount = document.getElementById('featuredProjects');
  if (!mount) return;

  mount.innerHTML = projects.filter((project) => project.featured).map((project, index) => `
    <article class="project-feature" data-project-card>
      <div class="project-media">${renderMedia(project)}</div>
      <div class="project-content">
        <div class="project-index">0${index + 1} / Featured Work</div>
        <h3>${project.name}</h3>
        <p class="project-category">${project.category}</p>
        <p class="project-description">${project.description}</p>
        <dl class="project-meta">
          <div><dt>Role</dt><dd>${project.role}</dd></div>
          <div><dt>Services</dt><dd>${project.services.join(', ')}</dd></div>
          <div><dt>Year</dt><dd>${project.year}</dd></div>
          <div><dt>Status</dt><dd>${project.status}</dd></div>
        </dl>
        <div class="tech-list">
          ${project.technologies.map((item) => `<span class="tech-pill">${item}</span>`).join('')}
        </div>
        <div class="case-study-notes">
          ${project.caseStudy.map((item, noteIndex) => `
            <div>
              <span>${String(noteIndex + 1).padStart(2, '0')} - ${item.label}</span>
              <p>${item.text}</p>
            </div>
          `).join('')}
        </div>
        <div class="project-actions">
          ${project.liveUrl ? externalLink('Live Project', project.liveUrl, 'button button-secondary') : '<span class="no-link-note">Live link withheld until verified.</span>'}
        </div>
        ${renderCredit(project.contributor)}
      </div>
    </article>
  `).join('');
}

function renderSupportingProjects() {
  const mount = document.getElementById('supportingProjects');
  if (!mount) return;

  mount.innerHTML = projects.filter((project) => !project.featured).map((project) => `
    <article class="project-tile" data-project-card>
      <div class="tile-image">${renderMedia(project)}</div>
      <div class="tile-body">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="tech-list">
          ${project.technologies.slice(0, 2).map((item) => `<span class="tech-pill">${item}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${project.liveUrl ? externalLink('Live Project', project.liveUrl) : '<span class="no-link-note">No verified live link.</span>'}
        </div>
        ${renderCredit(project.contributor)}
      </div>
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
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  function currentTheme() {
    return root.dataset.theme === 'dark' ? 'dark' : 'light';
  }

  function syncButton(theme) {
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    root.style.colorScheme = theme;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', isDark ? '#070b14' : '#f5f7fb');
  }

  syncButton(currentTheme());

  toggle.addEventListener('click', () => {
    const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
    root.classList.add('is-theme-changing');
    root.dataset.theme = nextTheme;
    localStorage.setItem('tc-theme', nextTheme);
    syncButton(nextTheme);
    window.setTimeout(() => root.classList.remove('is-theme-changing'), 320);
  });
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

function initCursor() {
  const cursor = document.getElementById('cursorDot');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!cursor || !canHover) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;

  function render() {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }

  window.addEventListener('pointermove', (event) => {
    tx = event.clientX;
    ty = event.clientY;
    cursor.classList.add('is-visible');
  }, { passive: true });

  document.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));

  document.addEventListener('pointerover', (event) => {
    if (event.target.closest('[data-project-card]')) {
      cursor.classList.add('is-project');
    }
  });

  document.addEventListener('pointerout', (event) => {
    if (event.target.closest('[data-project-card]')) {
      cursor.classList.remove('is-project');
    }
  });

  render();
}

function fallbackReveal() {
  const targets = document.querySelectorAll('[data-animate], .section-heading, .project-feature, .project-tile, .services-list article, .process-rail article, .person-card, .people-block, .about-copy, .contact-copy, .contact-form, .editorial-grid > *');
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

  gsap.utils.toArray('.section-heading, .editorial-grid > *, .services-list article, .process-rail article, .person-card, .people-block, .about-copy, .contact-copy, .contact-form').forEach((item) => {
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

  gsap.utils.toArray('.project-media img').forEach((image) => {
    gsap.fromTo(image, { yPercent: -4 }, {
      yPercent: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  document.querySelectorAll('.magnetic').forEach((button) => {
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
    submitBtn.textContent = 'Preparing...';
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
      submitBtn.textContent = 'Prepare Project Email';
    }, 400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProjects();
  renderSupportingProjects();
  initNavigation();
  initTheme();
  initSystemCanvas();
  initCursor();
  initMotion();
  initContactForm();
});
