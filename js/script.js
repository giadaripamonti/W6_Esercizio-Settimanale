const changeToggle = document.querySelector('#flexSwitchCheckDefault');
const bodyBkg = document.querySelector('main');
const navBkg = document.querySelector('nav');
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon')

changeToggle.addEventListener('change', function() {
  if (this.checked) {
    bodyBkg.classList.add('dark-theme');
    navBkg.classList.remove('navbar-light');
    navBkg.classList.add('navbar-dark');
    navBkg.classList.remove('bg-light');
    navBkg.classList.add('bg-dark');
    moon.style.visibility = 'visible';
    sun.style.visibility = 'hidden';
  } else {
    bodyBkg.classList.remove('dark-theme');
    navBkg.classList.add('navbar-light');
    navBkg.classList.remove('navbar-dark');
    navBkg.classList.add('bg-light');
    navBkg.classList.remove('bg-dark');
    moon.style.visibility = 'hidden';
    sun.style.visibility = 'visible';
    
  }
});
