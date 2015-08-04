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
    center: "array",
    zoom: "float",
    mapType: {type: ["choice", ["none", "hybrid", "normal", "satellite", "terrain"]]}
  },
  addMarker: function(index, latLng) {
    // TODO check types
    this._nativeCall("addMarker", {
      index: index,
      latLng: latLng
    });
  },
  removeMarker: function(marker) {
    this._nativeCall("removeMarker", {
      marker: marker
    });
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
