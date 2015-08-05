tabris.registerWidget("Map", {
  _type: "com.eclipsesource.tabris.maps.map",
  _initProperties: {liteMode: false},
  _events: {
    maptap: {
      trigger: function(event) {this.trigger("maptap", this, event.latLng);}
    },
    maplongpress: {
      trigger: function(event) {this.trigger("maplongpress", this, event.latLng);}
    },
    mapready: {
      trigger: function() {this.trigger("mapready", this);}
    }
  },
  _properties: {
    liteMode: "boolean",
    center: "array",
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
  animateCameraToBounds: function(northWestLatLng, southEastLatLng) {
    // TODO check types
    this._nativeCall("animateCameraToBounds", {
      "northWestLatLng": northWestLatLng,
      "southEastLatLng": southEastLatLng
    });
  },
  animateCameraToPointGroup: function(latLngPointGroup) {
    // TODO check types
    this._nativeCall("animateCameraToPointGroup", {
      "latLngPointGroup": latLngPointGroup
    });
  },
  getMinZoomLevel: function() {
    return this._nativeCall("getMinZoomLevel", {});
  },
  getMaxZoomLevel: function() {
    return this._nativeCall("getMaxZoomLevel", {});
  }
});
