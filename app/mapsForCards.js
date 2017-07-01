'use strict';
var map;
var siteUrb; //site of urbanization
var markers = [];

function mapForCard(element,location) {
        siteUrb = {lat:6.216280, lng: -75.605903};

        map = new google.maps.Map(element, {
          zoom: 16,
          center: siteUrb,
        });

        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
}
