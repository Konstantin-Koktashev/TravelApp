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
    document.querySelector('.my-location').addEventListener('click', getMyLocation);
    document.querySelector('.copy').addEventListener('click', onCopyLocationValue);
}

function renderMap() {
    mapServices.initMap()
}

function onSearchLocation() {
    mapServices.getCordsByName(gCurrentSearchInput);
}


function getMyLocation() {}

function onCopyLocationValue() {}

function onTypeSearch(val) {
    gCurrentSearchInput = val;
}