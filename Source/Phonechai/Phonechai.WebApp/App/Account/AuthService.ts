// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    export class AccountInfo {
        Username: string;
        AccessToken: string;
    }
    
    export class AuthService  {
        private localStorageService: angular.local.storage.ILocalStorageService;
        AccountInfo: AccountInfo;
        static $inject: string[] = ["localStorageService"];
        constructor(localStorageService: angular.local.storage.ILocalStorageService) {
            this.AccountInfo = new AccountInfo();
            this.localStorageService = localStorageService;
        }

        SetInfo(acc: AccountInfo): void {
            var self = this;
            self.localStorageService.set("AccountInfo", acc);
        }


    }

    angular.module("app").service("AuthService", AuthService);
}