var map;



require(["esri/map", "dojo/domReady!"], function(Map) {

    // code to create the map and add a basemap will go here

	map = new Map("mapDiv", {

    basemap: "streets",

    center: [-84.386,33.753],

    zoom: 11

  });

	

  });