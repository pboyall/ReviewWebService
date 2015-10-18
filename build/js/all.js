"use strict";

/*'use strict';

console.log("Begin Web Service");
//Sanity Kill
process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception ' + err + ' , quitting');
    process.exit(1);
});

var database = require('sqlite.js');

//POC DB Query Code

var callmeandquit = function () {
    console.log("Done - exit");
    process.exit();
};

var callme = function () {
    console.log("Done - keep running");
};


var sql = "select * from Task";

//database.
ConnectAndQuery(sql, callmeandquit);


//database.query(sql, callme);

//End POC



//Initial Attempt at making a repository work

var taskRepository = require('./TaskRepository.js');
var taskAssignment = require('./TaskAssignment.js');

//3 refers to WorkFlowProcessId = it's magic

var wibble = new taskRepository({
    WorkflowProcessId: 3,
    dbContext: database
});

var _TaskId = 1;
var _DateAssigned = '15/1/2015';
var _GroupId = '1';
var _AccessType = 1;
var _NodeId = 1;

var theTaskAssignment = new taskAssignment({
    TaskId: _TaskId,
    DateAssigned: _DateAssigned,
    GroupId: _GroupId,
    AccessType: _AccessType,
    NodeId: _NodeId
});

wibble.save(theTaskAssignment, callme);

//As this is node, it keeps running unless we exit

process.exit();


var express = require('express');
var app = express();

console.log("Registering endpoint: /");
app.get('/', function (req, res) {
    res.send('hello ROOT world');
});

console.log("Registering endpoint: /stubbed");
app.get('/stubbed', function (req, res) {
    res.send('hello STUBBED');
});

console.log("Registering endpoint: /testing");
app.get('/testing', function (req, res) {
    res.send('this is a test endpoint');
});

console.log("Registering endpoint: /jsonendpoint");
app.get('/jsonendpoint', function (req, res) {
    res.json({
        "mykey": "myvalue",
        "testy": "something",
        "exnum": 123
    });
});

app.get('/data', function (req, res) {
    db.get("SELECT value FROM counts", function (err, row) {
        res.json({
            "count": row.value
        });
    });
});

app.post('/data', function (req, res) {
    db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function (err, row) {
        if (err) {
            console.err(err);
            res.status(500);
        } else {
            res.status(202);
        }
        res.end();
    });
});


app.listen(3000);*/
"use strict";

var fs = require("fs");
var file = "reviewdb.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var sql = "select * from Task";

//Doesn't work globally

var database = function database() {};

//Replace with connection pooling later

database.prototype.getConnection = function () {
    var db = new sqlite3.Database(file);
    return db;
};

database.prototype.ConnectAndQuery = function (sql, callback) {
    var db = new sqlite3.Database(file);
    console.log("Query SQL : " + sql);
    console.log(file);
    db.serialize(function () {
        db.each(sql, function (err, row) {
            console.log(row.TaskId + ": " + row.Status + " : " + row.RaiserUserId);
        });
    });
    db.close();
};

module.exports = database;

//Full example   
/*    
    var testfunc = function () {};
      testfunc.prototype.log = function () {
        console.log("test"); //sql
    };
        //sql, callback
    testfunc.prototype.log1 = function (sql, callback) {
        console.log(sql); //sql
    };
      module.exports = testfunc;
*/

function myfunc() {}

//module.exports.ConnectAndQuery = func2;

//    var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");
//        stmt.run("Thing #" + rnd);
//    stmt.finalize();
//        db.each("SELECT * FROM Task", function (err, row) {
//            console.log(row.TaskId + ": " + row.Status + " : " + row.RaiserUserId);

var complete = function complete(err, numrows) {
    stmt.finalize();
    db.close();
    console.log("Complete");
};

//Works globally
/*
    foo = function () {
        console.log("Boo");
    }
*/

//Works in isolation
/*    exports.huh = function () {
        console.log("Huh");
    }
*/
/* works okay
    var buz = function () {};
      buz.prototype.bux = function () {
        console.log("bux");
    }
      module.exports = new buz();
*/
// String.js - liberated from MicrosoftAjax.js on 03/28/10 by Sky Sanders
// permalink: http://stackoverflow.com/a/2534834/2343

'use strict';

(function (global) {

    $type = String;
    $type.__typeName = 'String';
    $type.__class = true;

    $prototype = $type.prototype;
    $prototype.endsWith = function String$endsWith(suffix) {
        /// <summary>Determines whether the end of this instance matches the specified string.</summary>
        /// <param name="suffix" type="String">A string to compare to.</param>
        /// <returns type="Boolean">true if suffix matches the end of this instance; otherwise, false.</returns>
        return this.substr(this.length - suffix.length) === suffix;
    };

    $prototype.startsWith = function String$startsWith(prefix) {
        /// <summary >Determines whether the beginning of this instance matches the specified string.</summary>
        /// <param name="prefix" type="String">The String to compare.</param>
        /// <returns type="Boolean">true if prefix matches the beginning of this string; otherwise, false.</returns>
        return this.substr(0, prefix.length) === prefix;
    };

    $prototype.trim = function String$trim() {
        /// <summary >Removes all leading and trailing white-space characters from the current String object.</summary>
        /// <returns type="String">The string that remains after all white-space characters are removed from the start and end of the current String object.</returns>
        return this.replace(/^\s+|\s+$/g, '');
    };

    $prototype.trimEnd = function String$trimEnd() {
        /// <summary >Removes all trailing white spaces from the current String object.</summary>
        /// <returns type="String">The string that remains after all white-space characters are removed from the end of the current String object.</returns>
        return this.replace(/\s+$/, '');
    };

    $prototype.trimStart = function String$trimStart() {
        /// <summary >Removes all leading white spaces from the current String object.</summary>
        /// <returns type="String">The string that remains after all white-space characters are removed from the start of the current String object.</returns>
        return this.replace(/^\s+/, '');
    };

    $type.format = function String$format(format, args) {
        /// <summary>Replaces the format items in a specified String with the text equivalents of the values of   corresponding object instances. The invariant culture will be used to format dates and numbers.</summary>
        /// <param name="format" type="String">A format string.</param>
        /// <param name="args" parameterArray="true" mayBeNull="true">The objects to format.</param>
        /// <returns type="String">A copy of format in which the format items have been replaced by the   string equivalent of the corresponding instances of object arguments.</returns>
        return String._toFormattedString(false, arguments);
    };

    $type._toFormattedString = function String$_toFormattedString(useLocale, args) {
        var result = '';
        var format = args[0];

        for (var i = 0;;) {
            // Find the next opening or closing brace
            var open = format.indexOf('{', i);
            var close = format.indexOf('}', i);
            if (open < 0 && close < 0) {
                // Not found: copy the end of the string and break
                result += format.slice(i);
                break;
            }
            if (close > 0 && (close < open || open < 0)) {

                if (format.charAt(close + 1) !== '}') {
                    throw new Error('format stringFormatBraceMismatch');
                }

                result += format.slice(i, close + 1);
                i = close + 2;
                continue;
            }

            // Copy the string before the brace
            result += format.slice(i, open);
            i = open + 1;

            // Check for double braces (which display as one and are not arguments)
            if (format.charAt(i) === '{') {
                result += '{';
                i++;
                continue;
            }

            if (close < 0) throw new Error('format stringFormatBraceMismatch');

            // Find the closing brace

            // Get the string between the braces, and split it around the ':' (if any)
            var brace = format.substring(i, close);
            var colonIndex = brace.indexOf(':');
            var argNumber = parseInt(colonIndex < 0 ? brace : brace.substring(0, colonIndex), 10) + 1;

            if (isNaN(argNumber)) throw new Error('format stringFormatInvalid');

            var argFormat = colonIndex < 0 ? '' : brace.substring(colonIndex + 1);

            var arg = args[argNumber];
            if (typeof arg === "undefined" || arg === null) {
                arg = '';
            }

            // If it has a toFormattedString method, call it.  Otherwise, call toString()
            if (arg.toFormattedString) {
                result += arg.toFormattedString(argFormat);
            } else if (useLocale && arg.localeFormat) {
                result += arg.localeFormat(argFormat);
            } else if (arg.format) {
                result += arg.format(argFormat);
            } else result += arg.toString();

            i = close + 1;
        }

        return result;
    };
})(global);
/*
    Copyright (c) 2009, CodePlex Foundation
    All rights reserved.

    Redistribution and use in source and binary forms, with or without modification, are permitted 
    provided that the following conditions are met:

    *   Redistributions of source code must retain the above copyright notice, this list of conditions 
        and the following disclaimer.

    *   Redistributions in binary form must reproduce the above copyright notice, this list of conditions 
        and the following disclaimer in the documentation and/or other materials provided with the distribution.

    *   Neither the name of CodePlex Foundation nor the names of its contributors may be used to endorse or 
        promote products derived from this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY EXPRESS OR IMPLIED 
    WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE 
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
    INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, 
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN 
    IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</textarea>
*/
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var taskAssignment = (function () {
    function TaskAssignment(properties) {
        _classCallCheck(this, TaskAssignment);

        this.TaskId = properties.TaskId;
        this.DateAssigned = properties.DateAssigned;
        this.GroupId = properties.GroupId;
        this.AccessType = properties.AccessType;
        this.NodeId = properties.NodeId;

        var TableName = 'TaskAssignment';
        //var Keys = {'TaskId', 'GroupId'};

        //Is there a way to iterate the properties in a javascript object?  Never tried it.
        //Maybe instead of unique properties we could have a dictionary object of name value pairs?
        //Then we could have a generic class for all the tables
        //Might be gettting carried away here

        //var fields = {'DateAssigned','AccessType','NodeId'};

        //sInsertSQL = 'Insert into ' . TableName . '(TaskId, GroupId, DateAssigned, AccessType, NodeId) Values (' . _TaskId . ',' .
    }

    /* If you define getters only, Node then decides you want read only properties.  If you define nothing, you get read/write properties ipso facto
        get TaskId() {
            return this.make;
        }
          get DateAssigned() {
            return this.DateAssigned;
        }
        get GroupId() {
            return this.GroupId;
        }
        get AccessType() {
            return this.AccessType;
        }
        get NodeId() {
            return this.NodeId;
        }
          set TaskId() {
            return this.make;
        }
          set DateAssigned() {
            return this.DateAssigned;
        }
        set GroupId() {
            return this.GroupId;
        }
        set AccessType() {
            return this.AccessType;
        }
        set NodeId() {
            return this.NodeId;
        }
    */

    _createClass(TaskAssignment, [{
        key: 'toString',
        value: function toString() {
            return '${this.TaskId} ${this.DataAssigned}';
        }
    }, {
        key: 'type',
        value: function type() {
            return Object.getPrototypeOf(this);
        }
    }]);

    return TaskAssignment;
})();

module.exports = taskAssignment;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var taskRepository = (function () {
    function TaskRepository(Options) {
        _classCallCheck(this, TaskRepository);

        this.WorkflowProcessId = Options.WorkflowProcessId;
        this.dbContext = Options.dbContext;
    }

    _createClass(TaskRepository, [{
        key: 'load',
        value: function load(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            console.log('load');
            console.log('instance of ');
            console.log(Object.getPrototypeOf(theObject));
            var theType = theObject.type();
            console.log(theType);
            //Should really bootstrap this from an array, hard coded just to get a prototype done

            console.log(theType.toString());

            var sql = "";

            switch (theType) {
                case "Task":
                    sql = "select * from task where TaskId = {0}";
                    break;
                case "Task Assignment":
                    sql = "select * from task where taskid = {0}";
                    break;
                default:
                //
            }

            var cb = function cbres(rows, rowCount) {
                console.log("End Rows:" + rowCount);
                console.log(rows);
            };

            //Replace parameters with values  (should have used stored procs, would have been quicker than writing a string format function!

            this.dbContext.ConnectAndQuery(sql, cb);
        }
    }, {
        key: 'save',
        value: function save(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            console.log('save');
            console.log('instance of ');
            console.log(Object.getPrototypeOf(theObject));
            //switch statement here when have more than one class
            var sql = "select * from task";
            this.dbContext.ConnectAndQuery(sql, callme);
        }
    }]);

    return TaskRepository;
})();

module.exports = taskRepository;
'use strict';

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

var database = function database() {};

//No checks on SQL - just a Proof of Concept this
//The idea of this function is to let us swap in connection pooling later
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
        //Not sure if this should be wrapped in its own function to allow for connection pooling.
        //connection.close();
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
'use strict';
var database = require('./SqlliteDatabase.js');
var express = require('express');
var http = require('http');
var app = express();
//Initial Attempt at making a repository work
var taskRepository = require('./TaskRepository.js');
var taskAssignment = require('./TaskAssignment.js');

var port = process.env.PORT || 3000;
var host = process.env.HOST || "127.0.0.1";

console.log("Begin Web Service");
//Sanity Kill
process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception ' + err + ' , quitting');
    process.exit(1);
});

var db = new database();
var sql = "select * from Task";

function myfunc() {}

//db.log();
//db.log1("select", myfunc);

db.ConnectAndQuery(sql, myfunc);

//3 refers to WorkFlowProcessId = it's magic

var taskrepo = new taskRepository({
    WorkflowProcessId: 3,
    dbContext: db
});

var _TaskId = 1;
var _DateAssigned = '15/1/2015';
var _GroupId = '1';
var _AccessType = 1;
var _NodeId = 1;

var theTaskAssignment = new taskAssignment({
    TaskId: _TaskId,
    DateAssigned: _DateAssigned,
    GroupId: _GroupId,
    AccessType: _AccessType,
    NodeId: _NodeId
});

console.log(theTaskAssignment.DateAssigned);

taskrepo.load(theTaskAssignment, myfunc);

//taskrepo.save(theTaskAssignment, myfunc);

//Web Service Code

console.log("Registering endpoint: /");
app.get('/', function (req, res) {
    res.send('PW Review Process Web Service');
});

console.log("Registering endpoint: /Initialise");
app.get('/Initialise', function (req, res) {
    res.send('Begin Review Process');
});

console.log("Registering endpoint: /End");
app.get('/End', function (req, res) {
    res.send('End Review Process');
});

console.log("Registering endpoint: /Approve");
app.get('/Approve', function (req, res) {
    res.send('Approved');
});

console.log("Registering endpoint: /Reject");
app.get('/Reject', function (req, res) {
    res.send('Rejected');
});

console.log("Registering endpoint: /getTask");
app.get('/getTask', function (req, res) {
    var sql = "SELECT value, detail FROM counts";
    db.ConnectAndQuery(sql, function (err, row) {
        res.json({
            "value": row.value,
            "detail": row.detail
        });
    });
});

app.post('/setTask', function (req, res) {
    db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function (err, row) {
        if (err) {
            console.err(err);
            res.status(500);
        } else {
            res.status(202);
        }
        res.end();
    });
});

var server = http.createServer(app).listen(port, host, function () {
    console.log("Server listening to %s:%d within %s environment", host, port, app.get('env'));
});

app.listen(port);
'use strict';

var string = require('lib');
fef;
test;
dew;
'use strict';
var database = require('./TediousDatabase.js');
var express = require('express');
var http = require('http');
var app = express();
//Initial Attempt at making a repository work
var taskRepository = require('./TaskRepository.js');
var taskAssignment = require('./TaskAssignment.js');

var port = process.env.PORT || 3000;
var host = process.env.HOST || "127.0.0.1";

console.log("Begin Web Service");
//Sanity Kill
process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception ' + err + ' , quitting');
    process.exit(1);
});

var db = new database();
var sql = "select * from Task";
var myf = function myfunc(rows, rowCount) {
    console.log("End Rows:" + rowCount);
    console.log("End");
    console.log(Object.getPrototypeOf(rows));
    console.log(rows);
    console.log("###############################################################");
    runRestOfServer();
};
console.log("****************************************************************");
db.ConnectAndQuery(sql, myf);

//3 refers to WorkFlowProcessId = it's magic

var captureresults = function resultcap(rows, rowCount) {
    console.log("Result Capture:" + rowCount);
    console.log(Object.getPrototypeOf(rows));
    console.log(rows);
};

var runRestOfServer = function runRestOfServer() {

    var taskrepo = new taskRepository({
        WorkflowProcessId: 3,
        dbContext: db
    });

    var _TaskId = 1;
    var _DateAssigned = '15/1/2015';
    var _GroupId = '1';
    var _AccessType = 1;
    var _NodeId = 1;

    var theTaskAssignment = new taskAssignment({
        TaskId: _TaskId,
        DateAssigned: _DateAssigned,
        GroupId: _GroupId,
        AccessType: _AccessType,
        NodeId: _NodeId
    });

    console.log("Date Task Assigned : " + theTaskAssignment.DateAssigned);

    taskrepo.load(theTaskAssignment, captureresults);

    //taskrepo.save(theTaskAssignment, myfunc);
};

//Web Service Code

console.log("Registering endpoint: /");
app.get('/', function (req, res) {
    res.send('PW Review Process Web Service');
});

console.log("Registering endpoint: /Initialise");
app.get('/Initialise', function (req, res) {
    res.send('Begin Review Process');
});

console.log("Registering endpoint: /End");
app.get('/End', function (req, res) {
    res.send('End Review Process');
});

console.log("Registering endpoint: /Approve");
app.get('/Approve', function (req, res) {
    res.send('Approved');
});

console.log("Registering endpoint: /Reject");
app.get('/Reject', function (req, res) {
    res.send('Rejected');
});

console.log("Registering endpoint: /getTask");
app.get('/getTask', function (req, res) {
    var sql = "SELECT value, detail FROM counts";
    db.ConnectAndQuery(sql, function (err, row) {
        res.json({
            "value": row.value,
            "detail": row.detail
        });
    });
});

app.post('/setTask', function (req, res) {
    db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function (err, row) {
        if (err) {
            console.err(err);
            res.status(500);
        } else {
            res.status(202);
        }
        res.end();
    });
});

var server = http.createServer(app).listen(port, host, function () {
    console.log("Server listening to %s:%d within %s environment", host, port, app.get('env'));
});

app.listen(port);
//# sourceMappingURL=all.js.map
