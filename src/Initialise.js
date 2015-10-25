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


require("babel/register");
var tasker = require('./Model/Task2.js');

console.log('Initialise');

var Animal = {
    type: "Invertebrates", // Default value of properties
    displayType: function () { // Method which will display type of Animal
        console.log(this.type);
    }
};

var task = function (properties) {
    if (typeof properties === 'undefined') {
        // your code here.
        var properties = {};
        properties.TaskId = "";
        properties.DateUpdated = "";
        properties.Status = "";
        properties.RaiserUserId = "";
        properties.ApprovalProcessType = "";

    } else {
        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.DateUpdated = properties.DateAssigned;
        this.Status = properties.Status;
        this.RaiserUserId = properties.RaiserUserId;
        this.ApprovalProcessType = properties.ApprovalProcessType;
    }
    this.TableName = 'Task';
    this.Keys = ['TaskId'];
    task.prototype.ToString = function () {
        return '${this.TaskId} ';
    };

    task.prototype.theType = function () {
        return "Task";
    };
};


var task2 = new task();
var theTask = new task({
    TaskId: _TaskId,
    DateUpdated: _DateUpdated,
    Status: _Status,
    RaiserUserId: _RaiserUserId,
    ApprovalProcessType: _ApprovalProcessType
});

var task3 = new tasker();

console.log(task2.TableName);
console.log(theTask.TableName);

console.log(task3.TableName);