import {mapServices} from './modules/map-services.js';

window.addEventListener('load', onInit)

function onInit(){
    bindEvents()
    renderMap()
    

}


function bindEvents() {
    document.querySelector('.go-to-location').addEventListener('click', onSearchLocation);
    document.querySelector('.my-location').addEventListener('click', getMyLocation);
    document.querySelector('.copy').addEventListener('click', onCopyLocationValue);
}

function renderMap(){
    mapServices.initMap()
}

function onSearchLocation(){
    var value=document.querySelector('nav input').value
}


function getMyLocation(){}
function onCopyLocationValue(){}