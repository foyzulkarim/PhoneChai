module App {
    export class PhoneQueryController {

        Phones: Phone[];

        private phoneService: PhoneService;
        static $inject = ["PhoneService"];
        constructor(phoneService: PhoneService) {
            this.phoneService = phoneService;
            this.Phones = [];
            this.Get();
        }

        Get() {
            var self = this;

            var successCallback = result => {
                self.Phones = result.data as Phone[];
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.phoneService.Get()
                .then(successCallback, errorCallback);
        }
    }

    angular.module('app').controller('PhoneQueryController', PhoneQueryController);
}