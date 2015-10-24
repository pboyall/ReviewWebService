//This is various bits of SQL to manipulate the Workflow
//Sort of negates the whole TAskRepostory and Object-Relational Mapping
//But is quick!

var sprint = require('./library/stringfunctions.js');
var newString = new sprint();
module.exports.getStartNode = function (ApprovalProcessId) {
    var arr = [ApprovalProcessId];
    var sSQL = newString.format(" Select StartNodeId from ApprovalProcessTypes where ApprovalProcessId = {0}", arr);
    return sSQL;

};

module.exports.Initialise = function (UserId, ApprovalProcessId) {
    var arr = [UserId, ApprovalProcessId];
    var sSQL = newString.format("insert into Task(DateUpdated, Status, RaiserUserId, ApprovalProcessType)    values(getdate(), 'I', {0}, {1})",
        arr);
    return sSQL;

};