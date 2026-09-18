(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const blueprint = document.querySelector('.practice-blueprint');
  const tabs = [...document.querySelectorAll('[data-system]')];
  const descriptions = {
    website: ['A considered first impression', 'Specialty-led pages, clear service information and an inquiry path designed for your practice.'],
    crm: ['A clearer handoff for your team', 'Bring business inquiries into an agreed pipeline, with ownership and follow-up steps your staff can use.'],
    booking: ['A more connected booking process', 'Map appointment requests, calendar routing and reminders around the way your practice works.']
  };
  function selectSystem(key, focus = false) {
    if (!blueprint || !descriptions[key]) return;
    tabs.forEach(tab => {
      const selected = tab.dataset.system === key;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    document.querySelector('[data-system-title]').textContent = descriptions[key][0];
    document.querySelector('[data-system-copy]').textContent = descriptions[key][1];
    document.querySelector('#system-description').setAttribute('aria-labelledby', 'system-' + key);
    blueprint.dataset.active = key;
    if (!reduced.matches && !document.hidden) {
      blueprint.querySelector('.blueprint-signal i').animate([
        { transform: 'translateX(-100%)', opacity: 0 },
        { opacity: 1, offset: .25 },
        { transform: 'translateX(400%)', opacity: 0 }
      ], { duration: 850, easing: 'ease-in-out' });
    }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectSystem(tab.dataset.system));
    tab.addEventListener('keydown', event => {
      const next = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
      if (next !== undefined) { event.preventDefault(); selectSystem(tabs[next].dataset.system, true); }
    });
  });
  const form = document.querySelector('[data-practice-details]');
  if (form) {
    const fields = [...form.querySelectorAll('[required]')];
    const progress = document.querySelector('.brief-readiness');
    const update = () => {
      const valid = fields.filter(field => field.value.trim() && field.validity.valid).length;
      const value = Math.round(valid / fields.length * 100);
      progress.setAttribute('aria-valuenow', value);
      progress.style.setProperty('--completion', value + '%');
      document.querySelector('[data-readiness]').textContent = valid === fields.length ? 'Ready to review' : valid ? 'Taking shape' : 'Build your brief';
    };
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('focusin', event => {
      const key = { source: 'website', contact_name: 'crm', contact_email: 'crm', booking_method: 'booking' }[event.target.name];
      if (key) selectSystem(key);
    });
    update();
  }
  const download = document.querySelector('[data-download-brief]');
  if (download) {
    download.hidden = false;
    download.addEventListener('click', () => {
      const labels = { practice: 'Practice', specialty: 'Specialty', project: 'Project priority', contact_name: 'Project lead', contact_email: 'Work email', source: 'Inquiry source', booking_method: 'Appointment process', friction: 'Project requirements' };
      const lines = ['MARY DIGI SOLUTIONS', 'Medical practice project brief', 'LOCAL DRAFT - Not submitted. No consultation booked.', ''];
      Object.entries(labels).forEach(([key, label]) => {
        lines.push(label + ': ' + (document.querySelector('[data-brief="' + key + '"]')?.textContent || 'Not provided'), '');
      });
      const url = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url; link.download = 'MDS-practice-project-brief.txt';
      document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }
  // Motion is a one-time material reveal, never a delay in the form workflow.
  if (!reduced.matches) {
    document.querySelector('.project-summary')?.animate([
      { opacity: .4, transform: 'translateY(12px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 650, easing: 'ease-out' });
  }
})();
