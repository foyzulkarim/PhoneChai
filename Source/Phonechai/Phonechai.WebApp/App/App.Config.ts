module App {
    export class AppConfig {

        private stateProvider: angular.ui.IStateProvider;
        private urlProvider: angular.ui.IUrlRouterProvider;

        static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
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
                    controllerAs:"vm"
                }).state("root.signin", {
                    url: "/signin",
                    templateUrl: "partials/account/signin.tpl.html"
                });
        }
    }

    angular.module("app", ["ui.router", "ngResource"]);
    angular.module("app").config(AppConfig);
}