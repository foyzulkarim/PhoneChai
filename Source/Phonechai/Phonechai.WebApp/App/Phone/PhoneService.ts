// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";
     
    export class PhoneService  {

        private httpService: angular.IHttpService;
        private qService: angular.IQService;
        private authService: AuthService;

        static $inject: string[] = ["$http","$q","AuthService"];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService,auth:AuthService) {
            this.httpService = $http;
            this.qService = $q;
            this.authService = auth;
        }

        Save(data : Phone) : angular.IPromise<any> {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return  deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return  deffered.reject(error);
            };

            self.httpService.post("/api/phone", data)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

        Get() {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };
            var config: angular.IRequestShortcutConfig = { headers: { 'Authorization': "Bearer "+self.authService.AccountInfo.AccessToken } };
            self.httpService.get("/api/phonequery",config)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }

        GetDetail(id) {
            var self = this;
            var deffered = this.qService.defer();

            var successCallback = result => {
                console.log(result);
                return deffered.resolve(result);
            };
            var errorCallback = error => {
                console.log(error);
                return deffered.reject(error);
            };

            self.httpService.get("/api/phonequery?id="+id)
                .then(successCallback, errorCallback);
            return deffered.promise;
        }
    }

    angular.module("app").service("PhoneService", PhoneService);
}