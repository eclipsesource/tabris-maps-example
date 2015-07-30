tabris.registerWidget("Map", {
  _type: "com.eclipsesource.tabris.maps.map",
  _initProperties: {
    liteMode: false
  },
  _properties: {
    liteMode: "boolean",
    latLng: "array",
    zoom: "integer"
  }
});

var page = tabris.create("Page", {
  title: "Maps Custom Widget",
  topLevel: true
});

var map;

var button = tabris.create("Button", {
  text: "Show Map",
  layoutData: {centerX: 0, top: 10}
}).on("select", function() {

  map = tabris.create("Map", {
    liteMode: false,
    layoutData: {left: 0, right: 0, top: [button, 10], height: 200}
  }).appendTo(page);

}).appendTo(page);

var blacktown = tabris.create("Button", {
  text: "Blacktown",
  layoutData: {centerX: 0, top: 320}
}).on("select", function() {
  map.set("latLng", [-33.769, 150.907]);
  map.set("zoom", 12);
}).appendTo(page);

var sydney = tabris.create("Button", {
  text: "Sydney",
  layoutData: {centerX: 0, top: [blacktown, 10]}
}).on("select", function() {
  map.set("latLng", [-33.867, 151.206]);
  map.set("zoom", 13);
}).appendTo(page);

page.open();
