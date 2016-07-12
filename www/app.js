var positionPage = require("./pages/positionPage");
var cameraPage = require("./pages/cameraPage");
var mapTypePage = require("./pages/mapTypePage");
var zoomPage = require("./pages/zoomPage");
var regionPage = require("./pages/regionPage");
var maptapPage = require("./pages/maptapPage");
var cameramovePage = require("./pages/cameramovePage");
var changeCameraPage = require("./pages/changeCameraPage");
var maplongpressPage = require("./pages/maplongpressPage");
var markerPage = require("./pages/markerPage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
positionPage.create().open();
cameraPage.create();
mapTypePage.create();
zoomPage.create();
regionPage.create();
maptapPage.create();
cameramovePage.create();
changeCameraPage.create();
maplongpressPage.create();
markerPage.create();
