exports.create = function() {

  var page = tabris.create("Page", {
    title: "mapType",
    topLevel: true
  });

  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).appendTo(page);

  ["hybrid", "none", "normal", "satellite", "terrain"].forEach(function(mapType) {
    tabris.create("Button", {
      text: mapType,
      layoutData: {centerX: 0, top: [page.children().last(), 10]}
    }).on("select", function() {
      map.set("mapType", mapType);
    }).appendTo(page);
  });

  return page;

};
