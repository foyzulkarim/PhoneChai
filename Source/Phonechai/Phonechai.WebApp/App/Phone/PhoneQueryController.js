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