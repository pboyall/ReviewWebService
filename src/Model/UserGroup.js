'use strict';

var UserGroup = class UserGroup {

    constructor(properties) {
        this.Fields = properties;
        this.GroupId = properties.GroupId;
        this.PersonId = properties.PersonId;
        this.DateUpdated = properties.DateUpdated;
        this.Enabled = properties.Enabled;
        this.StartDate = properties.StartDate;
        this.EndDate = properties.EndDate;
        this.TableName = 'UserGroup';
        this.Keys = ['GroupId'];
    }
    toString() {
        return '${this.GroupId} ';
    }

    theType() {
        return "UserGroup";
    }
};

module.exports = UserGroup;