module App {
    export class PhoneController {

        Phone: Phone;
        private phoneService: PhoneService;
        private stateParamService: angular.ui.IStateParamsService;

        static $inject = ["PhoneService","$stateParams"];
        constructor(phoneService: PhoneService, stateParams: angular.ui.IStateParamsService) {
            this.Phone = new Phone();
            this.phoneService = phoneService;
            this.stateParamService = stateParams;

            if (this.stateParamService["id"]!=null) {
                // call to the server here.
               
                var id = this.stateParamService["id"];
                this.phoneService.GetDetail(id)
                    .then((success: any) : void => {
                        console.log(success);
                        this.Phone = success.data;
                    }, error => {
                        console.log(error);
                    });
            }
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