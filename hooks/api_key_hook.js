module.exports = function(context) {
  var cordova_util = context.requireCordovaModule("cordova-lib/src/cordova/util");
  var ConfigParser = context.requireCordovaModule("cordova-lib/src/configparser/ConfigParser");
  var projectRoot = cordova_util.isCordova();
  var xml = cordova_util.projectConfig(projectRoot);
  var cfg = new ConfigParser(xml);

  cfg.doc
    .findall("plugin/[@name='com.eclipsesource.tabris.maps']")[0]
    .findall("variable/[@name='API_KEY_FOR_ANDROID']")[0]
    .set("value", process.env.API_KEY_FOR_ANDROID);

  console.log(
    "Setting API key to: " +
    cfg.doc
      .findall("plugin/[@name='com.eclipsesource.tabris.maps']")[0]
      .findall("variable/[@name='API_KEY_FOR_ANDROID']")[0]
      .get("value")
  );

  cfg.write();
};
