module App {
    export class PhoneQueryController {

        Phones: Phone[];
        SearchRequest: SearchRequest;

        private phoneService: PhoneService;
        static $inject = ["PhoneService"];
        constructor(phoneService: PhoneService) {
            this.phoneService = phoneService;
            this.Phones = [];
            this.SearchRequest = new SearchRequest("", "Name", "False", "");
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

            self.phoneService.Search(self.SearchRequest)
                .then(successCallback, errorCallback);
        }
    }

    angular.module('app').controller('PhoneQueryController', PhoneQueryController);
}