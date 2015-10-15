'use strict';

var _exports = module.exports = {};

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
'use strict';

console.log("Being Web Service");

var database = require('./Database.js');

//POC DB Query Code

var callmeandquit = function callmeandquit() {
    console.log("Done - exit");
    process.exit();
};

var callme = function callme() {
    console.log("Done - keep running");
};

var sql = "select * from task";

database.query(sql, callme);

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
        key: 'save',
        value: function save(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            console.log('save');
            console.log('instance of ');
            console.log(Object.getPrototypeOf(theObject));
            //switch statement here when have more than one class
            var sql = "select * from task";
            this.dbContext.query(sql, callme);
        }
    }]);

    return TaskRepository;
})();

module.exports = taskRepository;
//# sourceMappingURL=all.js.map
