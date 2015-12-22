exports.create = function() {
  return tabris.create("Page", {
    title: "Marker",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {

  var markersCount = 0;
  var markerIds = [];
  var colors = ["azure", "cyan", "blue", "green", "magenta", "orange", "red", "rose", "violet", "yellow"];

  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", mapReady).appendTo(page);

  var markerIdsTextView = tabris.create("TextView", {
    markupEnabled: true,
    layoutData: {left: 10, top: [map, 10], right: 10},
    text: "Active marker ids: <b>?</b>"
  }).appendTo(page);

  function mapReady() {
    this.set("center", [-33.867, 151.206]);
    this.on("tap", function(widget, latLng) {
      var marker = this.createMarker({latLng: latLng});
      var markerId = ++markersCount;
      marker.set("id", markerId);
      var markerColor = colors[markerId % colors.length];
      marker.set("color", markerColor);
      markerIds.push(markerId);
      updateMarkerIdsTextView();
      marker.on("tap", removeMarker);
    });
  }

  function removeMarker() {
    var markerId = markerIds.indexOf(this.get("id"));
    console.log("marker tapped: " + markerId);
    this.dispose();
    if (markerId >= 0) {
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
