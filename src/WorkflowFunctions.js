//This is various bits of SQL to manipulate the Workflow
//Sort of negates the whole TAskRepostory and Object-Relational Mapping
//But is quick!

var Q = require('Q');
//Database Handler (can plug in SqlliteDatabase.js instead)
var database = require('./TediousDatabase.js');
var logger = require('morgan');
var taskRepository = require('./TaskRepository.js');
var db = new database();
var sprint = require('./library/stringfunctions.js');
var newString = new sprint();
var taskrepo = new taskRepository({
    WorkflowProcessId: ApprovalProcessId,
    dbContext: db
});

module.exports.getStartNode = function (ApprovalProcessId) {
    var deferred = Q.defer();
    var arr = [ApprovalProcessId];
    var sSQL = newString.format(" Select StartNodeId from ApprovalProcessTypes where ApprovalProcessId = {0}", arr);
    return sSQL;
    return deferred.promise;
};

module.exports.Initialise = function (UserId, ApprovalProcessId) {
    var deferred = Q.defer();
    var arr = [UserId, ApprovalProcessId];
    var sSQL = newString.format("insert into Task(DateUpdated, Status, RaiserUserId, ApprovalProcessType)    values(getdate(), 'I', {0}, {1})",
        arr);
    return sSQL;

};