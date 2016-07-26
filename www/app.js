var positionPage = require("./pages/positionPage");
var cameraPage = require("./pages/cameraPage");
var mapTypePage = require("./pages/mapTypePage");
var regionPage = require("./pages/regionPage");
var maptapPage = require("./pages/maptapPage");
var cameramovePage = require("./pages/cameramovePage");
var changeCameraPage = require("./pages/changeCameraPage");
var markerPage = require("./pages/markerPage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
positionPage.create().open();
cameraPage.create();
mapTypePage.create();
regionPage.create();
maptapPage.create();
cameramovePage.create();
changeCameraPage.create();
markerPage.create();
