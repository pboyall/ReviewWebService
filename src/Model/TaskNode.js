'use strict';

var TaskNode = class TaskNode {

    constructor(properties) {
        this.Fields = properties;
        this.TaskNodeId = properties.TaskNodeId;
        this.TaskId = properties.TaskId;
        this.NodeId = properties.NodeId;
        this.DateUpdated = properties.DateUpdated;
        this.GroupId = properties.GroupId;
        this.TableName = 'TaskNode';
        this.Keys = ['TaskNodeId'];
    }
    toString() {
        return '${this.TaskNodeId} ';
    }

    theType() {
        return "TaskNode";
    }
};

module.exports = TaskNode;