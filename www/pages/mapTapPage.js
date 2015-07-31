exports.create = function() {

  var page = tabris.create("Page", {
    title: "event: mapTap",
    topLevel: true
  });

  var map = tabris.create("Map", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("mapTap", function(widget, latLng) {
    var text = "<b>Map tap position:</b><br/>" +
                "<b>Latitude:</b> " + latLng[0] + "<br/>" +
                "<b>Longitude:</b> " + latLng[1];
    tapEventDisplay.set("text", text);
  }).appendTo(page);

  var tapEventDisplay = tabris.create("TextView", {
    markupEnabled: true,
    layoutData: {left: 10, top: [map, 10], right: 10}
  }).appendTo(page);

};
