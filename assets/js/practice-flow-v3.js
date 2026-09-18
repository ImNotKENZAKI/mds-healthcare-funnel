(() => {
  'use strict';
  const storageKey = 'mds-medical-practice-preview';
  let brief = {};
  try { brief = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch { brief = {}; }
  if (!brief || typeof brief !== 'object' || Array.isArray(brief)) brief = {};
  const params = new URLSearchParams(location.search);
  ['practice', 'specialty', 'booking', 'project'].forEach(key => {
    if (params.has(key)) brief[key] = params.get(key).slice(0, 150);
  });
  function save(values) {
    brief = { ...brief, ...values };
    try { sessionStorage.setItem(storageKey, JSON.stringify(brief)); } catch { /* The preview can continue without browser storage. */ }
  }
  const startForm = document.querySelector('[data-practice-start]');
  if (startForm) {
    ['practice', 'specialty', 'booking', 'project'].forEach(key => {
      if (typeof brief[key] === 'string' && startForm.elements.namedItem(key)) startForm.elements.namedItem(key).value = brief[key];
    });
  }
  startForm?.addEventListener('submit', event => {
    event.preventDefault();
    save(Object.fromEntries(new FormData(event.currentTarget)));
    location.assign('step-2.html');
  });
  document.querySelectorAll('[data-practice-name]').forEach(element => {
    if (brief.practice) element.textContent = String(brief.practice);
  });
  const detailForm = document.querySelector('[data-practice-details]');
  const dialog = document.querySelector('[data-consultation-dialog]');
  const openButton = document.querySelector('[data-booking-open]');
  function complete() {
    document.querySelector('[data-audit-form-state]')?.setAttribute('hidden', '');
    document.querySelector('[data-audit-complete]')?.removeAttribute('hidden');
    document.querySelector('[data-progress-audit]')?.removeAttribute('aria-current');
    document.querySelector('[data-progress-booking]')?.setAttribute('aria-current', 'step');
    openButton?.focus();
    if (dialog && !dialog.open) dialog.showModal();
  }
  detailForm?.addEventListener('submit', event => {
    event.preventDefault();
    save({ ...Object.fromEntries(new FormData(detailForm)), complete: true });
    complete();
  });
  if (detailForm) {
    detailForm.querySelector('button[type="submit"]').disabled = false;
    ['contact_name', 'contact_email', 'source', 'booking_method', 'friction'].forEach(key => {
      if (typeof brief[key] === 'string' && detailForm.elements.namedItem(key)) detailForm.elements.namedItem(key).value = brief[key];
    });
  }
  openButton?.addEventListener('click', () => { if (dialog && !dialog.open) dialog.showModal(); });
  document.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  } });
  dialog?.addEventListener('close', () => openButton?.focus());
  if (detailForm && params.get('review') === 'complete') complete();
  document.querySelectorAll('[data-brief]').forEach(element => {
    const value = brief[element.dataset.brief];
    element.textContent = typeof value === 'string' && value ? value : (element.dataset.brief === 'practice' ? 'Your practice' : 'Not provided');
  });
  document.querySelector('[data-clear-brief]')?.addEventListener('click', () => {
    try { sessionStorage.removeItem(storageKey); } catch { /* No stored data to clear. */ }
  });
})();
