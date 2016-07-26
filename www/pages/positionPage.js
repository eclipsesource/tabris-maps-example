exports.create = function() {
  return tabris.create("Page", {
    title: "property: position",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = new eclipsesource.maps.Map({
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
    this.set("position", [-33.867, 151.206]);
    this.set("zoom", 13);
  }).appendTo(page);

  var locationButtons = tabris.create("Composite", {
    layoutData: {centerX: 0, top: [map, 10]}
  }).appendTo(page);

  var blacktown = tabris.create("Button", {
    text: "Go to Blacktown"
  }).on("select", function() {
    map.set("position", [-33.769, 150.907]);
    map.set("zoom", 14);
  }).appendTo(locationButtons);

  tabris.create("Button", {
    text: "Go to Sydney",
    layoutData: {left: [blacktown, 10], top: 0}
  }).on("select", function() {
    map.set("position", [-33.867, 151.206]);
    map.set("zoom", 13);
  }).appendTo(locationButtons);

  var center = tabris.create("Button", {
    text: "Show position",
    layoutData: {centerX: 0, top: [locationButtons, 10]}
  }).on("select", function() {
    var center = map.get("position");
    centerPosition.set("text", "Position:<br/>" +
      "Latitude: <b>" + center[0] + "</b><br/>" +
      "Longitude: <b>" + center[1] + "</b>");
  }).appendTo(page);

  var centerPosition = tabris.create("TextView", {
    layoutData: {centerX: 0, top: [center, 10]},
    text: "Position: <b>?</b>",
    markupEnabled: true
  }).appendTo(page);
}
