const changeToggle = document.querySelector('#flexSwitchCheckDefault');
const bodyBkg = document.querySelector('main');
const navBkg = document.querySelector('nav');

changeToggle.addEventListener('change', function() {
  if (this.checked) {
    bodyBkg.classList.add('dark-theme');
    navBkg.classList.remove('navbar-light');
    navBkg.classList.add('navbar-dark');
    navBkg.classList.remove('bg-light');
    navBkg.classList.add('bg-dark');
  } else {
    bodyBkg.classList.remove('dark-theme');
    navBkg.classList.add('navbar-light');
    navBkg.classList.remove('navbar-dark');
    navBkg.classList.add('bg-light');
    navBkg.classList.remove('bg-dark');
  }
});
