import { weatherServices } from './weather-services.js';
const apiKey = `AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI`
var gLocations=[];
var gCurrentLocation;
export const mapServices = {
    initMap,
    addNewMarker,
    addLocation,
    getCordsByName,
    getMyLocation,
    getCurrentCoords,
    getCurrentAddress,
    copyToClipboard,
    getLocations
}

var gCurrentCoords;
var gCurrentAddress;

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
    

google.maps.event.addListener(map, 'click', function(event) {

    marker = new google.maps.Marker({position: event.latLng, map: map});
    var lng= event.latLng.lng()
    var lat= event.latLng.lat()
    gLocations.push({lat,lng}) 
    weatherServices.getWeather(positions)
});



}

function getCordsByName(val) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${val}&key=AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI`)
        .then(res => (res.data.results[0]))
        .then(_setCurrentSearchResult)
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
function getLocations(){
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
    const { coords: { latitude } } = position
    const { coords: { longitude } } = position
     const coords = { lat: latitude, lng: longitude }
    gCurrentLocation = coords
    initMap(coords)
}


function copyToClipboard() {
    let lastLocation=gLocations[gLocations.length-1]
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