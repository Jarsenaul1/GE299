var map;

//function to instantiate the Leaflet map
function createMap(){

    //create the map
    map = L.map('mapid', {
        center: [42.26341, -71.80219],
        zoom: 13
    });

    //add  base tilelayer
		var myBasemap =  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
				maxZoom: 13,
				attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
				});

		myBasemap.addTo(map)

    //call getData function
    getData(map);
};

//function to retrieve the data and place it on the map
function getData(map){

		var myStyle = {
    "color": 'white',
    "weight": 2,
    "opacity": 1
		};

  //load the data, then map
    $.getJSON("data/City_Council_Districts_l.geojson", function(response){

            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response, {
                //use filter function to only show cities with 2015 populations greater than 20 million
                //filter: function(feature, layer) {
                    //return feature.properties.Pop_2015 > 20;
									style: myStyle

            }).addTo(map);
    });
};


$(document).ready(createMap);
