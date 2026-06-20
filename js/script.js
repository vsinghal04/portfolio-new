
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll nav style
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  let menuOpen = false;

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    iconMenu.style.display = menuOpen ? 'none' : 'block';
    iconClose.style.display = menuOpen ? 'block' : 'none';
  });

  function closeMobile() {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    iconMenu.style.display = 'block';
    iconClose.style.display = 'none';
  }


  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  // Trigger hero elements immediately
  setTimeout(() => {
    document.querySelectorAll('#hero .fade-up').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
