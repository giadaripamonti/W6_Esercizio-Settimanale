const changeToggle = document.querySelector('#flexSwitchCheckDefault');
const bodyBkg = document.querySelector('body');
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon')

changeToggle.addEventListener('change', function() {
  if (this.checked) {
    bodyBkg.style.backgroundColor = '#343a40';
    moon.style.visibility = 'visible';
    sun.style.visibility = 'hidden';
  } else {
    bodyBkg.style.backgroundColor = 'white';
    moon.style.visibility = 'hidden';
    sun.style.visibility = 'visible';
  }
});
