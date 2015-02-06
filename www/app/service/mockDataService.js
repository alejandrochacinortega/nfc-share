angular
    .module('common.services', ['ngCordova.plugins.nfc'])
    .factory('MockDataService', ['$rootScope', '$ionicPlatform', '$cordovaNfc', '$cordovaNfcUtil', MockDataService]);


/* @ngInject */
function MockDataService($rootScope, $ionicPlatform, $cordovaNfc, $cordovaNfcUtil) {

    var receipts = [
        {
            receiptId: "1",
            store: 'ICA',
            amount: '80NOK',
            "items": [
                {
                    "name": "Milk",
                    "price": "20 NOK"
                },
                
                {
                    "name": "Pizza",
                    "price": "60 NOK"
                }],
            location: 'Oslo',
            tlf: '24 11 61 70'
        },
        {
            receiptId: "2",
            store: 'Meny',
            amount: '100NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Butter",
                    "price": "40 NOK"
                },

                {
                    "name": "Pizza Grandiosa",
                    "price": "60 NOK"
                }]
        },

        {
            receiptId: "3",
            store: 'Kiwi',
            amount: '200NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Meet",
                    "price": "60 NOK"
                },

                {
                    "name": "Cheese",
                    "price": "140 NOK"
                }],
        },
        {
            receiptId: "4",
            store: 'RIMI',
            amount: '210NOK',
            location: 'Oslo',
            tlf: '24 11 64 70',
            "items": [
                {
                    "name": "Chicken",
                    "price": "100 NOK"
                },

                {
                    "name": "Pizza",
                    "price": "110 NOK"
                }]
        },
        {
            receiptId: "5",
            store: 'Kiwi',
            amount: '100NOK',
            location: 'Oslo',
            tlf: '21 11 61 70',
            "items": [
                {
                    "name": "Potatoes",
                    "price": "50 NOK"
                },

                {
                    "name": "Milk",
                    "price": "50 NOK"
                }],
        },
        {
            receiptId: "6",
            store: 'ICA',
            amount: '120NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Spinach",
                    "price": "20 NOK"
                },
                {
                    "name": "Doritos",
                    "price": "40 NOK"
                },
                {
                    "name": "Shampoo",
                    "price": "60 NOK"
                }]
        },
        {
            receiptId: "7",
            store: 'ICA',
            amount: '20NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Milk",
                    "price": "20 NOK"
                }]
        },
        {
            receiptId: "8",
            store: 'KIWI',
            amount: '50NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Milk",
                    "price": "20 NOK"
                },

                {
                    "name": "Pizza",
                    "price": "30 NOK"
                }]
        },
        {
            receiptId: "9",
            store: 'REMA 1000',
            amount: '28NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Milk",
                    "price": "20 NOK"
                },

                {
                    "name": "Chocolate",
                    "price": "8 NOK"
                }]
        },
        {
            receiptId: "10",
            store: 'ICA',
            amount: '20NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Milk",
                    "price": "20 NOK"
                }]
        },
        {
            receiptId: "11",
            store: 'ICA',
            amount: '220NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Fish",
                    "price": "120 NOK"
                },

                {
                    "name": "Pizza",
                    "price": "100 NOK"
                }]
        },
        {
            receiptId: "12",
            store: 'RIMI',
            amount: '20NOK',
            location: 'Oslo',
            tlf: '24 11 61 70',
            "items": [
                {
                    "name": "Persille",
                    "price": "20 NOK"
                }]
        }
    ];

    function getData() {
        return receipts;
    }

    function getReceipt(receiptId) {
        var receipt = _.find(receipts, { 'receiptId' : receiptId});
        return receipt;
    }

    function getSingleData() {
        var d =
            {
                receiptId: "1",
                store: 'ICA',
                amount: '80NOK',
                "items": [
                    {
                        "name": "Milk",
                        "price": "20 NOK"
                    },

                    {
                        "name": "Pizza",
                        "price": "60 NOK"
                    }],
                location: 'Oslo',
                tlf: '24 11 61 70' }

        ;
        return d;
    }

    function shareMessage() {

        var tag = {};
        $ionicPlatform.ready(function() {
            $cordovaNfc.then(function(nfcInstance){

               /* var data = {
                    name: "Hue Settings",
                    kind: "mime",
                    type: 'text/hue',
                    record: '',
                    data: JSON.stringify({
                        "1":
                        {"state":
                        {"on":true,"bri":65,"hue":44591,"sat":254}
                        },
                        "2":
                        {"state":
                        {"on":true,"bri":254,"hue":13122,"sat":211}
                        },
                        "3":
                        {"state":
                        {"on":true,"bri":255,"hue":14922,"sat":144}
                        }
                    })
                } ;
*/
                var record = ndef.mimeMediaRecord('text/json', JSON.stringify({
                    "1":
                    {"state":
                    {"on":true,"bri":65,"hue":44591,"sat":254}
                    },
                    "2":
                    {"state":
                    {"on":true,"bri":254,"hue":13122,"sat":211}
                    },
                    "3":
                    {"state":
                    {"on":true,"bri":255,"hue":14922,"sat":144}
                    }

                    /*{
                     "name": "ICA Supermarket",
                     "amount": "200 NOK",
                     "phone": "47 401 10 318",
                     "items": {
                     "item_one":
                     {
                     "name": "Milk",
                     "price": "20 NOK"
                     },
                     "item_two":
                     {
                     "name": "Pizza",
                     "price": "60 NOK"
                     }
                     },
                     "location": "Karenlyst Allé 58, 0277 Oslo"
                     }*/
                }));

                nfcInstance.share([record])
                console.log('record: ', record);
                    var ndefMessage = ndef.decodeMessage(record.payload);

                    console.log('Record Payload : ', nfc.bytesToString(record.payload));
                })
                    .then(
                    function(event){
                        console.log("bound success");
                        console.log('event: ', event)
                    },
                    function(err){
                        console.log("error: ", err);
                    });
            });
    //});
        /*return tag*/
    };

    ////////////////

    var service = {
        getData : getData,
        getSingleData: getSingleData,
        getReceipt: getReceipt,
        shareMessage: shareMessage
    };

    return service;





}