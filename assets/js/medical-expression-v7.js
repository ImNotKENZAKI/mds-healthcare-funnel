(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const windows = [...document.querySelectorAll('[data-image-motion]')];
  const art = document.querySelector('.project-art');
  const ribbon = document.querySelector('.service-ribbon');
  const ribbonButton = document.querySelector('.ribbon-toggle');
  const pageButton = document.querySelector('.page-motion-toggle');
  const visibleImages = new Set();
  const entrances = new Set();
  let pagePaused = false;
  let ribbonPaused = false;
  let ribbonVisible = false;
  let ribbonAnimation;
  let artAnimation;
  let artVisible = false;
  let scrollFrame = 0;
  const stopped = () => reduced.matches || pagePaused || root.classList.contains('scene-paused');
  const canMove = () => !stopped() && !document.hidden;
  const clamp = value => Math.max(0, Math.min(1, value));

  function imageFrame() {
    scrollFrame = 0;
    visibleImages.forEach(window => {
      const img = window.querySelector('img');
      if (!canMove()) { img.style.transform = ''; return; }
      const rect = window.getBoundingClientRect();
      const progress = clamp((innerHeight - rect.top) / (innerHeight + rect.height));
      const shift = (progress - .5) * rect.height * .06;
      img.style.transform = 'translateY(' + shift.toFixed(2) + 'px) scale(1.1)';
    });
  }
  function queueImages() {
    if (!scrollFrame && canMove()) scrollFrame = requestAnimationFrame(imageFrame);
  }
  function playVisible(animation, visible, extraPause = false) {
    if (!animation) return;
    if (canMove() && visible && !extraPause) animation.play();
    else animation.pause();
  }
  function sync() {
    const off = stopped();
    playVisible(ribbonAnimation, ribbonVisible, ribbonPaused);
    playVisible(artAnimation, artVisible);
    if (off) {
      entrances.forEach(animation => animation.cancel());
      entrances.clear();
      windows.forEach(window => { window.querySelector('img').style.transform = ''; });
      if (artAnimation) artAnimation.currentTime = 0;
      if (ribbonAnimation && reduced.matches) ribbonAnimation.currentTime = 0;
    }
    entrances.forEach(animation => { if (canMove()) animation.play(); else animation.pause(); });
    if (ribbonButton) {
      ribbonButton.hidden = reduced.matches;
      const paused = off || ribbonPaused;
      const label = paused ? 'Resume scrolling text' : 'Pause scrolling text';
      ribbonButton.setAttribute('aria-label', label);
      ribbonButton.title = label;
      ribbonButton.setAttribute('aria-pressed', String(paused));
      ribbonButton.querySelector('img').src = 'assets/icons/' + (paused ? 'play' : 'pause') + '.svg';
    }
    if (pageButton) {
      pageButton.hidden = reduced.matches;
      const label = pagePaused ? 'Resume page motion' : 'Pause page motion';
      pageButton.setAttribute('aria-label', label);
      pageButton.title = label;
      pageButton.setAttribute('aria-pressed', String(pagePaused));
      pageButton.querySelector('img').src = 'assets/icons/' + (pagePaused ? 'play' : 'pause') + '.svg';
    }
    queueImages();
  }
  function entrance(element, frames, options) {
    if (!canMove()) return;
    const animation = element.animate(frames, options);
    entrances.add(animation);
    animation.finished.then(() => entrances.delete(animation), () => entrances.delete(animation));
  }

  // Native observers keep below-the-fold graphics out of the animation workload.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === ribbon) ribbonVisible = entry.isIntersecting;
      else if (entry.target === art) artVisible = entry.isIntersecting;
      else if (entry.target.matches('[data-image-motion]')) {
        if (entry.isIntersecting) {
          visibleImages.add(entry.target);
          if (!entry.target.dataset.entered) {
            entry.target.dataset.entered = 'true';
            entrance(entry.target, [{ clipPath: 'inset(10% 7% 10% 7%)' }, { clipPath: 'inset(0% 0% 0% 0%)' }], { duration: 1100, easing: 'cubic-bezier(.2,.7,.2,1)' });
          }
        } else visibleImages.delete(entry.target);
      } else if (entry.isIntersecting) {
        entry.target.querySelectorAll('.text-word > span').forEach((word, index) => {
          entrance(word, [{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], { duration: 850, delay: Math.min(index * 55, 550), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
        });
        observer.unobserve(entry.target);
      }
    });
    sync();
  }, { threshold: .12 });
  windows.forEach(window => observer.observe(window));
  document.querySelectorAll('.practice-problem h2, .offer-heading h2, .content-copy h2, .process-heading h2, .audit-copy h2, .project-intro h1').forEach(heading => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (!part.trim()) { fragment.append(document.createTextNode(part)); return; }
        const outer = document.createElement('span');
        const inner = document.createElement('span');
        outer.className = 'text-word';
        inner.textContent = part;
        outer.append(inner); fragment.append(outer);
      });
      node.replaceWith(fragment);
    });
    observer.observe(heading);
  });
  if (ribbon) {
    ribbon.classList.add('is-animated');
    const track = ribbon.querySelector('.ribbon-track');
    const group = ribbon.querySelector('.ribbon-group');
    function sizeRibbon() {
      const width = group.getBoundingClientRect().width;
      const frames = [{ transform: 'translateX(0)' }, { transform: 'translateX(-' + width + 'px)' }];
      if (!ribbonAnimation) {
        ribbonAnimation = track.animate(frames, { duration: width / 48 * 1000, iterations: Infinity, easing: 'linear' });
      } else {
        ribbonAnimation.effect.setKeyframes(frames);
        ribbonAnimation.effect.updateTiming({ duration: width / 48 * 1000 });
      }
      sync();
    }
    new ResizeObserver(sizeRibbon).observe(group);
    observer.observe(ribbon);
    sizeRibbon();
    ribbonButton.addEventListener('click', () => {
      if (root.classList.contains('scene-paused')) {
        ribbonPaused = false;
        document.querySelector('.motion-toggle')?.click();
      } else ribbonPaused = !ribbonPaused;
      sync();
    });
  }
  if (art) {
    artAnimation = art.animate([
      { transform: 'translateY(0) rotate(0deg)' },
      { transform: 'translateY(-9px) rotate(.7deg)' },
      { transform: 'translateY(0) rotate(0deg)' }
    ], { duration: 5600, iterations: Infinity, easing: 'ease-in-out' });
    observer.observe(art);
  }
  pageButton?.addEventListener('click', () => { pagePaused = !pagePaused; sync(); });
  reduced.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  addEventListener('scroll', queueImages, { passive: true });
  addEventListener('resize', queueImages);
  new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['class'] });
  sync();
})();
