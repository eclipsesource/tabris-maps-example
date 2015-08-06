exports.create = function() {
  return tabris.create("Page", {
    title: "Marker",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {

  var markersCount = 0;
  var markerIds = [];

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
      marker.set("id", ++markersCount);
      markerIds.push(marker.get("id"));
      updateMarkerIdsTextView();
      marker.on("tap", removeMarker);
    });
  }

  function removeMarker() {
    this.dispose();
    var markerId = markerIds.indexOf(this.get("id"));
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
