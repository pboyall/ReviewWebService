'use strict';

var ApprovalProcessTypes = class ApprovalProcessTypes {

    constructor(properties) {
        this.Fields = properties;
        this.ApprovalProcessId = properties.ApprovalProcessId;
        this.StartNodeId = properties.StartNodeId;
        this.ApprovalType = properties.ApprovalType;
        this.CompanyId = properties.CompanyId;
        this.FunctionId = properties.FunctionId;
        this.ProductId = properties.ProductId;
        this.RegionId = properties.RegionId;

        this.TableName = 'ApprovalProcessTypes';
        this.Keys = ['ApprovalProcessTypesId'];
    }
    toString() {
        return '${this.ApprovalProcessId} ';
    }

    theType() {
        return "ApprovalProcessTypes";
    }
};

module.exports = ApprovalProcessTypes;