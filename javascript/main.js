import { mapServices } from './modules/map-services.js';

window.addEventListener('load', onInit)

function onInit() {
    bindEvents()
    renderMap()
}

var gCurrentSearchInput = '';


function bindEvents() {
    document.querySelector('.hit-search-btn').addEventListener('click', onSearchLocation);
    document.querySelector('.search-input').addEventListener('input', function(evt) { onTypeSearch(this.value) });
    document.querySelector('.my-location-btn').addEventListener('click', getUserLocation);
    document.querySelector('.copy').addEventListener('click', onCopyLocationValue);
}

function renderMap() {
    mapServices.initMap()
}

async function onSearchLocation() {
    await mapServices.getCordsByName(gCurrentSearchInput);
    mapServices.initMap(mapServices.getCurrentCoords())
    document.querySelector('.my-location h3').innerText = mapServices.getCurrentAddress();
}

function onCopyLocationValue() {}

function onTypeSearch(val) {
    gCurrentSearchInput = val;
}

function getUserLocation() {
    mapServices.getMyLocation()
}

// function onCopyLocationValue() {
//     console.log('in Copy');
// }