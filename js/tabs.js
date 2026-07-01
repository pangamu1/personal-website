// Section switching + bottom bar visibility + [data-goto] navigation.
(function () {
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.section');
  const bottomBar = document.getElementById('bottomBar');

  function activate(name) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    sections.forEach(s => s.classList.remove('active'));
    const sec = document.getElementById(name);
    void sec.offsetWidth; // restart reveal animations
    sec.classList.add('active');
    bottomBar.classList.toggle('hidden', name !== 'home');
    if (name === 'home' && window.deckMeasure) {
      setTimeout(window.deckMeasure, 40); // wait for layout so widths are real
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.tab)));
  document.querySelectorAll('[data-goto]').forEach(el =>
    el.addEventListener('click', () => activate(el.dataset.goto)));
})();
