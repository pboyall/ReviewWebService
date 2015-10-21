'use strict';

var taskAssignmentHistory = class TaskAssignmentHistory {

    constructor(properties) {
        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.GroupId = properties.GroupId;
        this.NodeId = properties.NodeId;
        this.DateUpdated = properties.DateUpdated;
        this.Outcome = properties.Outcome;
        this.TaskAssignmentHistoryId = properties.TaskAssignmentHistoryId;
        this.ApproverId = properties.ApproverId;
        this.ConditionTest = properties.ConditionTest;

        this.TableName = 'TaskAssignmentHistory';
        this.Keys = ['TaskAssignmentHistoryId'];

    }


    toString() {
        return '${this.TaskAssignmentHistoryId} ';
    }

    theType() {
        return "TaskAssignmentHistory"; //Object.getPrototypeOf(this);
    }
};

module.exports = taskAssignmentHistory;