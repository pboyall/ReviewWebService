'use strict';

var taskAssignment = class TaskAssignment {

    constructor(properties) {
        this.Fields = properties;
        this.TaskId = properties.TaskId;
        this.DateAssigned = properties.DateAssigned;
        this.GroupId = properties.GroupId;
        this.AccessType = properties.AccessType;
        this.NodeId = properties.NodeId;

        this.TableName = 'TaskAssignment';
        this.Keys = ['TaskId', 'GroupId'];

        //Maybe instead of unique properties we could have a dictionary object of name value pairs?
        //Then we could have a generic class for all the tables
        //Might be gettting carried away here

        //var fields = {'DateAssigned','AccessType','NodeId'};

        //sInsertSQL = 'Insert into ' . TableName . '(TaskId, GroupId, DateAssigned, AccessType, NodeId) Values (' . _TaskId . ',' . 

    }

    /* If you define getters only, Node (javascript) then decides you want read only properties.  If you define nothing, you get read/write properties ipso facto do nothing.  Bonkers!
        get TaskId() {
            return this.make;
        }

        get DateAssigned() {
            return this.DateAssigned;
        }
        get GroupId() {
            return this.GroupId;
        }
        get AccessType() {
            return this.AccessType;
        }
        get NodeId() {
            return this.NodeId;
        }

        set TaskId() {
            return this.make;
        }

        set DateAssigned() {
            return this.DateAssigned;
        }
        set GroupId() {
            return this.GroupId;
        }
        set AccessType() {
            return this.AccessType;
        }
        set NodeId() {
            return this.NodeId;
        }
    */


    toString() {
        return '${this.TaskId} ${this.DataAssigned}';
    }

    theType() {
        return "TaskAssignment"; //Object.getPrototypeOf(this);
    }
};

module.exports = taskAssignment;