exports.create = function() {
  return tabris.create("Page", {
    title: "property: region",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
  }).appendTo(page);

  var locationButtons = tabris.create("Composite", {
    layoutData: {centerX: 0, top: [map, 10]}
  }).appendTo(page);

  var center = tabris.create("Button", {
    text: "Go to Sydney",
    layoutData: {centerX: 0, top: 0}
  }).on("select", function() {
    map.set("region", [-33.867, 151.206, 0.025, 0.025]);
    var region = map.get("region");
    centerPosition.set("text", "Latitude: <b>" + region[0] + "</b><br/>" +
      "Longitude: <b>" + region[1] + "</b><br/>" +
      "Latitude delta: <b>" + region[2] + "</b><br/>" +
      "Longitude delta: <b>" + region[3] + "</b>");
  }).appendTo(locationButtons);

  var centerPosition = tabris.create("TextView", {
    layoutData: {centerX: 0, top: [center, 10]},
    text: "Center Position: <b>?</b>",
    markupEnabled: true
  }).appendTo(page);
}
