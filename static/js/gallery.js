(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canHover = window.matchMedia('(hover: hover)');

  for (const carousel of document.querySelectorAll('[data-carousel]')) {
    const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
    if (slides.length < 2) continue;

    const controls = carousel.querySelector('[data-carousel-controls]');
    const previous = controls.querySelector('[data-carousel-previous]');
    const next = controls.querySelector('[data-carousel-next]');
    const pause = controls.querySelector('[data-carousel-pause]');
    const dots = [...controls.querySelectorAll('[data-carousel-dot]')];
    const announcement = carousel.querySelector('[data-carousel-announcement]');
    const interval = Number(carousel.dataset.carousel);
    let current = 0;
    let timer;
    let paused = reducedMotion.matches;
    let hovered = canHover.matches && carousel.matches(':hover');
    let touching = null;
    let stopTransition = () => {};

    function schedule() {
      window.clearTimeout(timer);
      if (paused || hovered || touching || carousel.contains(document.activeElement) || document.hidden) return;
      timer = window.setTimeout(() => move(1, false), interval);
    }

    function show(index) {
      slides.forEach((slide, position) => { slide.inert = position !== index; });
      dots.forEach((dot, position) => { dot.setAttribute('aria-current', String(position === index)); });
      const frame = slides[index].querySelector('[data-carousel-swipe]');
      controls.style.setProperty('--wing-photo-ratio', frame.style.getPropertyValue('--wing-photo-ratio'));
    }

    function slideBetween(outgoing, incoming, direction) {
      outgoing.classList.add('wing-carousel-leaving');
      carousel.classList.add('wing-carousel-sliding');
      const options = { duration: 340, easing: 'ease-in-out', fill: 'both' };
      const leave = outgoing.animate([
        { transform: 'translateX(0)' },
        { transform: `translateX(${-direction * 100}%)` },
      ], options);
      const enter = incoming.animate([
        { transform: `translateX(${direction * 100}%)` },
        { transform: 'translateX(0)' },
      ], options);

      stopTransition = () => {
        enter.onfinish = null;
        enter.cancel();
        leave.cancel();
        outgoing.classList.remove('wing-carousel-leaving');
        carousel.classList.remove('wing-carousel-sliding');
        stopTransition = () => {};
      };
      enter.onfinish = stopTransition;
    }

    function select(index, announce, direction = Math.sign(index - current)) {
      if (index === current) return;
      stopTransition();
      const outgoing = slides[current];
      if (outgoing.contains(document.activeElement)) {
        dots[index].focus({ preventScroll: true });
      }
      current = index;
      show(current);
      if (!reducedMotion.matches) slideBetween(outgoing, slides[current], direction);
      if (announce) {
        const caption = slides[current].querySelector('[data-carousel-caption]').textContent.trim();
        announcement.textContent = `Photo ${current + 1} of ${slides.length}. ${caption}`;
      }
      schedule();
    }

    function move(direction, announce = true) {
      select((current + direction + slides.length) % slides.length, announce, direction);
    }

    function updatePause() {
      pause.textContent = paused ? 'Play' : 'Pause';
      pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      schedule();
    }

    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    dots.forEach((dot, index) => { dot.addEventListener('click', () => select(index, true)); });
    pause.addEventListener('click', () => {
      paused = !paused;
      updatePause();
    });
    carousel.addEventListener('keydown', (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    });
    carousel.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'touch') return;
      hovered = true;
      schedule();
    });
    carousel.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'touch') return;
      hovered = false;
      schedule();
    });
    carousel.addEventListener('focusin', schedule);
    carousel.addEventListener('focusout', () => window.setTimeout(schedule, 0));
    document.addEventListener('visibilitychange', schedule);
    reducedMotion.addEventListener('change', (event) => {
      if (event.matches) {
        stopTransition();
        paused = true;
        updatePause();
      }
    });

    carousel.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'touch' || !event.isPrimary || !event.target.closest('[data-carousel-swipe]')) return;
      touching = { id: event.pointerId, x: event.clientX, y: event.clientY };
      schedule();
    });
    carousel.addEventListener('pointerup', (event) => {
      if (touching?.id !== event.pointerId) return;
      const dx = event.clientX - touching.x;
      const dy = event.clientY - touching.y;
      touching = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        move(dx > 0 ? -1 : 1);
      } else {
        schedule();
      }
    });
    carousel.addEventListener('pointercancel', (event) => {
      if (touching?.id !== event.pointerId) return;
      touching = null;
      schedule();
    });

    show(current);
    carousel.classList.add('wing-carousel-ready');
    controls.hidden = false;
    updatePause();
  }
})();
