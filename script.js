let wysokosc = window.innerHeight;
let szerokosc = window.innerWidth;
window.addEventListener('scroll', function() {
let value = window.scrollY;

k1.style.top = wysokosc - value *0.7 + 'px';
k2.style.top = value * 2 + 'px';

k3.style.top = wysokosc / (value +1) * 100 + 50 + 'vh';
console.log(k3.style.top);
console.log(value);
console.log(wysokosc);



})
