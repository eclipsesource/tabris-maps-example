var centerPage = require("./pages/centerPage");
var mapTypePage = require("./pages/mapTypePage");
var zoomPage = require("./pages/zoomPage");
var regionPage = require("./pages/regionPage");
var maptapPage = require("./pages/maptapPage");
var mappanPage = require("./pages/mappanPage");
var maplongpressPage = require("./pages/maplongpressPage");
var markerPage = require("./pages/markerPage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
centerPage.create().open();
mapTypePage.create();
zoomPage.create();
regionPage.create();
maptapPage.create();
mappanPage.create();
maplongpressPage.create();
markerPage.create();
