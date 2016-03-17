// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    interface ISigninController {
        Title: string;
        Activate: () => void;
    }

    class SigninController implements ISigninController {
        Title: string = "SigninController";

        static $inject: string[] = ["$location"];

        constructor(private $location: ng.ILocationService) {
            this.Activate();
        }

        Activate() {
            console.log('i m in signin controller activate method');
        }
    }

    angular.module("app").controller("SigninController", SigninController);
}