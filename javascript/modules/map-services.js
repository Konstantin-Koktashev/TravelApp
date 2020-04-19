const apiKey = `AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI`

export const mapServices = {
    initMap,
    getMyLocaiton,
    addNewMarker,
    addLocation,
    getCordsByName
}

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
        .then(res => (res.data.results[0].geometry.location))
        .then(initMap)
}

function getMyLocaiton() {

}

function addNewMarker() {

}

function addLocation() {

}