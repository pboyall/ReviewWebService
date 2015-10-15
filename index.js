'use strict';

console.log("Being Web Service");


var database = require('./sqlite.js');

//POC DB Query Code

var callmeandquit = function () {
    console.log("Done - exit");
    process.exit();
};

var callme = function () {
    console.log("Done - keep running");
};


var sql = "select * from task";


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