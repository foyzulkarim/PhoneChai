// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var PhoneService = (function () {
        function PhoneService($http, $q, auth) {
            this.$http = $http;
            this.$q = $q;
            this.httpService = $http;
            this.qService = $q;
            this.authService = auth;
        }
        PhoneService.prototype.Save = function (data) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.post("/api/phone", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        PhoneService.prototype.Get = function () {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            //var config: angular.IRequestShortcutConfig = { headers: { 'Authorization': "Bearer "+self.authService.AccountInfo.AccessToken } };
            self.httpService.get("/api/phonequery")
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        PhoneService.prototype.GetDetail = function (id) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.get("/api/phonequery?id=" + id)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        PhoneService.prototype.Search = function (data) {
            var self = this;
            var deffered = this.qService.defer();
            var successCallback = function (result) {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = function (error) {
                console.log(error);
                return deffered.reject(error);
            };
            self.httpService.post("/api/phonequery", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        };
        PhoneService.$inject = ["$http", "$q", "AuthService"];
        return PhoneService;
    }());
    App.PhoneService = PhoneService;
    angular.module("app").service("PhoneService", PhoneService);
})(App || (App = {}));
//# sourceMappingURL=PhoneService.js.map