// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";
    export class SigninRequest {
        Username: string;
        Password: string;
        grant_type: string = "password";
    }


    export class SigninController {
        Title: string = "SigninController";
        User: SigninRequest;

        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        private authService: AuthService;
        private  stateService: angular.ui.IStateService;
        static $inject: string[] = ["$location", "$http", "$q","AuthService","$state"];

        constructor(private $location: ng.ILocationService, private http: angular.IHttpService, private q: angular.IQService, auth: AuthService,state: angular.ui.IStateService) {
            this.httpService = http;
            this.qService = q;
            this.authService = auth;
            this.stateService = state;
            this.Activate();
        }

        Activate() {
            if (this.authService.IsAuthenticated()) {
                this.stateService.go('root.home');
            }
            console.log('i m in signin controller activate method');
        }

        Signin(): void {
            console.log('i m going to post the values');
            console.log(this.User);
            var self = this;

            var config: angular.IRequestShortcutConfig = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
            var success = function (result) {                
                var token = result.data.access_token;
                console.log(token);
                if (!self.authService.AccountInfo) {
                    self.authService.AccountInfo = new AccountInfo();
                }
                self.authService.AccountInfo.Username = result.data.userName;
                self.authService.AccountInfo.AccessToken = token;
                self.authService.AccountInfo.IsAuthenticated = true;
                self.authService.SetInfo();
                self.stateService.go('root.home');
            }

            var error = function (error) {
                console.log(error);
            }

            var req = "username=" + self.User.Username + "&password=" + self.User.Password + "&grant_type=password";
            self.httpService.post('/token', req, config).then(success, error);
        }
    }

    angular.module("app").controller("SigninController", SigninController);
}