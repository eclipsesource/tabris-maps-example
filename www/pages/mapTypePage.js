exports.create = function() {
  return tabris.create("Page", {
    title: "property: mapType",
    topLevel: true
  }).once("appear", createExample);
};

function createExample(page) {
  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
    this.set("position", [-33.867, 151.206]);
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
    markupEnabled: true,
    text: "Min zoom: <b>?</b><br/>" +
      "Max zoom: <b>?</b>"
  }).appendTo(page);

  function updateMinMaxZoomLevel() {
    minMaxZoomLevel.set("text",
      "Min zoom: <b>" + map.get("minZoomLevel") + "</b><br/>" +
      "Max zoom: <b>" + map.get("maxZoomLevel") + "</b>");
  }

}
