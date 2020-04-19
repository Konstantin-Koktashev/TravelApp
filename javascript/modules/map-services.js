'use stirct'
const apiKey=AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI
window.addEventListener('load', onInit)

function onInit(){
    bindEvents()
    
}

function bindEvents() {
    document.querySelector('.go-to-location').addEventListener('click', onSearchLocation);
    document.querySelector('.my-location').addEventListener('click', getMyLocation);
    document.querySelector('.copy').addEventListener('click', onCopyLocationValue);
}