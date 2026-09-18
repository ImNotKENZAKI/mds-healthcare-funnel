(() => {
  'use strict';

  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const hero = document.querySelector('[data-pulse-hero]');
  const stage = hero?.querySelector('.hero-stage');
  const motionButton = document.querySelector('.motion-toggle');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const enterButton = document.querySelector('[data-enter]');
  let paused = reduced.matches;
  let frame = 0;
  let displayedProgress = 0;
  let lastSceneTime = 0;

  root.classList.add('js-ready');
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const headerHeight = () => parseFloat(getComputedStyle(root).getPropertyValue('--header')) || 82;

  const ease = (start, end, value) => {
    const t = clamp((value - start) / (end - start));
    return t * t * (3 - 2 * t);
  };

  function updateScene(time = 0) {
    frame = 0;
    if (!hero || !stage) return;
    const distance = hero.offsetHeight - stage.offsetHeight;
    const bounds = hero.getBoundingClientRect();
    const target = paused || reduced.matches ? 0 : clamp((headerHeight() - bounds.top) / Math.max(1, distance));
    const dt = lastSceneTime ? clamp(time - lastSceneTime, 0, 64) : 16;
    lastSceneTime = time;
    const offscreen = bounds.bottom <= headerHeight() || bounds.top >= innerHeight;
    displayedProgress = paused || reduced.matches || offscreen ? target : displayedProgress + (target - displayedProgress) * (1 - Math.exp(-dt / 65));
    if (Math.abs(target - displayedProgress) < .0005) displayedProgress = target;
    const progress = displayedProgress;
    // One eased timeline owns both the DOM transition and the WebGL scene.
    const reveal = ease(.57, .82, progress);
    hero.style.setProperty('--scene', progress.toFixed(4));
    hero.style.setProperty('--reveal', `${(reveal * 100).toFixed(2)}%`);
    hero.style.setProperty('--intro', (1 - ease(.08, .27, progress)).toFixed(3));
    hero.style.setProperty('--arrival', ease(.65, .82, progress).toFixed(3));
    hero.style.setProperty('--clinic-opacity', reveal.toFixed(4));
    const interlude = ease(.25, .36, progress) * (1 - ease(.51, .62, progress));
    hero.style.setProperty('--interlude', interlude.toFixed(3));
    hero.style.setProperty('--canvas-opacity', '1');
    hero.dataset.sceneProgress = progress.toFixed(4);
    hero.dataset.scrollProgress = target.toFixed(4);
    window.dispatchEvent(new CustomEvent('mds:scene', { detail: { progress, paused, reduced: reduced.matches } }));
    const chapter = progress < .3 ? 0 : progress < .72 ? 1 : 2;
    chapters.forEach((button, index) => {
      button.classList.toggle('is-active', index === chapter);
      button.setAttribute('aria-pressed', String(index === chapter));
    });
    // Invisible interactive content must not remain in the keyboard sequence.
    const copy = hero.querySelector('.hero-copy');
    copy.inert = progress > .26;
    copy.setAttribute('aria-hidden', String(progress > .26));
    hero.querySelector('.hero-arrival').setAttribute('aria-hidden', String(progress < .72));
    hero.querySelector('.hero-interlude')?.setAttribute('aria-hidden', String(interlude < .6));
    if (displayedProgress !== target && !document.hidden) frame = requestAnimationFrame(updateScene);
  }

  function queueScene() {
    if (!frame) frame = requestAnimationFrame(updateScene);
  }

  function syncMotion() {
    root.classList.toggle('motion-ready', !reduced.matches);
    root.classList.toggle('scene-paused', paused);
    if (motionButton) {
      const label = paused ? 'Enable scene motion' : 'Pause scene motion';
      motionButton.setAttribute('aria-label', label);
      motionButton.title = label;
      motionButton.querySelector('img').src = `assets/icons/${paused ? 'play' : 'pause'}.svg`;
    }
    queueScene();
  }

  function goToChapter(index) {
    if (reduced.matches) {
      document.querySelector('#journey')?.scrollIntoView({ behavior: 'instant' });
      return;
    }
    paused = false;
    syncMotion();
    const start = hero.getBoundingClientRect().top + scrollY - headerHeight();
    const distance = hero.offsetHeight - stage.offsetHeight;
    scrollTo({ top: start + distance * [0, .45, .94][index], behavior: 'smooth' });
  }

  chapters.forEach(button => button.addEventListener('click', () => goToChapter(Number(button.dataset.chapter))));
  enterButton?.addEventListener('click', () => goToChapter(2));
  motionButton?.addEventListener('click', () => { paused = !paused; syncMotion(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; syncMotion(); });
  addEventListener('scroll', queueScene, { passive: true });
  addEventListener('resize', queueScene);
  addEventListener('pageshow', queueScene);
  syncMotion();

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  function setMenu(open, restoreFocus = false) {
    if (!menu || !menuButton) return;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menuButton.title = open ? 'Close menu' : 'Open menu';
    menuButton.querySelector('img').src = `assets/icons/${open ? 'x' : 'menu'}.svg`;
    if (restoreFocus) menuButton.focus();
  }
  menuButton?.addEventListener('click', () => setMenu(menu.hidden));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu && !menu.hidden) setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (menu && !menu.hidden && !event.target.closest('.site-header')) setMenu(false);
  });
  matchMedia('(min-width: 681px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

  const records = [
    { title: 'New consultation inquiry', status: 'Captured', description: 'A website form creates an inquiry with the service interest and source attached.', fields: ['Practice website', 'Consultation interest', 'Acknowledge the request'], event: 'Request captured in one place.' },
    { title: 'Assigned to the front desk', status: 'Organized', description: 'GoHighLevel stores the contact and inquiry source, while a notification directs the request to your team.', fields: ['Website inquiry', 'Service and contact details', 'Assigned front desk team'], event: 'A named team member has the next action.' },
    { title: 'Ready for the booking step', status: 'Routed', description: 'Your staff checks the service and appointment type before sharing the appropriate booking path.', fields: ['Staff review', 'Appointment type confirmed', 'Share the booking path'], event: 'Booking follows your practice rules.' },
    { title: 'Follow-up stays on the list', status: 'Connected', description: 'Approved reminders and internal tasks keep the agreed next step visible after booking.', fields: ['Appointment confirmation', 'Contact and inquiry record', 'Reminder and staff handoff'], event: 'Your team can see what happens next.' }
  ];
  const tabs = [...document.querySelectorAll('[data-journey]')];
  function selectJourney(index, focus = false) {
    const record = records[index];
    if (!record) return;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    document.querySelector('#journey-panel').setAttribute('aria-labelledby', `journey-tab-${index}`);
    document.querySelector('[data-record-title]').textContent = record.title;
    document.querySelector('[data-record-status]').textContent = record.status;
    document.querySelector('[data-record-description]').textContent = record.description;
    document.querySelector('[data-record-event]').textContent = record.event;
    record.fields.forEach((value, i) => { document.querySelector(`[data-field="${i}"]`).textContent = value; });
    document.querySelectorAll('.record-timeline span').forEach((line, i) => line.classList.toggle('is-complete', i <= index));
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectJourney(index));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectJourney(next, true); }
    });
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      });
    }, { threshold: .08 });
    reveals.forEach(element => observer.observe(element));
  } else {
    reveals.forEach(element => element.classList.add('in-view'));
  }
})();
