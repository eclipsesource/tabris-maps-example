exports.create = function() {
  return tabris.create("Page", {
    title: "event: mappan",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
    this.set("center", [-33.867, 151.206]);
    this.on("pan", function(widget, latLng) {
      var text = "Map tap position:<br/>" +
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
