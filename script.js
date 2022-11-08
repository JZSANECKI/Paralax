let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
window.addEventListener('scroll', function() {
let value = window.scrollY;
console.log(value);
console.log(wysokosc);
k1.style.top = wysokosc - value * 0.3  +'px';
k2.style.top = value * 2 + 'px';
k2.style.opacity = 100 - value * 0.3 + '%';
k3.style.top = wysokosc - value + 'px';




})
