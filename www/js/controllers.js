var app = angular.module('starter.controllers', [])


app.controller('mainController', ['$state', 'jsonHandler', 'requestHandler', function($state, jsonHandler, requestHandler) {
    this.goBack = function() {
        $state.go('fencer_list');
    }
    this.refresh = function() {
        var request = requestHandler.refreshJSON();
        request.success(function(data) {
            jsonHandler.setJSON(data);
            $state.go('fencer_list');
        })
    };
}]);

app.controller('optionsController', ['$state', 'jsonHandler', 'requestHandler', function($state, jsonHandler, requestHandler) {
    this.foil = false;
    this.epee = false;
    this.saber = false;
    this.url = '';
    this.getVals = function() {
        requestHandler.postJSON(0, this.foil, this.epee, this.saber, this.url).success(function(data) {
            jsonHandler.setJSON(data);
            $state.go('fencer_list');
        }).error(function(data) {
            alert('Something went Wrong!');
        });
    };
}]);

app.controller('listController', ['$state', 'jsonHandler', function($state, jsonHandler) {
    this.jayson = jsonHandler.getJSON();
    this.goToActive = function(fencer) {
        jsonHandler.setActiveFencer(fencer);
        jsonHandler.processActiveFencer();
        $state.go('tab.summary');
    };
}]);

app.controller('summaryController', ['jsonHandler', function(jsonHandler){
    this.json = jsonHandler.getSummaryJSON();
}]);

app.controller('settingsController', ['jsonHandler', function(jsonHandler){

}]);

app.controller('poolsController', ['jsonHandler', function(jsonHandler) {
    this.json = jsonHandler.getPoolsJSON();
    this.pool = this.json.pool;
    this.poolNumber = this.json['pool number'];
    this.strip = this.json['strip assignment'];
}]);

app.controller('seedingsController', ['jsonHandler', function(jsonHandler){
   this.json = jsonHandler.getSummaryJSON();

}]);

