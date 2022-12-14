let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
window.addEventListener('scroll', function () {
  let value = window.scrollY;

  k1.style.top = wysokosc - value * 1.3 + 'px';
  k2.style.top = value * 2 + 'px';

  k3.style.top = (wysokosc / (value + 1)) * 40 + 'vh';
  k4.style.top = (wysokosc / (value + 1)) * 300 - 300 + 'vh';
  k5.style.left = value * 0.1 + 20 + '%';
 
  //console.log(k3.style.top);
  //console.log(value);
  //console.log(wysokosc);
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
