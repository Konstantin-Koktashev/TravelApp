const apiKey = `AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI`

export const mapServices = {
    initMap,
    addNewMarker,
    addLocation,
    getCordsByName,
    getMyLocation,
    getCurrentCoords,
    getCurrentAddress,

}

var gCurrentCoords;
var gCurrentAddress;

function initMap(positions) {
    if (!positions) positions = { lat: 31.0461, lng: 34.8516 }
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
    initMap({ lat: latitude, lng: longitude })

}

function addNewMarker() {

}

function addLocation() {

}