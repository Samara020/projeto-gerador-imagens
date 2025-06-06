    window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrosel-imagens');
    const slides = document.querySelectorAll('.carrosel-imagens img');
    if (track) {
      track.innerHTML += track.innerHTML;
      const allSlides = track.querySelectorAll('img');
      let index = 0;
      function nextSlide() {
        index = (index + 1) % allSlides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        track.style.transition = 'transform 0.5s ease-in-out';
      }
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      setInterval(() => {
        if (index >= allSlides.length / 2) {
          track.style.transition = 'none';
          index = 0;
          track.style.transform = `translateX(0)`;
          void track.offsetWidth;
          track.style.transition = 'transform 0.5s ease-in-out';
          index++;
          track.style.transform = `translateX(-${index * 100}%)`;
        } else {
          nextSlide();
        }
      }, 3000);
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu');
    const navMenu = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '✖';
        } else {
            menuToggle.textContent = '☰';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.querySelector('form');
  const inputDescricao = document.getElementById('descricao');
  const carregando = document.getElementById('carregando');
  formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      const descricao = inputDescricao.value.trim();
      if(descricao === "") {
          alert('Por favor, descreva a imagem.');
      } else {
          carregando.style.display = 'block'; 
          setTimeout(() => {
              carregando.style.display = 'none'; 
              alert(`Imagem gerada`);
              formulario.reset();
          }, 3000);
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', function (e) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    if (!nome || !email || !mensagem) {
      alert('Por favor, preenche todos os campos.');
      e.preventDefault(); 
      return;
    } else{
      alert('Mensagem enviada.')
      formulario.reset();
    }
  });
});
