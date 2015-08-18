var app = angular.module('starter.services', [])

app.service('requestHandler', ['$http', function($http) {
    var dataObj;
    var addr;
    return {
        postJSON: function(action, foil, epee, saber, url) {
            var options = {
                "club": "BOSTN FNCNG. CLB.",
                "foil": foil,
                "epee": epee,
                "saber": saber
            };
            addr = 'http://152.2.31.154:12124';
            dataObj = {
                "action": action,
                "URL": url,
                "options": options
            };
            return $http.post(addr, dataObj);
        },
        refreshJSON: function() {
            dataObj.action = 1;
            return $http.post(addr, dataObj);
        }
    };
}]);

app.service('jsonHandler', [function() {
    var json = null;
    var activeFencer = null;
    var summaryJSON = null;
    var poolsJSON = null;
    return {
        getJSON: function() {
            return json;
        },
        setJSON: function(val) {
            json = val;
        },
        setActiveFencer: function(destFencer) {
            activeFencer = destFencer;
        },
        getActiveFencer: function() {
            return activeFencer;
        },
        processActiveFencer: function() {
            var name = activeFencer.firstName.trim() + ' ' + activeFencer.lastName.charAt(0) + activeFencer.lastName.substring(1).toLowerCase();
            var prettifyJSON = function(prettifier){
                var bigObj = {};
                for(key in prettifier){
                    var smallObj = {};
                    for(associate in prettifier[key]){
                        if(prettifier[key][associate] !== null && prettifier[key][associate] !== "" && prettifier[key][associate] !== undefined){
                            smallObj[associate] = prettifier[key][associate];
                        }
                    }
                    if(Object.keys(smallObj).length !== 0)
                        bigObj[key] = smallObj;
                }
                return bigObj;
            };
            summaryJSON = {
                "Fencer Summary" : {
                    "Name" : name,
                    "Event": activeFencer.event,
                    "National Rank": activeFencer.nationalRank,
                    "Foil Classification" : activeFencer.foilClassification,
                    "Epee Classification" : activeFencer.epeeClassification,
                    "Saber Classification" : activeFencer.sabreClassification

                },
                "Round 1": {
                    Seeding: activeFencer.round1seeding
                },
                "Round 2": {
                    Seeding: activeFencer.round2seeding,
                    Status: activeFencer.round2status
                },
                "Final Results": {
                    "Classification Earned": activeFencer.classificationEarned,
                    "Final Result" : activeFencer.finalResult
                }
                
            };
            summaryJSON = prettifyJSON(summaryJSON);
            poolsJSON = activeFencer.poolJSON;
        },
        getSummaryJSON: function() {
            return summaryJSON;
        },
        getPoolsJSON: function() {
            return poolsJSON;
        }
    };
}]);

app.service('settingsHandler', [function() {


}]);
