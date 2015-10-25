require("babel/register");

var _TaskId = 1;
var _DateAssigned = '2015-01-15';
var _GroupId = '1';
var _AccessType = 1;
var _NodeId = 1;
var _DateUpdated = '2015-01-16';
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
var _StartDate = '2015-03-20';
var _EndDate = '2015-04-30';
var _GroupRoleWeight = 1;
var _Type = 1;
var _Outcome = 1;
var _TaskAssignmentHistoryId = 1;
var _ApproverId = 1;
var _PersonId = 1;

var database = require('./TediousDatabase.js');
var taskRepository = require('./TaskRepository.js');
var theTask = require('./Model/Task.js');

console.log('Initialise');

var db = new database();
var taskrepo = new taskRepository({
    WorkflowProcessId: 3,
    dbContext: db
});


var Animal = {
    type: "Invertebrates", // Default value of properties
    displayType: function () { // Method which will display type of Animal
        console.log(this.type);
    }
};

var task3 = new theTask();
task3.TaskId = 1;
console.log(task3.TableName);

var captureresults = function (rows, rowCount) {
    console.log("Result Capture:" + rowCount);
    console.log(rows);
    console.log(task3);
    console.log("=====================================");
    console.log("Node ID after load" + task3.DateUpdated);
    //deferred.resolve();
};

taskrepo.load(task3, captureresults);