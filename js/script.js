var map = L.map('map').setView([40.741770, -73.983090], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'data/map-icon.png',
});
L.marker([40.741770, -73.983090], {icon: greenIcon}).addTo(map);
let header = document.querySelector(".header");
let scrooly = window.pageYOffset;
document.addEventListener("scroll", function(){
    if(window.scrollY >= window.innerHeight){
        
        header.classList.add("fixed");
        header.classList.remove("absolute");
        if(scrooly > window.pageYOffset){
            header.classList.add("transform");
        }else{
            header.classList.remove("transform");
        }
    }else{
        header.classList.remove("transform");
        header.classList.replace("fixed", "absolute");
    }
    scrooly = window.pageYOffset;
})
