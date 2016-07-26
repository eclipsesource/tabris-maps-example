exports.create = function() {
  return tabris.create("Page", {
    title: "property: region",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = new eclipsesource.maps.Map({
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
    map.set("region", {northEast: [-33.853, 151.232], southWest: [-33.893, 151.182]});
    var region = map.get("region");
    centerPosition.set("text", "North east latitude: <b>" + region.northEast[0] + "</b><br/>" +
      "North east longitude: <b>" + region.northEast[1] + "</b><br/>" +
      "South west Latitude: <b>" + region.southWest[0] + "</b><br/>" +
      "South west longitude: <b>" + region.southWest[1] + "</b>");
  }).appendTo(locationButtons);

  var centerPosition = tabris.create("TextView", {
    layoutData: {centerX: 0, top: [center, 10]},
    text: "Center Position: <b>?</b>",
    markupEnabled: true
  }).appendTo(page);
}
