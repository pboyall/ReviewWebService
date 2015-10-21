'use strict';

var task = class Task {

    constructor(properties) {
        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.DateUpdated = properties.DateAssigned;
        this.Status = properties.Status;
        this.RaiserUserId = properties.RaiserUserId;
        this.ApprovalProcessType = properties.ApprovalProcessType;
        this.TableName = 'Task';
        this.Keys = ['TaskId'];
    }
    toString() {
        return '${this.TaskId} ';
    }

    theType() {
        return "Task";
    }
};

module.exports = task;