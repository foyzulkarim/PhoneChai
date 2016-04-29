// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var AccountInfo = (function () {
        function AccountInfo() {
            this.Username = "";
            this.AccessToken = "";
            this.IsAuthenticated = false;
        }
        return AccountInfo;
    }());
    App.AccountInfo = AccountInfo;
    var AuthService = (function () {
        function AuthService(localStorageService) {
            this.AccountInfo = new AccountInfo();
            this.localStorageService = localStorageService;
        }
        AuthService.prototype.SetInfo = function () {
            var self = this;
            self.localStorageService.set("AccountInfo", self.AccountInfo);
        };
        AuthService.prototype.FillAuthData = function () {
            var self = this;
            self.AccountInfo = self.localStorageService.get("AccountInfo");
        };
        AuthService.prototype.IsAuthenticated = function () {
            return this.AccountInfo && this.AccountInfo.IsAuthenticated;
        };
        AuthService.$inject = ["localStorageService"];
        return AuthService;
    }());
    App.AuthService = AuthService;
    angular.module("app").service("AuthService", AuthService);
})(App || (App = {}));
//# sourceMappingURL=AuthService.js.map