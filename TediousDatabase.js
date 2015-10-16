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

function getConnection() {
    connection = new Connection(config);
    return connection;
}

module.exports.ConnectAndQuery = function (sql, callback) {
    console.log('Connect and Query SQL: ' + sql);
    connection = getConnection();
    connection.on('connect', function (err, sql, callback) {
        // If no error, then good to go...
        console.log("Conected - execute" + sql);
        executeStatement(sql, callback);
    });

    connection.on('error', function (err) {
        console.log("Error Connecting: " + err);
    });

    connection.on('debug', function (text) {
        console.log("Debug Connecting: " + text);
    });

    callback();
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