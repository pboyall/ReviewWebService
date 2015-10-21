'use strict';

var BranchCondition = class BranchCondition {

    constructor(properties) {
        this.Fields = properties;
        this.ConditionId = properties.ConditionId;
        this.ConditionTest = properties.ConditionTest;
        this.ConditionDescription = properties.ConditionDescription;
        this.TableName = 'BranchCondition';
        this.Keys = ['ConditionId'];
    }
    toString() {
        return '${this.ConditionId} ';
    }

    theType() {
        return "BranchCondition";
    }
};

module.exports = BranchCondition;