tabris.registerWidget("Map", {
  _type: "com.eclipsesource.tabris.maps.map",
  _initProperties: {
    liteMode: false
  },
  _events: {
    mapTap: {
      trigger: function(event) {this.trigger("mapTap", this, event.latLng);}
    }
  },
  _properties: {
    liteMode: "boolean",
    latLng: "array",
    zoom: "float",
    mapType: {type: ["choice", ["none", "hybrid", "normal", "satellite", "terrain"]]}
  }
});
