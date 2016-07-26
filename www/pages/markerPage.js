exports.create = function() {
  return tabris.create("Page", {
    title: "Marker",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {

  var markersCount = 0;
  var markerIds = [];

  var map = new eclipsesource.maps.Map({
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", mapReady).appendTo(page);

  var markerIdsTextView = tabris.create("TextView", {
    layoutData: {left: 10, top: [map, 10], right: 10},
    markupEnabled: true,
    text: "Active marker ids: <b>?</b>"
  }).appendTo(page);

  function mapReady() {
    this.set("position", [-33.867, 151.206]);
    this.on("tap", function(map, position) {
      var marker = new eclipsesource.maps.Marker({position: position});
      map.addMarker(marker);
      var markerId = ++markersCount;
      marker.set("id", markerId);
      markerIds.push(markerId);
      updateMarkerIdsTextView();
      marker.on("tap", removeMarker);
    });
  }

  function removeMarker() {
    var markerId = this.get("id");
    var markerIdIndex = markerIds.indexOf(Number(markerId));
    this.dispose();
    console.log("marker tapped: " + markerId + " and disposed");
    if (markerIdIndex >= 0) {
      markerIds.splice(markerIdIndex, 1);
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
