var TYPES = require('tedious').TYPES;
var Request = require('tedious').Request;
var Qq = require('q');
var updateD = function () {};

updateD.prototype.updateData =
    function updateData(queryInfo, insertParameters, pool) {


        var connectStat;
        var deferred = Qq.defer(); //Tell calling function that this has promise logic here as well.

        pool.acquire(function (err, connection) {
            if (err) {
                console.error(err);
                deferred.resolve("Connection Error" + err);
            } else {
                connection.on('end', function () {
                    console.log("SQL-NODE END");
                });

                connection.on('error', function (err) {
                    console.log("SQL-NODE ERROR - " + err);
                });

                connection.on('debug', function (msgText) {
                    console.log("SQL-NODE DEBUG - " + msgText);
                });

                connection.on('infoMessage', function (info) {
                    console.log('SQL-NODE info: ' + info.message);
                });

                connection.on('errorMessage', function (error) {
                    console.log('SQL-NODE info: ' + error.message);
                });

                connection.on('connect', function (err) {
                    if (err) {
                        console.log("SQL-NODE: connection error: " + err);
                        deferred.resolve("No Connection");
                    } else {
                        console.log("SQL-NODE: connected");
                        connectStat = "connect";
                        var request = new Request(queryInfo, function (err, rowCount, rows) {

                            if (err) {
                                console.log("Request error executeStatement -- " + err);
                                deferred.resolve("Request Error" + err);
                                connection.release();
                            } else {

                                //When rowcount is greater than 0 then rowCount represents the number of records updated.

                                console.log('Request OK your done rowCount: ' + rowCount);

                                connection.release();

                                deferred.resolve("Query Complete" + rowCount);

                            }

                        });

                        for (var property in insertParameters) {
                            var obj = insertParameters[property];
                            console.log(property + obj.value + obj.type.name);
                            request.addParameter(property, TYPES[obj.type.name], obj.value);

                        }

                        connection.execSql(request);

                    }

                });
            }
            return deferred.promise; //Close off that this function has promise logic.

        });
    };
module.exports = updateD();