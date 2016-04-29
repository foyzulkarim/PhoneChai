var App;
(function (App) {
    var HomeController = (function () {
        function HomeController() {
            console.log('I am in home controller constructor');
        }
        HomeController.prototype.ShowTime = function () {
            var time = new Date();
            this.Time = time.toDateString();
        };
        HomeController.$inject = [];
        return HomeController;
    }());
    App.HomeController = HomeController;
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map