'use strict';
var database = require('./TediousDatabase.js');
var taskAssignment = require('./TaskAssignment.js');
var tr = require('./TaskRepository.js');
var db = new database();



var _TaskId = 1;
var _DateAssigned = '15/1/2015';
var _GroupId = '3';
var _AccessType = 1;
var _NodeId = 1;
var theTaskAssignment = new taskAssignment({
    TaskId: _TaskId,
    DateAssigned: _DateAssigned,
    GroupId: _GroupId,
    AccessType: _AccessType,
    NodeId: _NodeId
});

var theObject = theTaskAssignment;

var selectSQL = "select ";
var updateSQL = "update";


console.log(theObject.Fields);

for (var property in theObject.Fields) {
    //    if (theObject.hasOwnProperty(property)) {
    //Write out property name and value into SQL
    if (selectSQL == "select ") {
        //Do nothing
    } else {
        selectSQL = selectSQL + ",";
        updateSQL = updateSQL + ",";
    }
    selectSQL = selectSQL + property;

    updateSQL = updateSQL + property + "= '" + theObject.Fields[property] + "'";
    //    }
}

selectSQL = selectSQL + " from " + theObject.TableName;
selectSQL = selectSQL + " where ";




console.log(theObject.Keys);

theObject.Keys.map(function (item) {
    console.log(item);
    console.log(theObject[item]);
});

console.log(selectSQL);

var TR = new tr({
    WorkflowProcessId: 1,
    dbContext: db
});

var sql = "";
TR.populateSQL(theObject, sql);