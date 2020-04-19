import {mapServices} from './modules/map-services.js';

window.addEventListener('load', onInit)

function onInit(){
    bindEvents()
    renderMap()
    

}


function bindEvents() {
    document.querySelector('.hit-search-btn').addEventListener('click', onSearchLocation);
    document.querySelector('.my-location-btn').addEventListener('click', getUserLocation);
    document.querySelector('.copy').addEventListener('click', onCopyLocationValue);
}

function renderMap(){
    mapServices.initMap()
}

function onSearchLocation(){
    var value=document.querySelector('nav input').value
}


function getUserLocation(){
    mapServices.getMyLocation()
}
function onCopyLocationValue(){
    console.log('in Copy');
}