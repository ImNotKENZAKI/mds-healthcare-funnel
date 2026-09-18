(() => {
  'use strict';
  const panel = document.querySelector('.journey-panel');
  let reset;
  const title = panel?.querySelector('[data-record-title]');
  if (title) new MutationObserver(() => {
    panel.classList.remove('is-updating');
    void panel.offsetWidth;
    panel.classList.add('is-updating');
    clearTimeout(reset);
    reset = setTimeout(() => panel.classList.remove('is-updating'), 700);
  }).observe(title, { childList: true });

  const map = document.querySelector('.connection-map');
  if (!map) return;
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace,'svg');
  svg.setAttribute('aria-hidden','true');
  map.prepend(svg);
  map.classList.add('has-live-paths');
  function drawPaths() {
    const bounds = map.getBoundingClientRect();
    const anchor = (selector, edge) => {
      const element = typeof selector === 'string' ? map.querySelector(selector) : selector;
      const rect = element.getBoundingClientRect();
      return { x: rect.left + rect.width / 2 - bounds.left, y: (edge === 'top' ? rect.top : rect.bottom) - bounds.top };
    };
    const source = anchor('.connection-source','bottom');
    const top = anchor('.connection-hub','top');
    const bottom = anchor('.connection-hub','bottom');
    const paths = [`M ${source.x} ${source.y + 7} L ${top.x} ${top.y}`];
    map.querySelectorAll('.connection-branches > div').forEach(element => {
      const destination = anchor(element,'top');
      const mid = (bottom.y+destination.y)/2;
      paths.push(`M ${bottom.x} ${bottom.y} L ${bottom.x} ${mid-5} Q ${bottom.x} ${mid} ${bottom.x+(destination.x-bottom.x)*.15} ${mid} L ${destination.x-(destination.x-bottom.x)*.15} ${mid} Q ${destination.x} ${mid} ${destination.x} ${mid+5} L ${destination.x} ${destination.y-5}`);
    });
    svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
    svg.replaceChildren();
    paths.forEach(data => {
      ['network-base','network-signal'].forEach(className => {
        const line = document.createElementNS(namespace,'path');
        line.setAttribute('d',data);
        line.setAttribute('class',className);
        line.setAttribute('pathLength','100');
        svg.append(line);
      });
    });
  }
  new ResizeObserver(drawPaths).observe(map);
  let visible = false;
  const sync = () => map.classList.toggle('is-network-visible',visible && !document.hidden);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(map);
  document.addEventListener('visibilitychange',sync);
  drawPaths();
})();
