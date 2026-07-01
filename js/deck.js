// Home deck: draggable, physics-based gallery of featured projects.
(function () {
  const vp = document.getElementById('deckVp');
  const track = document.getElementById('deckTrack');
  const bar = document.getElementById('deckBar');
  if (!vp || !track) return;

  const featured = window.PROJECTS.filter(p => p.featured).slice(0, 5);
  const cards = featured.map((p) => {
    const el = document.createElement('div');
    el.className = 'deck-card';
    el.innerHTML =
      '<div class="art" style="' + window.projectArt(p) + '"></div>' +
      '<div class="meta"><div class="k">' + p.k + '</div><div class="t">' + p.t + '</div></div>';
    track.appendChild(el);
    return el;
  });

  const GAP = 32;
  let pos = 0, vel = 0;
  let dragging = false, lastX = 0;
  let minPos = 0, maxPos = 0, cardW = 0;
  let interacted = false, driftDir = -1;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function measure() {
    if (!cards.length) return;
    cardW = cards[0].offsetWidth + GAP;
    const center = vp.offsetWidth / 2 - cards[0].offsetWidth / 2;
    maxPos = center;
    minPos = center - cardW * (cards.length - 1);
    pos = Math.min(Math.max(pos, minPos), maxPos);
  }

  function applyTransforms() {
    const vpCenter = vp.offsetWidth / 2;
    cards.forEach((c, i) => {
      const cardCenter = pos + i * cardW + c.offsetWidth / 2;
      const dx = cardCenter - vpCenter;
      const norm = Math.max(-1.4, Math.min(1.4, dx / (vp.offsetWidth * 0.55)));
      const scale = 1 - Math.min(Math.abs(norm), 1) * 0.12;
      const op = 1 - Math.min(Math.abs(norm), 1) * 0.35;
      c.style.transform = 'translateX(' + (pos + i * cardW) + 'px) scale(' + scale + ')';
      c.style.opacity = op.toFixed(3);
      c.style.zIndex = String(100 - Math.round(Math.abs(dx) / 10));
    });
    const range = (maxPos - minPos) || 1;
    const prog = Math.min(1, Math.max(0, (maxPos - pos) / range));
    bar.style.transform = 'translateX(' + (prog * 316) + '%)';
  }

  function loop() {
    if (!dragging) {
      // Gentle auto-drift until first interaction, so the deck reads as alive.
      if (!interacted && !reduceMotion) {
        pos += driftDir * 0.35;
        if (pos <= minPos) driftDir = 1;
        if (pos >= maxPos) driftDir = -1;
      } else {
        vel *= 0.92;
        pos += vel;
        if (pos > maxPos) { pos += (maxPos - pos) * 0.12; vel *= 0.6; }
        if (pos < minPos) { pos += (minPos - pos) * 0.12; vel *= 0.6; }
        if (Math.abs(vel) < 0.01) vel = 0;
      }
    }
    applyTransforms();
    requestAnimationFrame(loop);
  }

  function pointerX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }
  function onDown(e) { dragging = true; interacted = true; lastX = pointerX(e); vel = 0; vp.classList.add('dragging'); }
  function onMove(e) {
    if (!dragging) return;
    const x = pointerX(e); const dx = x - lastX; lastX = x;
    pos += dx; vel = dx;
    if (pos > maxPos) pos = maxPos + (pos - maxPos) * 0.4;
    if (pos < minPos) pos = minPos + (pos - minPos) * 0.4;
  }
  function onUp() { dragging = false; vp.classList.remove('dragging'); }

  vp.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  vp.addEventListener('touchstart', onDown, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('touchend', onUp);
  vp.addEventListener('wheel', (e) => {
    e.preventDefault();
    interacted = true;
    pos -= (e.deltaY + e.deltaX) * 0.6;
    vel = -(e.deltaY) * 0.25;
    pos = Math.min(Math.max(pos, minPos - 80), maxPos + 80);
  }, { passive: false });

  // Tabs.js calls this when Home becomes visible (hidden elements measure as 0).
  window.deckMeasure = function () { measure(); applyTransforms(); };
  window.addEventListener('resize', measure);

  measure();
  pos = maxPos; // start with the first card centered
  loop();
})();
