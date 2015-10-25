'use strict';

var tasker = function (properties) {
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
    this.TableName = 'Task2';
    this.Keys = ['TaskId'];
    tasker.prototype.ToString = function () {
        return '${this.TaskId} ';
    };

    tasker.prototype.theType = function () {
        return "Task2";
    };
};





module.exports = tasker;