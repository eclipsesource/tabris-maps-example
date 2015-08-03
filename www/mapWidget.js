tabris.registerWidget("Map", {
  _type: "com.eclipsesource.tabris.maps.map",
  _initProperties: {liteMode: false},
  _events: {
    mapTap: {
      trigger: function(event) {this.trigger("mapTap", this, event.latLng);}
    },
    mapLongpress: {
      trigger: function(event) {this.trigger("mapLongpress", this, event.latLng);}
    },
    mapReady: {
      trigger: function() {this.trigger("mapReady", this);}
    }
  },
  _properties: {
    liteMode: "boolean",
    latLng: "array",
    zoom: "float",
    mapType: {type: ["choice", ["none", "hybrid", "normal", "satellite", "terrain"]]}
  },
  animateCamera: function(centerLatLng, zoom) {
    // TODO check types
    this._nativeCall("animateCamera", {
      "centerLatLng": centerLatLng,
      "zoom": zoom
    });
  },
  animateCamera: function(northWestLatLng, southEastLatLng) {
    // TODO check types
    this._nativeCall("animateCamera", {
      "northWestLatLng": northWestLatLng,
      "southEastLatLng": southEastLatLng
    });
  },
  getMinZoomLevel: function() {
    this._nativeCall("getMinZoomLevel", {});
  },
  getMaxZoomLevel: function() {
    this._nativeCall("getMaxZoomLevel", {});
  }
});
