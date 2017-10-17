module.exports = {
    connect: function (successCallback, errorCallback, code) {
        cordova.exec(successCallback, errorCallback, 'DebugClient', 'connect', [code]);
    },
    disconnect: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'DebugClient', 'disconnect', []);
    }
}