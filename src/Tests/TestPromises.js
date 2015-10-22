var Q = require('Q');
var database = require('../TediousDatabase.js');
var db = new database();

function one() {

    var deferred = Q.defer(); // Don't worry yet what this is
    // until after you understand the flow

    console.log("Starting one's ajax");
    db.ConnectAndQuery("select * from Task", function () {
        console.log('Finished with one. Ready to call next.');
        deferred.resolve();
    });

    // The deferred object has a "promise" member, 
    // which has a "then" function
    return deferred.promise;
}

function two() {
    var deferred = Q.defer();
    console.log("Starting two's ajax");
    db.ConnectAndQuery("select * from Task", function () {
        console.log('Finished with two. Ready to call next.');
        deferred.resolve();
    });
    // The deferred object has a "promise" member,
    // which has a "then" function
    return deferred.promise;
}

console.log("being");

one()
    .then(two)