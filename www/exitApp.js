var exec = require('cordova/exec');

exports.hideKeyboard = function (
                            success, error) {
  exec(success, error, "exitApp", "hideKeyboard",
    [

    ]);
};
exports.exitApp = function () {
  exec(null, null, "exitApp", "exitApp",
    []);
};
