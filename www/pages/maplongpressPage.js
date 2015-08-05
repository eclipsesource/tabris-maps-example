exports.create = function() {
  return tabris.create("Page", {
    title: "event: maplongpress",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapready", function() {
    this.set("center", [-33.867, 151.206]);
    this.on("maplongpress", function(widget, latLng) {
      var text = "Map long press position:<br/>" +
        "Latitude: <b>" + latLng[0] + "</b><br/>" +
        "Longitude: <b>" + latLng[1] + "</b>";
      tapEventDisplay.set("text", text);
    });
  }).appendTo(page);

  var tapEventDisplay = tabris.create("TextView", {
    markupEnabled: true,
    layoutData: {left: 10, top: [map, 10], right: 10}
  }).appendTo(page);
}
