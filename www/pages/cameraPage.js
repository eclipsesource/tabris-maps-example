exports.create = function() {
  return tabris.create("Page", {
    title: "property: camera",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = new eclipsesource.maps.Map({
    left: 0, right: 0, top: 0, height: 200
  }).on("ready", function() {
    this.set("camera", {position: [-33.867, 151.206]});
    this.set("zoom", 13); // TODO: use a camera property instead when it is supported.
  }).appendTo(page);

  var locationButtons = tabris.create("Composite", {
    centerX: 0, top: [map, 10]
  }).appendTo(page);

  var blacktown = tabris.create("Button", {
    text: "Go to Blacktown"
  }).on("select", function() {
    map.set("camera", {position: [-33.769, 150.907]});
    map.set("zoom", 14); // TODO: use a camera property instead when it is supported.
  }).appendTo(locationButtons);

  tabris.create("Button", {
    left: [blacktown, 10], top: 0,
    text: "Go to Sydney"
  }).on("select", function() {
    map.set("camera", {position: [-33.867, 151.206]});
    map.set("zoom", 13); // TODO: use a camera property instead when it is supported.
  }).appendTo(locationButtons);

  var center = tabris.create("Button", {
    centerX: 0, top: [locationButtons, 10],
    text: "Show camera details"
  }).on("select", function() {
    var camera = map.get("camera");
    cameraDetails.set("text", "Camera position:<br/>" +
      "Latitude: <b>" + camera.position[0] + "</b><br/>" +
      "Longitude: <b>" + camera.position[1] + "</b>");
  }).appendTo(page);

  var cameraDetails = tabris.create("TextView", {
    centerX: 0, top: [center, 10],
    text: "Camera position: <b>?</b>",
    markupEnabled: true
  }).appendTo(page);
}
