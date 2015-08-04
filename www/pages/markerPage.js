exports.create = function() {
  return tabris.create("Page", {
    title: "Marker",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {

  var markersCount = 0;
  var markerIds = [];

  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapReady", mapReady)
    .on("addMarker", addMarker)
    .on("removeMarker", removeMarker)
    .appendTo(page);

  var markerIdsTextView = tabris.create("TextView", {
    markupEnabled: true,
    layoutData: {left: 10, top: [map, 10], right: 10},
    text: "Active marker ids: <b>?</b>"
  }).appendTo(page);

  function mapReady() {
    this.set("center", [-33.867, 151.206]);
    this.on("mapTap", function(widget, latLng) {
      this.addMarker(++markersCount, latLng);
    });
  }

  function addMarker(mapWidget, marker) {
    markerIds.push(marker.get("id"));
    updateMarkerIdsTextView();
    marker.on("markerTap", function() {
      mapWidget.removeMarker(this);
    });
  }

  function removeMarker(mapWidget, marker) {
    var markerId = markerIds.indexOf(marker.get("id"));
    if (markerId) {
      markerIds.splice(markerId, 1);
    }
    updateMarkerIdsTextView();
  }

  function updateMarkerIdsTextView() {
    var markerIdsString = markerIds.join(", ");
    markerIdsTextView.set("text",
      "Active marker ids: <b>" + (markerIdsString ? markerIdsString : "?") + "</b>");
  }

  updateMarkerIdsTextView();

}
