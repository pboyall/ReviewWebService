var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var bDebug = true;

var config = {
    userName: 'radmin',
    password: 'password',
    port: '1433',
    server: 'PW-000011',
    options: {
        encrypt: false,
        database: 'ReviewProject',
        rowCollectionOnDone: true,
        rowCollectionOnRequestCompletion: true,
        useColumnNames: false
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
        executeStatement(sql, callback);
    });

    connection.on('error', function (err) {
        console.log("Error Connecting: " + err);
    });

    connection.on('debug', function (text) {
        console.log("Debug Connecting: " + text);
    });
};

//Internal Function

function executeStatement(sql, callback) {
    console.log('execute statement');
    var retval = '';
    request = new Request(sql, function (err, rowCount, rows) {
        if (err) {
            console.log("Request failed: " + err);
        } else {
            var rowarray = [];
            console.log(rowCount + ' rows');
            //callback(rows);
            //return rows;
        }
        connection.close();

    });
    var rowcounter = 0;
    request.on('row', function (columns) {
        rowcounter++;
        console.log('Row' + rowcounter);

        var colval = "";
        //if (bDebug) {
        columns.forEach(function (column) {
            //console.log('Col ' + column.metadata.colName + ' : ' + column.value);
            if (colval.length > 0) {
                colval = colval + ","
            }
            colval = colval + column.metadata.colName + ' : ' + column.value;
        });
        if (retval.length > 0) {
            retval = retval + ",";
        }
        retval = retval + "{" + colval + " }";
        //}
    });
    /*
        request.on('done', function (rowCount, more, rows) {
            console.log('Database done');
            console.log('Total rows' + rowCount);
            console.log(Object.getPrototypeOf(rows));
            //callback(rows);

        });
    */
    request.on('doneInProc', function (rowCount, more, rows) {
        console.log('In Proc Database done');
        //console.log('InProc Total rows' + rowCount);
        //console.log(Object.getPrototypeOf(rows));
        //console.log(rows);
        console.log(retval);
        //callback(rows, rowCount);
        callback(retval, rowCount);
    });
    /*
        request.on('doneProc', function (rowCount, more, rows) {
            console.log('Proc Database done');
            console.log('Proc Total rows' + rowCount);
            console.log(Object.getPrototypeOf(rows));
            callback(rows);

        });
    */
    connection.execSql(request);
}

module.exports = database;