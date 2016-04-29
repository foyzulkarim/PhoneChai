var App;
(function (App) {
    var AppConfig = (function () {
        function AppConfig($stateProvider, $urlRouterProvider) {
            this.stateProvider = $stateProvider;
            this.urlProvider = $urlRouterProvider;
            console.log('i m in appconfig.ts');
            $stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>",
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partials/home/home.tpl.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
                .state("root.signin", {
                url: "/signin",
                templateUrl: "partials/account/signin.tpl.html",
                controller: "SigninController",
                controllerAs: "vm"
            })
                .state("root.phone-entry", {
                url: "/phone-entry",
                templateUrl: "partials/phone/phone-entry.tpl.html",
                controller: "PhoneController",
                controllerAs: "vm"
            })
                .state("root.phone-edit", {
                url: "/phone-edit/:id",
                templateUrl: "partials/phone/phone-entry.tpl.html",
                controller: "PhoneController",
                controllerAs: "vm"
            })
                .state("root.phone-list", {
                url: "/phone-list",
                templateUrl: "partials/phone/phone-list.tpl.html",
                controller: "PhoneQueryController",
                controllerAs: "vm"
            });
        }
        AppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
        return AppConfig;
    }());
    App.AppConfig = AppConfig;
    angular.module("app", ["ui.router", "ngResource", "LocalStorageModule"]);
    angular.module("app").config(AppConfig);
})(App || (App = {}));
//# sourceMappingURL=App.Config.js.map