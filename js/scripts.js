window.addEventListener('DOMContentLoaded', event => {
  const sidebarWrapper = document.getElementById('sidebar-wrapper');
  let scrollToTopVisible = false;
  
  const menuToggle = document.body.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', event => {
      event.preventDefault();
      sidebarWrapper.classList.toggle('active');
      _toggleMenuIcon();
      menuToggle.classList.toggle('active');
  })

    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
      scrollTrigger.addEventListener('click', () => {
        sidebarWrapper.classList.remove('active');
        menuToggle.classList.remove('active');
        _toggleMenuIcon();
      })
    });

    function _toggleMenuIcon() {
      const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
      const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
      if (menuToggleBars) {
        menuToggleBars.classList.remove('fa-bars');
        menuToggleBars.classList.add('fa-times');
      }
      if (menuToggleTimes) {
        menuToggleTimes.classList.remove('fa-times');
        menuToggleTimes.classList.add('fa-bars');
      }
    }

  // Desplazarse hasta el botón superior aparece
    document.addEventListener('scroll', () => {
      const scrollToTop = document.body.querySelector('.scroll-to-top');
      if (document.documentElement.scrollTop > 100) {
        if (!scrollToTopVisible) {
            fadeIn(scrollToTop);
            scrollToTopVisible = true;
        }
      } else {
        if (scrollToTopVisible) {
            fadeOut(scrollToTop);
            scrollToTopVisible = false;
        }
      }
    })
})

window.addEventListener('scroll', function() {
  let imagenes = document.querySelectorAll('.imgAnimate')  
  let imagen = document.getElementById('imgAnimates')  
  let posicionObj = imagen.getBoundingClientRect().top
  let tamanoDePantalla = window.innerHeight / 2.5
  if ( posicionObj < tamanoDePantalla ) {
    imagenes.forEach(image => {
      image.classList.remove("imgAnimate")
      image.style.animation = 'mover 1s ease-out'
    })
  }
  
})

function fadeOut(el) {
  el.style.opacity = 2;
  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
    }
  })();
};