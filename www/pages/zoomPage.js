var MIN_ZOOM_VALUE = 2;
var MAX_ZOOM_VALUE = 21;

exports.create = function() {

  var page = tabris.create("Page", {
    title: "property: zoom",
    topLevel: true
  });

  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).appendTo(page);

  tabris.create("Slider", {
    layoutData: {left: 10, top: [map, 10], right: 10},
    minimum: 0,
    maximum: 100
  }).on("change:selection", function(widget, selection) {
    map.set("zoom", getZoomFromSelection(selection));
  }).appendTo(page);

  return page;

};

function getZoomFromSelection(selection) {
  return (selection * MAX_ZOOM_VALUE - MIN_ZOOM_VALUE) / 100 + MIN_ZOOM_VALUE;
}
