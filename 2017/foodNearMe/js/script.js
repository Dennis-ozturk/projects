document.addEventListener("DOMContentLoaded", function() {
    var lnkNear = document.querySelector("#lnkNear");

    var mapContainer = document.querySelector("#mapContainer");
    var list = document.querySelector("#lists ul");
    var listTitle = document.querySelector("#listTitle");

    window.onload = ("load", function() {
        var html = "";
        var input = "";
        for (var r of restaurants) {
            html += "<li><h3>" + r.name + "</h3>";
            html += "<p><address>" + r.address + "</address></p>";
            html += "<p>" + r.info + "</p>";
            html += "</li>";
        }
        list.innerHTML = html;
        listTitle.innerHTML = "All Restaurants";
    });
    lnkNear.addEventListener("click", function() {
        navigator.geolocation.getCurrentPosition(
            function(location) {
                var lat = location.coords.latitude;
                var lon = location.coords.longitude;
                listTitle.innerHTML = "Nearby " + lat + "," + lon;
                map.setCenter({lat: lat, lng: lon});
                var html = "";
                for (var r of restaurants) {
                    var distance = getDistance(lat, lon, r.lat, r.lon);
                    var distanceMiles = distance / 0.62;
                    html += "<li><h3>" + r.name + "</h3>";
                    html += "<p><address>" + r.address + "</address></br>";
                    html += "</br><span class='distance'>" + distance.toFixed(1) + "km</span></p>";
                    html += "</li>";
                }
                list.innerHTML = html;

            },
            function() {
                alert("Turn location on and refresh app");
            },
            {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 5000
            }
        );
    });
});

var map;
var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';

function initMap() {
    var restaurant;
    var content;
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
    });
    var infoWindow = new google.maps.InfoWindow()
    for (r of restaurants) {
        content = '<h4>' + r.name + '</h4>' + " " + r.info;
         marker = new google.maps.Marker({
            position: {
                lat: r.lat, lng: r.lon
            },
            map: map,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            icon: new google.maps.MarkerImage( r.img , undefined, undefined, undefined, new google.maps.Size(40, 20))
        });
         google.maps.event.addListener(marker,'click', (function(marker,content,infoWindow){
            return function() {
            infoWindow.setContent(content);
            infoWindow.open(map,marker);
        };
    })(marker,content,infoWindow));
}
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: im
        });
        map.setCenter(pos);
    }, function() {

    });
} else {
  }
}
