var exports = module.exports = {};

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'radmin',
    password: 'password',
    port: '1433',
    server: 'PW-000011',
    options: {
        encrypt: false,
        database: 'ReviewProject'
    }
};

console.log('Get Connection');

var connection;

//No checks on SQL - just a Proof of Concept this

module.exports.query = function (sql, callback) {
    console.log('Query SQL: ' + sql);
    connection = new Connection(config);
    console.log('got connection');
    connection.on('connect', function (err) {
        // If no error, then good to go...
        console.log("Execute statement: " + sql);
        executeStatement(sql, callback);
    });

    connection.on('error', function (err) {
        console.log("Error Connecting: " + err);
    });

    connection.on('debug', function (text) {
        console.log("Debug Connecting: " + text);
    });
};

function executeStatement(sql, callback) {
    console.log('execute statement');
    request = new Request(sql, function (err, rowCount) {
        if (err) {
            console.log("Request failed: " + err);
        } else {
            console.log(rowCount + ' rows');
            callback();
        }

    });

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            console.log('Row ' + column.value);
        });
    });

    connection.execSql(request);
    request.on('done', function () {
        console.log('Database done');
        callback();
    });


}