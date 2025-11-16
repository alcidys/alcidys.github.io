document.addEventListener('DOMContentLoaded', function () {
  /* ---------------- TRANSIÇÃO SUAVE ENTRE TELAS ---------------- */
  document.body.classList.add('is-ready');

  const navLinks = document.querySelectorAll('a.js-nav');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const href = link.getAttribute('href');

      if (!href || href.startsWith('http') || href.startsWith('#')) return;

      event.preventDefault();
      document.body.classList.add('is-leaving');

      setTimeout(function () {
        window.location.href = href;
      }, 250);
    });
  });
});