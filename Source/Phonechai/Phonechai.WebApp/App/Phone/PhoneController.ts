module App {
    export class PhoneController {

        Phone: Phone;
        private phoneService : PhoneService;
        static $inject = ["PhoneService"];
        constructor(phoneService: PhoneService) {
            this.Phone = new Phone();
            this.phoneService = phoneService;
        }

        Save() {
            console.log(this.Phone);
            var self = this;

            var successCallback = result => {
                console.log(result);
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.phoneService.Save(self.Phone)
                .then(successCallback, errorCallback);
        }
    }

    angular.module('app').controller('PhoneController', PhoneController);
}