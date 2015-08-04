var MIN_ZOOM_VALUE = 2;
var MAX_ZOOM_VALUE = 21;

exports.create = function() {
  return tabris.create("Page", {
    title: "property: zoom",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapReady", function() {

    this.set("center", [-33.867, 151.206]);

    tabris.create("Slider", {
      layoutData: {left: 10, top: [map, 10], right: 10},
      minimum: 0,
      maximum: 100
    }).on("change:selection", function(widget, selection) {
      map.set("zoom", getZoomFromSelection(selection));
      zoomLevel.set("text", "Zoom level: <b>" + map.get("zoom") + "</b>").appendTo(page);
    }).appendTo(page);

    var zoomLevel = tabris.create("TextView", {
      layoutData: {centerX: 0, top: [page.children().last(), 10]},
      markupEnabled: true
    }).appendTo(page);

  }).appendTo(page);
}

function getZoomFromSelection(selection) {
  return (selection * (MAX_ZOOM_VALUE - MIN_ZOOM_VALUE)) / 100 + MIN_ZOOM_VALUE;
}
