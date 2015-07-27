tabris.registerWidget("Map", {});

var page = tabris.create("Page", {
  title: "Maps Custom Widget",
  topLevel: true
});

var button = tabris.create("Button", {
  text: "Show Map",
  layoutData: {centerX: 0, top: 10}
}).on("select", function() {
  var map = tabris.create("Map", {
    layoutData: {left: 10, top: [button, 10], width: 300, height: 600}
  }).appendTo(page);
}).appendTo(page);

page.open();
