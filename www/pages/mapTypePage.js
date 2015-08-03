exports.create = function() {

  var page = tabris.create("Page", {
    title: "property: mapType",
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
    this.set("zoom", 13);
  }).appendTo(page);

  ["hybrid", "none", "normal", "satellite", "terrain"].forEach(function(mapType) {
    tabris.create("Button", {
      text: mapType,
      layoutData: {centerX: 0, top: [page.children().last(), 10]}
    }).on("select", function() {
      map.set("mapType", mapType);
      updateMinMaxZoomLevel();
    }).appendTo(page);
  });

  var minMaxZoomLevel = tabris.create("TextView", {
    layoutData: {centerX: 0, top: [page.children().last(), 10]},
    markupEnabled: true
  }).appendTo(page);

  function updateMinMaxZoomLevel() {
    minMaxZoomLevel.set("text", "min zoom: <b>" + map.getMinZoomLevel() + "</b> max zoom:<b>" + map.getMaxZoomLevel() + "</b>");
  }

  updateMinMaxZoomLevel();
}
