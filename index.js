'use strict';

console.log("Being Web Service");


var database = require('./Database.js');

//POC DB Query Code

var callme = function () {
    console.log("Done - exit");
    process.exit();
};

/*
var sql = "select * from task";

database.query(sql, callme);

//End POC

*/

//Initial Attempt at making a repository work

var taskRepository = require('./TaskRepository.js');
var taskAssignment = require('./TaskAssignment.js');

//3 refers to WorkFlowProcessId = it's magic

var wibble = new taskRepository(WorkflowProcessId: 3, dbContext: database);


var TaskId = 1;
var DateAssigned = '15/1/2015';
var GroupId = '1';
var AccessType = 1;
var NodeId = 1;

var theTaskAssignment = new taskAssignment(TaskId, DateAssigned, GroupId, AccessType, NodeId);

wibble.save(theTaskAssignment);

//As this is node, it keeps running unless we exit

process.exit();