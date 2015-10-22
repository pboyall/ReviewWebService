//Need to implement connection pooling
var ConnectionPool = require('tedious-connection-pool');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var bDebug = true;
var poolConfig = {
    min: 2,
    max: 4,
    log: true
};

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

var pooling = true; //Set to false to not use connection pooling

var connection;
var database = function () {};

//No checks on SQL - just a Proof of Concept this
//The idea of this function is to let us swap in connection pooling later
database.prototype.getConnection = function getConnection() {
    connection = new Connection(config);
    return connection;
};

database.prototype.ConnectAndQuery = function ConnectAndQuery(sql, callback) {
    console.log('Connect and Query SQL: ' + sql);
    var thesql = sql;
    if (!pooling) {
        //Do a check here to see if connection already open
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
    } else {
        executePooledStatement(sql, callback);
    }

};

//Internal Functions

//Pooled querying - theoretically 

function executePooledStatement(sql, callback) {
    console.log('execute pool');
    var retval = '';
    var rowcounter = 0;
    var pool = new ConnectionPool(poolConfig, config);
    pool.acquire(function (err, connection) {
        if (err) {
            console.error(err);
        } else {
            var request = new Request(sql, function (err, rowCount, rows) {
                if (err) {
                    console.log("Request failed: " + err);
                } else {
                    console.log(rowCount + ' rows');
                    connection.release();
                }
            });
        }
        request.on('row', function (columns) {
            rowcounter++;
            console.log('Row' + rowcounter);

            var colval = "";
            //if (bDebug) {
            columns.forEach(function (column) {
                //console.log('Col ' + column.metadata.colName + ' : ' + column.value);
                if (colval.length > 0) {
                    colval = colval + ",";
                }
                colval = colval + column.metadata.colName + ' : ' + column.value;
            });
            if (retval.length > 0) {
                retval = retval + ",";
            }
            retval = retval + "{" + colval + " }";
            //}
        });

        request.on('doneInProc', function (rowCount, more, rows) {
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log('In Proc Database done');
            console.log(retval);
            console.log('Close connection');
            connection.release();

            callback(retval, rowCount);
            console.log('-------------------------------------------------------');
        });

        connection.execSql(request);

    });

    pool.on('error', function (err) {
        console.error(err);
    });

}

//Non Pooled version - might be more reliable but the calling class has to use promises so only one at a time

function executeStatement(sql, callback) {
    console.log('execute statement');
    var retval = '';
    //Check state of connection
    //if connect.s
    var request = new Request(sql, function (err, rowCount, rows) {
        if (err) {
            console.log("Request failed: " + err);
        } else {
            var rowarray = [];
            console.log(rowCount + ' rows');
            //connection.close();
            connection.release();
            //callback(rows);
            //return rows;
        }
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
                colval = colval + ",";
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
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log('In Proc Database done');
        //console.log('InProc Total rows' + rowCount);
        //console.log(Object.getPrototypeOf(rows));
        //console.log(rows);
        console.log(retval);
        //callback(rows, rowCount);
        //Not sure if this should be wrapped in its own function to allow for connection pooling.
        console.log('Close connection');
        connection.close();

        callback(retval, rowCount);
        console.log('-------------------------------------------------------');
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