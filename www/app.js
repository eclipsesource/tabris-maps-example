var centerPage = require("./pages/centerPage");
var mapTypePage = require("./pages/mapTypePage");
var zoomPage = require("./pages/zoomPage");
var maptapPage = require("./pages/maptapPage");
var maplongpressPage = require("./pages/maplongpressPage");
var markerPage = require("./pages/markerPage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
centerPage.create().open();
mapTypePage.create();
zoomPage.create();
maptapPage.create();
maplongpressPage.create();
markerPage.create();
