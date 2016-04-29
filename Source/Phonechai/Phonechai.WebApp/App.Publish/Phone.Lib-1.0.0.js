var App;
(function (App) {
    var PhoneController = (function () {
        function PhoneController(phoneService, stateParams) {
            var _this = this;
            this.Phone = new App.Phone();
            this.phoneService = phoneService;
            this.stateParamService = stateParams;
            if (this.stateParamService["id"] != null) {
                // call to the server here.
                var id = this.stateParamService["id"];
                this.phoneService.GetDetail(id)
                    .then(function (success) {
                    console.log(success);
                    _this.Phone = success.data;
                }, function (error) {
                    console.log(error);
                });
            }
        }
        PhoneController.prototype.Save = function () {
            console.log(this.Phone);
            var self = this;
            var successCallback = function (result) {
                console.log(result);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.phoneService.Save(self.Phone)
                .then(successCallback, errorCallback);
        };
        PhoneController.$inject = ["PhoneService", "$stateParams"];
        return PhoneController;
    }());
    App.PhoneController = PhoneController;
    angular.module('app').controller('PhoneController', PhoneController);
})(App || (App = {}));
//# sourceMappingURL=PhoneController.js.map
var App;
(function (App) {
    var PhoneQueryController = (function () {
        function PhoneQueryController(phoneService) {
            this.phoneService = phoneService;
            this.Phones = [];
            this.SearchRequest = new App.SearchRequest("", "Name", "False", "");
            this.Get();
        }
        PhoneQueryController.prototype.Get = function () {
            var self = this;
            var successCallback = function (result) {
                self.Phones = result.data;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.phoneService.Search(self.SearchRequest)
                .then(successCallback, errorCallback);
        };
        PhoneQueryController.$inject = ["PhoneService"];
        return PhoneQueryController;
    }());
    App.PhoneQueryController = PhoneQueryController;
    angular.module('app').controller('PhoneQueryController', PhoneQueryController);
})(App || (App = {}));
//# sourceMappingURL=PhoneQueryController.js.map
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