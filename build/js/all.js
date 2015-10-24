'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ApprovalProcessTypes = (function () {
    function ApprovalProcessTypes(properties) {
        _classCallCheck(this, ApprovalProcessTypes);

        this.Fields = properties;
        this.ApprovalProcessId = properties.ApprovalProcessId;
        this.StartNodeId = properties.StartNodeId;
        this.ApprovalType = properties.ApprovalType;
        this.CompanyId = properties.CompanyId;
        this.FunctionId = properties.FunctionId;
        this.ProductId = properties.ProductId;
        this.RegionId = properties.RegionId;

        this.TableName = 'ApprovalProcessTypes';
        this.Keys = ['ApprovalProcessTypesId'];
    }

    _createClass(ApprovalProcessTypes, [{
        key: 'toString',
        value: function toString() {
            return '${this.ApprovalProcessId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "ApprovalProcessTypes";
        }
    }]);

    return ApprovalProcessTypes;
})();

module.exports = ApprovalProcessTypes;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BranchCondition = (function () {
    function BranchCondition(properties) {
        _classCallCheck(this, BranchCondition);

        this.Fields = properties;
        this.ConditionId = properties.ConditionId;
        this.ConditionTest = properties.ConditionTest;
        this.ConditionDescription = properties.ConditionDescription;
        this.TableName = 'BranchCondition';
        this.Keys = ['ConditionId'];
    }

    _createClass(BranchCondition, [{
        key: 'toString',
        value: function toString() {
            return '${this.ConditionId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "BranchCondition";
        }
    }]);

    return BranchCondition;
})();

module.exports = BranchCondition;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var branchnode = (function () {
    function BranchNode(properties) {
        _classCallCheck(this, BranchNode);

        this.Fields = properties;
        this.GuardId = properties.GuardId;
        this.NodeId = properties.NodeId;
        this.OutputNodeId = properties.OutputNodeId;
        this.ConditionId = properties.ConditionId;
        this.RelationTypeId = properties.RelationTypeId;
        this.Type = properties.Type;
        this.AccessType = properties.AccessType;
        this.TableName = 'BranchNode';
        this.Keys = ['GuardId'];
    }

    _createClass(BranchNode, [{
        key: 'toString',
        value: function toString() {
            return '${this.GuardId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "BranchNode";
        }
    }]);

    return BranchNode;
})();

module.exports = branchnode;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GroupRoleRelation = (function () {
    function GroupRoleRelation(properties) {
        _classCallCheck(this, GroupRoleRelation);

        this.Fields = properties;
        this.GroupRelationId = properties.GroupRelationId;
        this.MasterGroupId = properties.MasterGroupId;
        this.RelativeGroupId = properties.RelativeGroupId;
        this.DateUpdated = properties.DateUpdated;
        this.Enabled = properties.Enabled;
        this.RelationTypeId = properties.RelationTypeId;
        this.StartDate = properties.StartDate;
        this.EndDate = properties.EndDate;
        this.ApprovalProcessId = properties.ApprovalProcessId;
        this.GroupRoleWeight = properties.GroupRoleWeight;
        this.TableName = 'GroupRoleRelation';
        this.Keys = ['GroupRoleRelationId'];
    }

    _createClass(GroupRoleRelation, [{
        key: 'toString',
        value: function toString() {
            return '${this.GroupRelationId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "GroupRoleRelation";
        }
    }]);

    return GroupRoleRelation;
})();

module.exports = GroupRoleRelation;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var task = (function () {
    function Task(properties) {
        _classCallCheck(this, Task);

        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.DateUpdated = properties.DateAssigned;
        this.Status = properties.Status;
        this.RaiserUserId = properties.RaiserUserId;
        this.ApprovalProcessType = properties.ApprovalProcessType;
        this.TableName = 'Task';
        this.Keys = ['TaskId'];
    }

    _createClass(Task, [{
        key: 'toString',
        value: function toString() {
            return '${this.TaskId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "Task";
        }
    }]);

    return Task;
})();

module.exports = task;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var taskAssignment = (function () {
    function TaskAssignment(properties) {
        _classCallCheck(this, TaskAssignment);

        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.DateAssigned = properties.DateAssigned;
        this.GroupId = properties.GroupId;
        this.AccessType = properties.AccessType;
        this.NodeId = properties.NodeId;

        this.TableName = 'TaskAssignment';
        this.Keys = ['TaskId', 'GroupId'];

        //Maybe instead of unique properties we could have a dictionary object of name value pairs?
        //Then we could have a generic class for all the tables
        //Might be gettting carried away here

        //var fields = {'DateAssigned','AccessType','NodeId'};

        //sInsertSQL = 'Insert into ' . TableName . '(TaskId, GroupId, DateAssigned, AccessType, NodeId) Values (' . _TaskId . ',' .
    }

    /* If you define getters only, Node (javascript) then decides you want read only properties.  If you define nothing, you get read/write properties ipso facto do nothing.  Bonkers!
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
        key: 'theType',
        value: function theType() {
            return "TaskAssignment"; //Object.getPrototypeOf(this);
        }
    }]);

    return TaskAssignment;
})();

module.exports = taskAssignment;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var taskAssignmentHistory = (function () {
    function TaskAssignmentHistory(properties) {
        _classCallCheck(this, TaskAssignmentHistory);

        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.GroupId = properties.GroupId;
        this.NodeId = properties.NodeId;
        this.DateUpdated = properties.DateUpdated;
        this.Outcome = properties.Outcome;
        this.TaskAssignmentHistoryId = properties.TaskAssignmentHistoryId;
        this.ApproverId = properties.ApproverId;
        this.ConditionTest = properties.ConditionTest;

        this.TableName = 'TaskAssignmentHistory';
        this.Keys = ['TaskAssignmentHistoryId'];
    }

    _createClass(TaskAssignmentHistory, [{
        key: 'toString',
        value: function toString() {
            return '${this.TaskAssignmentHistoryId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "TaskAssignmentHistory"; //Object.getPrototypeOf(this);
        }
    }]);

    return TaskAssignmentHistory;
})();

module.exports = taskAssignmentHistory;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TaskNode = (function () {
    function TaskNode(properties) {
        _classCallCheck(this, TaskNode);

        this.Fields = properties;
        this.TaskNodeId = properties.TaskNodeId;
        this.TaskId = properties.TaskId;
        this.NodeId = properties.NodeId;
        this.DateUpdated = properties.DateUpdated;
        this.GroupId = properties.GroupId;
        this.TableName = 'TaskNode';
        this.Keys = ['TaskNodeId'];
    }

    _createClass(TaskNode, [{
        key: 'toString',
        value: function toString() {
            return '${this.TaskNodeId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "TaskNode";
        }
    }]);

    return TaskNode;
})();

module.exports = TaskNode;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UserGroup = (function () {
    function UserGroup(properties) {
        _classCallCheck(this, UserGroup);

        this.Fields = properties;
        this.GroupId = properties.GroupId;
        this.PersonId = properties.PersonId;
        this.DateUpdated = properties.DateUpdated;
        this.Enabled = properties.Enabled;
        this.StartDate = properties.StartDate;
        this.EndDate = properties.EndDate;
        this.TableName = 'UserGroup';
        this.Keys = ['GroupId'];
    }

    _createClass(UserGroup, [{
        key: 'toString',
        value: function toString() {
            return '${this.GroupId} ';
        }
    }, {
        key: 'theType',
        value: function theType() {
            return "UserGroup";
        }
    }]);

    return UserGroup;
})();

module.exports = UserGroup;
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var cString = (function () {
    function Cstring(Options) {
        _classCallCheck(this, Cstring);
    }

    _createClass(Cstring, [{
        key: 'format',
        value: function format(str, obj) {
            return str.replace(/\{\s*([^}\s]+)\s*\}/g, function (m, p1, offset, string) {
                return obj[p1];
            });
        }

        //Stick with {} for field names

    }, {
        key: 'formatfieldname',
        value: function formatfieldname(str, obj) {
            return str.replace(/\{\s*([^}\s]+)\s*\}/g, function (m, p1, offset, string) {
                return obj[p1];
            });
        }

        //Use [] to delineate field values
    }, {
        key: 'formatfieldvalue',
        value: function formatfieldvalue(str, obj) {
            return str.replace(/\[\s*([^}\s]+)\s*\]/g, function (m, p1, offset, string) {
                return obj[p1];
            });
        }
    }]);

    return Cstring;
})();

module.exports = cString;
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
'use strict';

function insertIntoMongoDb() {
    console.log('inserting data into MongDB');

    mongoose.connect('mongodb://localhost:27017/someMongoDB');

    var taskSchema = new mongoose.Schema({
        TaskId: {
            type: Number
        },
        Status: {
            type: String
        },
        DateUpdated: {
            type: Date
        },
        RaiserUserId: {
            type: Number,
            'default': ''
        },
        ApprovalProcessType: {
            type: Number,
            'default': 0
        }
    }, {
        versionKey: false
    });

    var TaskModel = mongoose.model('Tasks', taskSchema);
    for (var i = 0; i < rows.length; i++) {
        var task = new TaskModel(rows[i]);
        Task.save(function (error) {
            if (error) {
                console.log('error saving');
            } else {
                console.log('saved successfully');
            }
        });
    }
}

function getSqlData() {
    console.log('Getting data from SQL');
    request = new Request("SELECT * from Task", function (err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            insertIntoMongoDb();
        }
    });
    request.on('row', function (columns) {
        var row = {};
        columns.forEach(function (column) {
            row[column.metadata.colName] = column.value;
        });
        rows.push(row);
    });
    connection.execSql(request);
}
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
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var sprint = require('./library/stringfunctions.js');

var taskRepository = (function () {
    function TaskRepository(Options) {
        _classCallCheck(this, TaskRepository);

        this.WorkflowProcessId = Options.WorkflowProcessId;
        this.dbContext = Options.dbContext;
    }

    _createClass(TaskRepository, [{
        key: 'wonk',
        value: function wonk() {
            console.log("javascript sucks big time");
        }
    }, {
        key: 'obtainSQL',
        value: function obtainSQL(theObject) {
            var selectSQL = "select ";
            var updateSQL = "update " + theObject.TableName;
            var insertSQL = "insert into " + theObject.TableName + "(";
            var insertValues = "";
            var insertFields = "";
            var whereSQL = "";

            for (var property in theObject.Fields) {
                //Write out property name and value into SQL
                if (selectSQL == "select ") {
                    updateSQL = updateSQL + " SET ";
                } else {
                    selectSQL = selectSQL + ",";
                    updateSQL = updateSQL + ",";
                    insertValues = insertValues + ",";
                    insertFields = insertFields + ",";
                }
                selectSQL = selectSQL + property;
                updateSQL = updateSQL + property + "= '" + theObject.Fields[property] + "'";
                insertValues = insertValues + "'" + theObject.Fields[property] + "'";
                insertFields = insertFields + property;
            }

            selectSQL = selectSQL + " from " + theObject.TableName;
            insertSQL = insertSQL + insertFields + ") VALUES (" + insertValues + ")";

            theObject.Keys.map(function (item) {
                if (whereSQL === "") {
                    whereSQL = " where " + item + " = " + theObject[item];
                } else {
                    whereSQL = whereSQL + " AND " + item + " = " + theObject[item];
                }
            });

            //Functionalise!

            insertSQL = insertSQL + whereSQL;
            updateSQL = updateSQL + whereSQL;
            selectSQL = selectSQL + whereSQL;
            return {
                update: updateSQL,
                select: selectSQL,
                insert: insertSQL
            };
        }
    }, {
        key: 'load',
        value: function load(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            var theType = theObject.theType();
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
            console.log('load instance of ' + Object.getPrototypeOf(theObject) + ' (' + theType + ')');
            var sqlobj = this.obtainSQL(theObject);
            var sql = sqlobj.select;
            console.log(sql);
            this.dbContext.ConnectAndQuery(sql, callme);
        }
    }, {
        key: 'save',
        value: function save(theObject, callme) {
            //Hard coded SQL as proof of concept
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
            console.log('save instance of ' + Object.getPrototypeOf(theObject));
            var sql = "";
            var keys = [];
            var sqlobj = this.obtainSQL(theObject);
            //TODO: Code "select" check then if no rows insert else update
            //For now just force insert each time
            var sql = sqlobj.insert;
            console.log(sql);
            this.dbContext.ConnectAndQuery(sql, callme);
            console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
        }
    }]);

    return TaskRepository;
})();

module.exports = taskRepository;
//Might want to make this implement the singleton pattern, although not totally sure it will hurt to have multiple instances floating around

'use strict';

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
'use strict';
//Database Handler (can plug in SqlliteDatabase.js instead)
var database = require('./TediousDatabase.js');
//Does REST Web Services
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

//Initial Attempt at making a repository work
var taskRepository = require('./TaskRepository.js');

//The classes that map to the database tables (one on one mapping)
//Can do this with an index.js and just require the folder (so easy to add new classes) but for now code explicitly so it's more obvious
var taskAssignment = require('./Model/TaskAssignment.js');
var task = require('./Model/Task.js');
var ApprovalProcessTypes = require('./Model/ApprovalProcessTypes.js');
var BranchCondition = require('./Model/BranchCondition.js');
var branchnode = require('./Model/BranchNode.js');
var GroupRoleRelation = require('./Model/GroupRoleRelation.js');
var TaskNode = require('./Model/TaskNode.js');
var TaskAssignmentHistory = require('./Model/TaskAssignmentHistory.js');
var UserGroup = require('./Model/UserGroup.js');

//Initialise Web Service Config
var app = express();
app.use(logger('dev'));
var port = process.env.PORT || 3000;
var host = process.env.HOST || "127.0.0.1";
console.log("Begin Web Service");
//Sanity Kill Method for entire Node Module
process.on('uncaughtException', function (err) {
    console.log('Uncaught Exception ' + err + ' , quitting');
    process.exit(1);
});

//Create the database object to inject into everything
var db = new database();

var captureresults = function resultcap(rows, rowCount) {
    console.log("Result Capture:" + rowCount);
    console.log(rows);
    console.log("=====================================");
};

//Run Checks to ensure database is up
var myf = function myfunc(rows, rowCount) {
    console.log("Database connection varified");
    runRestOfServer();
};
console.log("****************************************************************");
db.ConnectAndQuery("select * from Task", myf);

//3 refers to WorkFlowProcessId = it's magic

var runRestOfServer = function runRestOfServer() {

    var taskrepo = new taskRepository({
        WorkflowProcessId: 3,
        dbContext: db
    });

    var _TaskId = 1;
    var _DateAssigned = '15/1/2015';
    var _GroupId = '3';
    var _AccessType = 1;
    var _NodeId = 1;
    var _DateUpdated = '16/2/2015';
    var _Status = "A";
    var _RaiserUserId = 1;
    var _ApprovalType = 3;
    var _StartNodeId = 1;
    var _CompanyId = 1;
    var _FunctionId = 1;
    var _ProductId = 1;
    var _RegionId = 1;
    var _GuardId = 1;
    var _ApprovalProcessId = 1;
    var _ApprovalProcessType = 3;
    var _ConditionId = 1;
    var _ConditionTest = 1;
    var _ConditionDescription = 1;
    var _OutputNodeId = 1;
    var _GroupRelationId = 1;
    var _MasterGroupId = 1;
    var _RelativeGroupId = 1;
    var _Enabled = 1;
    var _RelationTypeId = 1;
    var _StartDate = '20/3/2015';
    var _EndDate = '30/4/2015';
    var _GroupRoleWeight = 1;
    var _Type = 1;
    var _Outcome = 1;
    var _TaskAssignmentHistoryId = 1;
    var _ApproverId = 1;
    var _PersonId = 1;

    var theTaskAssignment = new taskAssignment({
        TaskId: _TaskId,
        DateAssigned: _DateAssigned,
        GroupId: _GroupId,
        AccessType: _AccessType,
        NodeId: _NodeId
    });

    var theTask = new task({
        TaskId: _TaskId,
        DateUpdated: _DateUpdated,
        Status: _Status,
        RaiserUserId: _RaiserUserId,
        ApprovalProcessType: _ApprovalProcessType
    });

    var AP = new ApprovalProcessTypes({
        ApprovalProcessId: _ApprovalProcessId,
        StartNodeId: _StartNodeId,
        ApprovalType: _ApprovalType,
        CompanyId: _CompanyId,
        FunctionId: _FunctionId,
        ProductId: _ProductId,
        RegionId: _RegionId
    });

    var BC = new BranchCondition({
        ConditionId: _ConditionId,
        ConditionTest: _ConditionTest,
        ConditionDescription: _ConditionDescription
    });

    var BN = new ApprovalProcessTypes({
        GuardId: _GuardId,
        NodeId: _NodeId,
        OutputNodeId: _OutputNodeId,
        ConditionId: _ConditionId,
        RelationTypeId: _RelationTypeId,
        Type: _Type,
        AccessType: _AccessType
    });

    var GR = new GroupRoleRelation({
        GroupRelationId: _GroupRelationId,
        MasterGroupId: _MasterGroupId,
        RelativeGroupId: _RelativeGroupId,
        DateUpdated: _DateUpdated,
        Enabled: _Enabled,
        RelationTypeId: _RelationTypeId,
        StartDate: _StartDate,
        EndDate: _EndDate,
        ApprovalProcessId: _ApprovalProcessId,
        GroupRoleWeight: _GroupRoleWeight
    });

    var theTaskAssignmentHistory = new TaskAssignmentHistory({
        TaskId: _TaskId,
        GroupId: _GroupId,
        NodeId: _NodeId,
        DateUpdated: _DateUpdated,
        Outcome: _Outcome,
        TaskAssignmentHistoryId: _TaskAssignmentHistoryId,
        ApproverId: _ApproverId,
        ConditionTest: _ConditionTest
    });

    var UG = new UserGroup({
        GroupId: _GroupId,
        PersonId: _PersonId,
        DateUpdated: _DateUpdated,
        Enabled: _Enabled,
        StartDate: _StartDate,
        EndDate: _EndDate
    });

    console.log("Date Task Assigned : " + theTaskAssignment.DateAssigned);

    taskrepo.load(theTaskAssignment, captureresults);

    taskrepo.load(UG, captureresults);

    //  taskrepo.save(theTaskAssignment, myf);
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
