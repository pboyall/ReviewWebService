'use strict';

var GroupRoleRelation = class GroupRoleRelation {

    constructor(properties) {
        this.Fields = properties;
        this.GroupRelationId = properties.GroupRelationId;
        this.MasterGroupId = properties.MasterGroupId;
        this.RelativeGroupId = properties.RelativeGroupId;
        this.DateUpdated = properties.DateUpdated;
        this.Enabled = properties.Enabled;
        this.RelationTypeId = properties.RelationTypeId;
        this.StartDate = properties.StartDate;
        this.EndDate = properties.EndDate;
        this.ApprovalProcessId = properties.ApprovalProcessId;
        this.GroupRoleWeight = properties.GroupRoleWeight;
        this.TableName = 'GroupRoleRelation';
        this.Keys = ['GroupRoleRelationId'];
    }
    toString() {
        return '${this.GroupRelationId} ';
    }

    theType() {
        return "GroupRoleRelation";
    }
};

module.exports = GroupRoleRelation;