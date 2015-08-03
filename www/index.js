require("./mapWidget.js");
var latLngPage = require("./pages/latLngPage");
var mapTypePage = require("./pages/mapTypePage");
var zoomPage = require("./pages/zoomPage");
var mapTapPage = require("./pages/mapTapPage");
var mapLongpressPage = require("./pages/mapLongpressPage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
latLngPage.create().open();
mapTypePage.create();
zoomPage.create();
mapTapPage.create();
mapLongpressPage.create();
