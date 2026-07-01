// Soft light halo that trails the native cursor — no custom pointer.
(function () {
  const glow = document.getElementById('cursorGlow');
  if (!glow || matchMedia('(pointer: coarse)').matches) return;

  let mx = innerWidth / 2, my = innerHeight / 2;
  let gx = mx, gy = my;
  let visible = false;

  glow.style.opacity = '0';
  glow.style.transition = 'opacity .5s';

  addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (!visible) { visible = true; glow.style.opacity = '1'; }
  });
  document.addEventListener('mouseleave', () => { visible = false; glow.style.opacity = '0'; });

  (function follow() {
    gx += (mx - gx) * 0.14;
    gy += (my - gy) * 0.14;
    glow.style.left = gx + 'px';
    glow.style.top = gy + 'px';
    requestAnimationFrame(follow);
  })();
})();
