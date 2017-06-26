'use strict';
var map;
var siteUrb; //site of urbanization
var markers = [];
var positionOfBusiness;

function initMap() {
        siteUrb = {lat:6.216280, lng: -75.605903};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: siteUrb,
        });

        // This event listener will call addMarker() when the map is clicked.
        map.addListener('click', function(event) {
          deleteMarkers(); //borramos los marcadores para que siempre haya 1
          addMarker(event.latLng);
          positionOfBusiness= event.latLng.lat()+", "+event.latLng.lng(); //{lat: event.latLng.lat(), lng: event.latLng.lng()};
        });

      }


      // Adds a marker to the map and push to the array.
      function addMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
      }

      // Sets the map on all markers in the array.
     function setMapOnAll(map) {
       for (var i = 0; i < markers.length; i++) {
         markers[i].setMap(map);
       }
     }


     // Shows any markers currently in the array.
     function showMarkers() {
       setMapOnAll(map);
     }

     // Deletes all markers in the array by removing references to them.
     function deleteMarkers() {
       clearMarkers();
       markers = [];
     }

     // Removes the markers from the map, but keeps them in the array.
     function clearMarkers() {
       setMapOnAll(null);
     }
