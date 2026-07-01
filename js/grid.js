// Projects page: static grid — large thumbnail, title, brief. No motion.
(function () {
  const grid = document.getElementById('projGrid');
  if (!grid) return;

  window.PROJECTS.forEach((p) => {
    const card = document.createElement('a');
    card.className = 'proj-card';
    card.href = '#';
    card.innerHTML =
      '<div class="proj-thumb"><div class="art" style="' + window.projectArt(p) + '"></div></div>' +
      '<div class="proj-title">' + p.t + '</div>' +
      '<div class="proj-brief">' + p.d + '</div>';
    grid.appendChild(card);
  });
})();
