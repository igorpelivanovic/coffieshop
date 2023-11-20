"use strict";

var map = L.map('map').setView([40.741770, -73.983090], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var greenIcon = L.icon({
  iconUrl: 'data/map-icon.png'
});
L.marker([40.741770, -73.983090], {
  icon: greenIcon
}).addTo(map);
var header = document.querySelector(".header");
var scroll = window.pageYOffset;
window.addEventListener('load', checkScroll());
document.addEventListener('scroll', checkScroll());

function checkScroll() {
  if (window.scrollY >= window.innerHeight) {
    header.classList.add("fixed");
    header.classList.remove("absolute");
  } else {
    header.classList.replace("fixed", "absolute");
  }

  scroll = window.pageYOffset;
}