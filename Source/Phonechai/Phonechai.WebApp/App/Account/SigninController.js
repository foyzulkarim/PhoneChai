// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var SigninRequest = (function () {
        function SigninRequest() {
            this.grant_type = "password";
        }
        return SigninRequest;
    }());
    App.SigninRequest = SigninRequest;
    var SigninController = (function () {
        function SigninController($location, http, q, auth, state) {
            this.$location = $location;
            this.http = http;
            this.q = q;
            this.Title = "SigninController";
            this.httpService = http;
            this.qService = q;
            this.authService = auth;
            this.stateService = state;
            this.Activate();
        }
        SigninController.prototype.Activate = function () {
            if (this.authService.IsAuthenticated()) {
                this.stateService.go('root.home');
            }
            console.log('i m in signin controller activate method');
        };
        SigninController.prototype.Signin = function () {
            console.log('i m going to post the values');
            console.log(this.User);
            var self = this;
            var config = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
            var success = function (result) {
                var token = result.data.access_token;
                console.log(token);
                if (!self.authService.AccountInfo) {
                    self.authService.AccountInfo = new App.AccountInfo();
                }
                self.authService.AccountInfo.Username = result.data.userName;
                self.authService.AccountInfo.AccessToken = token;
                self.authService.AccountInfo.IsAuthenticated = true;
                self.authService.SetInfo();
                self.stateService.go('root.home');
            };
            var error = function (error) {
                console.log(error);
            };
            var req = "username=" + self.User.Username + "&password=" + self.User.Password + "&grant_type=password";
            self.httpService.post('/token', req, config).then(success, error);
        };
        SigninController.$inject = ["$location", "$http", "$q", "AuthService", "$state"];
        return SigninController;
    }());
    App.SigninController = SigninController;
    angular.module("app").controller("SigninController", SigninController);
})(App || (App = {}));
//# sourceMappingURL=SigninController.js.map