document.addEventListener('DOMContentLoaded', function () {

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
  const formNome = document.querySelector('#form-nome');
  const inputNome = document.querySelector('#nome');

  if (formNome && inputNome) {
    // preencher o campo se já tiver salvo
    const nomeSalvo = localStorage.getItem('userName');
    if (nomeSalvo) {
      inputNome.value = nomeSalvo;
    }

    formNome.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = inputNome.value.trim();
      localStorage.setItem('userName', nome);

      alert('Name saved!');
    });
  }
});