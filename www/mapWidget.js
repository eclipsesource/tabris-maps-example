tabris.registerWidget("Map", {
  _type: "com.eclipsesource.tabris.maps.map",
  _initProperties: {
    liteMode: false
  },
  _properties: {
    liteMode: "boolean",
    latLng: "array",
    zoom: "integer",
    mapType: {type: ["choice", ["none", "hybrid", "normal", "satellite", "terrain"]]}
  }
});
