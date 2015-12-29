exports.create = function() {
  return tabris.create("Page", {
    title: "event: mappan",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var initialLatLng = [-33.867, 151.206];

  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
    this.set("center", initialLatLng);
    this.on("pan", function(widget, target) {
      updatePanEventDisplay(target);
    });
  }).appendTo(page);

  var panEventDisplay = tabris.create("TextView", {
    layoutData: {left: 10, top: [map, 10], right: 10},
    markupEnabled: true
  }).appendTo(page);

  function updatePanEventDisplay(target) {
    var text = "Center of map:<br/>" +
      "Latitude: <b>" + target[0] + "</b><br/>" +
      "Longitude: <b>" + target[1] + "</b>";
    panEventDisplay.set("text", text);
  }

  updatePanEventDisplay(initialLatLng);
}
