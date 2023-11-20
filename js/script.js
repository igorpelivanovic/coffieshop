var map = L.map('map').setView([40.741770, -73.983090], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'data/map-icon.png',
});
L.marker([40.741770, -73.983090], {icon: greenIcon}).addTo(map);


let header = document.querySelector("#header");
let scroll = window.pageYOffset;

window.addEventListener('load', checkScroll)
document.addEventListener('scroll', checkScroll)

function checkScroll(){
    if(window.scrollY >= window.innerHeight - header.offsetHeight ){
        header.classList.add("position-fixed");
        header.classList.remove("position-absolute");
        
    }else{
        header.classList.replace("position-fixed", "position-absolute");
    }
    scroll = window.pageYOffset;
}