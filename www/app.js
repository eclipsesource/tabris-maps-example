var page = tabris.create("Page", {
  title: "Maps Custom Widget",
  topLevel: true
});

var map = tabris.create("Map", {
  layoutData: {left: 10, top: 10, width: 300, height: 600}
}).appendTo(page);

page.open();
