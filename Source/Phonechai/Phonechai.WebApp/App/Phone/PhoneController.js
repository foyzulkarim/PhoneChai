var App;
(function (App) {
    var PhoneController = (function () {
        function PhoneController(phoneService, stateParams) {
            var _this = this;
            this.Phone = new App.Phone();
            this.phoneService = phoneService;
            this.stateParamService = stateParams;
            if (this.stateParamService["id"] != null) {
                // call to the server here.
                var id = this.stateParamService["id"];
                this.phoneService.GetDetail(id)
                    .then(function (success) {
                    console.log(success);
                    _this.Phone = success.data;
                }, function (error) {
                    console.log(error);
                });
            }
        }
        PhoneController.prototype.Save = function () {
            console.log(this.Phone);
            var self = this;
            var successCallback = function (result) {
                console.log(result);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.phoneService.Save(self.Phone)
                .then(successCallback, errorCallback);
        };
        PhoneController.$inject = ["PhoneService", "$stateParams"];
        return PhoneController;
    }());
    App.PhoneController = PhoneController;
    angular.module('app').controller('PhoneController', PhoneController);
})(App || (App = {}));
//# sourceMappingURL=PhoneController.js.map