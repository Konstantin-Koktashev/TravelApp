
const apiKey=`AIzaSyBmx3Z42ngJl3kul0Ihag6WR2-P4SW2uuI`

export const mapServices={
    initMap,
    getMyLocaiton,
    addNewMarker,
    addLocation
}
function initMap() {
var options={
    zoom:8,
    center:{lat:42,lng:45}
}
var map=new google.maps.Map(document.querySelector('.map-spot'),options);
}
  
function getMyLocaiton(){

}

function addNewMarker(){
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      });
    
}

function addLocation(){}