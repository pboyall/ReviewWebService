var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'radmin',
    password: 'password',
    port: '1433',
    server: 'PW-000011',
    options: {
        encrypt: false,
        database: 'ReviewProject',
        rowCollectionOnDone: true
    }
};

console.log('Get Connection');
var connection;

var database = function () {};

//No checks on SQL - just a Proof of Concept this

database.prototype.getConnection = function getConnection() {
    connection = new Connection(config);
    return connection;
};



database.prototype.ConnectAndQuery = function ConnectAndQuery(sql, callback) {
    console.log('Connect and Query SQL: ' + sql);
    var thesql = sql;
    connection = this.getConnection();
    connection.on('connect', function (err) {
        // If no error, then good to go...
        console.log("Conected - execute" + sql);
        rows = executeStatement(sql, callback);
        return rows;
    });

    connection.on('error', function (err) {
        console.log("Error Connecting: " + err);
    });

    connection.on('debug', function (text) {
        console.log("Debug Connecting: " + text);
    });

    callback();
};

//Internal Function

function executeStatement(sql, callback) {
    console.log('execute statement');
    request = new Request(sql, function (err, rowCount, rows) {
        if (err) {
            console.log("Request failed: " + err);
        } else {
            console.log(rowCount + ' rows');
            return rows;
        }

    });
    var rowcounter = 0;
    request.on('row', function (columns) {
        rowcounter++;
        console.log('Row' + rowcounter);
        columns.forEach(function (column) {
            console.log('Col ' + column.metadata.colName + ' : ' + column.value);
        });
    });

    connection.execSql(request);
    request.on('done', function (rowCount, more, rows) {
        console.log('Database done');
        console.log('Total rows' + rowCount);
        callback();
    });


}

module.exports = database;