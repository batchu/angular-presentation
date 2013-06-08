//'use strict';
//
///* Services */
//billRive.factory('billService',function($http){
//    
//    return {
//        
//        getBills: function(callback){
//            $http.get('http://localhost:8080/billrive-service/rest/2/bills/').success(callback);
//        }
//    };
//});

billRive.factory('billService',function(){
   var factory = {};
//   var getBills=function(){
//    var bills= [
//        {title:"Walmart",date:"05/03/2013",total:"55.84"},
//        {title:"Costco",date:"05/01/2013",total:"35.00"},
//        {title:"Sams",date:"04/21/2013",total:"101.85"},
//        {title:"Farmers Market",date:"04/03/2013",total:"43.5"}
//    ];


var bills = [{
    "data": [
        {
            "id": 1,
            "title": "Walmart",
            "date": {
                "year": 2013,
                "dayOfMonth": 3,
                "dayOfWeek": 7,
                "era": 1,
                "dayOfYear": 34,
                "weekOfWeekyear": 5,
                "minuteOfDay": 61,
                "minuteOfHour": 1,
                "monthOfYear": 2,
                "millisOfSecond": 0,
                "yearOfCentury": 13,
                "secondOfDay": 3660,
                "centuryOfEra": 20,
                "millisOfDay": 3660000,
                "secondOfMinute": 0,
                "weekyear": 2013,
                "hourOfDay": 1,
                "yearOfEra": 2013,
                "zone": {
                    "uncachedZone": {
                        "fixed": false,
                        "cachable": true,
                        "id": "America/Denver"
                    },
                    "fixed": false,
                    "id": "America/Denver"
                },
                "millis": 1359878460000,
                "chronology": {
                    "zone": {
                        "uncachedZone": {
                            "fixed": false,
                            "cachable": true,
                            "id": "America/Denver"
                        },
                        "fixed": false,
                        "id": "America/Denver"
                    }
                },
                "beforeNow": true,
                "afterNow": false,
                "equalNow": false
            },
            "billPayerId": 2,
            "notes": "Sample Notes",
            "billFinances": {
                "billPayerId": 1,
                "billItemEntry": [
                    {
                        "itemDescriptionId": 1,
                        "itemDescription": "Canola Oil",
                        "userIdAndLiableCost": [
                            {
                                "userId": 2,
                                "liableCost": 10
                            },
                            {
                                "userId": 3,
                                "liableCost": 20
                            }
                        ]
                    },
                    {
                        "itemDescriptionId": 2,
                        "itemDescription": "Taco Bell",
                        "userIdAndLiableCost": [
                            {
                                "userId": 4,
                                "liableCost": 50
                            },
                            {
                                "userId": 5,
                                "liableCost": 40
                            }
                        ]
                    }
                ],
                "billTotal": 30
            },
            "groupId": 2
        },
        {
            "id": 2,
            "title": "Costco",
            "date": {
                "year": 2014,
                "dayOfMonth": 3,
                "dayOfWeek": 1,
                "era": 1,
                "dayOfYear": 34,
                "weekOfWeekyear": 6,
                "minuteOfDay": 61,
                "minuteOfHour": 1,
                "monthOfYear": 2,
                "millisOfSecond": 0,
                "yearOfCentury": 14,
                "secondOfDay": 3660,
                "centuryOfEra": 20,
                "millisOfDay": 3660000,
                "secondOfMinute": 0,
                "weekyear": 2014,
                "hourOfDay": 1,
                "yearOfEra": 2014,
                "zone": {
                    "uncachedZone": {
                        "fixed": false,
                        "cachable": true,
                        "id": "America/Denver"
                    },
                    "fixed": false,
                    "id": "America/Denver"
                },
                "millis": 1391414460000,
                "chronology": {
                    "zone": {
                        "uncachedZone": {
                            "fixed": false,
                            "cachable": true,
                            "id": "America/Denver"
                        },
                        "fixed": false,
                        "id": "America/Denver"
                    }
                },
                "beforeNow": false,
                "afterNow": true,
                "equalNow": false
            },
            "billPayerId": 2,
            "notes": "Second sample Notes",
            "billFinances": {
                "billPayerId": 2,
                "billItemEntry": [],
                "billTotal": 90
            },
            "groupId": 2
        }
    ]
}];

      var payers= [
{name:'John Doe'},
{name:'Kristen Stewart'},
{name:'Trevor Pott'},
{name:'Hilda Hess'},
{name:'Gavin Mays'}
];

var friends= [
{name:'John Doe'},
{name:'Kristen Stewart'},
{name:'Trevor Pott'},
{name:'Hilda Hess'},
{name:'Gavin Mays'}
];


var groups= [
{name:'SLC Roommates'},
{name:'Denver Old Buddies'},
{name:'Ski Club'},
{name:'Family'},
{name:'India'}
];

 factory.getBills=function(){
     return bills;
 };
 
  factory.getPayers=function(){
     return payers;
 };
 
  factory.getFriends=function(){
     return friends;
 };
 
  factory.getGroups=function(){
     return groups;
 };
 

 return factory;
});