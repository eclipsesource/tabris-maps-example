var MIN_ZOOM_VALUE = 2;
var MAX_ZOOM_VALUE = 21;

exports.create = function() {

  var page = tabris.create("Page", {
    title: "property: zoom",
    topLevel: true
  });

  tabris.create("Button", {
    text: "Create Example",
    layoutData: {centerX: 0, centerY: 0}
  }).on("select", function() {
    createExample(page);
    this.set("visible", false);
  }).appendTo(page);

  return page;

};

function createExample(page) {
  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapReady", function() {
    this.set("latLng", [-33.867, 151.206]);
    tabris.create("Slider", {
      layoutData: {left: 10, top: [map, 10], right: 10},
      minimum: 0,
      maximum: 100
    }).on("change:selection", function(widget, selection) {
      map.set("zoom", getZoomFromSelection(selection));
    }).appendTo(page);
  }).appendTo(page);
}

function getZoomFromSelection(selection) {
  return (selection * MAX_ZOOM_VALUE - MIN_ZOOM_VALUE) / 100 + MIN_ZOOM_VALUE;
}
