import { weatherServices } from './weather-services.js';
import { ShowClickedWeather } from '../main.js';

const apiKey = `AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI`
var gCurrentLocation;
var gLocations = [];
var gCurrentCoords;
var gCurrentAddress;

export const mapServices = {
    initMap,
    addNewMarker,
    addLocation,
    getCordsByName,
    getMyLocation,
    getCurrentCoords,
    getCurrentAddress,
    copyToClipboard,
    getLocations,

}


function initMap(positions) {
    if (!positions) positions = { lat: 31.0461, lng: 34.8516 }
    gLocations.push(positions)
    var options = {
        zoom: 8,
        center: positions
    }
    var map = new google.maps.Map(document.querySelector('.map-spot'), options);
    var marker = new google.maps.Marker({
        position: positions,
        map: map,
        title: 'First Marker'
    });


    google.maps.event.addListener(map, 'click', async function(event) {

        marker = new google.maps.Marker({ position: event.latLng, map: map });
        var lng = event.latLng.lng();
        var lat = event.latLng.lat();
        gLocations.push({ lat, lng });


        var weather = await weatherServices.getWeather({ lat, lng });
        var address = await getNameByCoords(lat, lng);
        ShowClickedWeather.renderCurrentWeather(weather);
        var x = new Place(address, weather);
        x.renderPlace();
    });

}

function getCordsByName(val) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${val}&key=${apiKey}`)
        .then(res => (res.data.results[0]))
        .then(_setCurrentSearchResult)
}

function getNameByCoords(lat, lng) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`)
        .then(res => (res.data.results[0].formatted_address))
}

function _setCurrentSearchResult(res) {
    gCurrentAddress = res.formatted_address;
    gCurrentCoords = res.geometry.location;
}

function getCurrentAddress() {
    return gCurrentAddress;
}

function getCurrentCoords() {
    return gCurrentCoords;
}

function getLocations() {
    return gLocations
}



function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}


//   function showPosition(position) {
//    console.dir(position.coords.latitude);
//    console.dir(position.coords.longitude);
//   }

function showPosition(position) {
    const { coords: { latitude } } = position;
    const { coords: { longitude } } = position;
    const coords = { lat: latitude, lng: longitude };
    gCurrentLocation = coords;
    initMap(coords);
}


function copyToClipboard() {
    let lastLocation = gLocations[gLocations.length - 1]
    let lat = lastLocation.lat
    let lng = lastLocation.lng
    let url = `http://www.google.com/maps/place/${lat},${lng}`
    let el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

};

function addNewMarker() {

}

function addLocation() {

}

class Place {
    constructor(addres, weather) {
        this.address = addres;
        this.weather = weather;
        this.id = 100;
    }
    renderPlace() {

        var elPlace = document.createElement('tr');
        var elId = document.createElement('td');
        var elAddress = document.createElement('td');
        var elWeather = document.createElement('td');

        elId.innerHTML = this.id;
        elAddress.innerHTML = this.address;
        elWeather.innerHTML = this.weather;

        elPlace.appendChild(elId);
        elPlace.appendChild(elAddress);
        elPlace.appendChild(elWeather);
        return document.querySelector('.new-place').appendChild(elPlace);

    }

}