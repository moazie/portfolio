const element1 = document.querySelector('.cdt');
const element2 = document.querySelector('.cdt1');

function checkIntersection() {
  if(element1.getBoundingClientRect().intersects(element2.getBoundingClientRect())) {
    element1.classList.add('intersecting');
    element2.classList.add('intersecting');
  } else {
    element1.classList.remove('intersecting');
    element2.classList.remove('intersecting'); 
  }
}

// Check on load and on window resize
window.addEventListener('load', checkIntersection);
window.addEventListener('resize', checkIntersection);