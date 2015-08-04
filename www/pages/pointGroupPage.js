exports.create = function() {
  return tabris.create("Page", {
    title: "Point Group",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {

  var markersCount = 0;
  var markerPositionsPointGroup = [];

  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapReady", function() {
    this.set("center", [-33.867, 151.206]);
    this.on("mapTap", function(widget, latLng) {
      this.addMarker(++markersCount, latLng);
    });
  }).on("addMarker", function(mapWidget, marker) {
    markerPositionsPointGroup.push(marker.position);
  }).appendTo(page);

  tabris.create("Button", {
    text: "Show all Markers",
    layoutData: {centerX: 0, width: 300}
  }).on("select", function() {
    map.animateCameraToPointGroup(markerPositionsPointGroup);
  }).appendTo(page);

}
