require("./mapWidget.js");
var latLngPage = require("./pages/latLngPage");
var mapTypePage = require("./pages/mapTypePage");
var drawer = tabris.create("Drawer");

tabris.create("PageSelector").appendTo(drawer);
latLngPage.create().open();
mapTypePage.create();
