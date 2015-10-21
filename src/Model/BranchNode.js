'use strict';

var branchnode = class BranchNode {

    constructor(properties) {
        this.Fields = properties;
        this.GuardId = properties.GuardId;
        this.NodeId = properties.NodeId;
        this.OutputNodeId = properties.OutputNodeId;
        this.ConditionId = properties.ConditionId;
        this.RelationTypeId = properties.RelationTypeId;
        this.Type = properties.Type;
        this.AccessType = properties.AccessType;
        this.TableName = 'BranchNode';
        this.Keys = ['GuardId'];
    }
    toString() {
        return '${this.GuardId} ';
    }

    theType() {
        return "BranchNode";
    }
};

module.exports = branchnode;