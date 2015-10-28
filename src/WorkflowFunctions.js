//This is various bits of SQL to manipulate the Workflow
//Sort of negates the whole TAskRepostory and Object-Relational Mapping
//But is quick!

var Q = require('Q');
var chalk = require('chalk');
var logger = require('./logger.js');

//Database Handler (can plug in SqlliteDatabase.js instead)
var database = require('./TediousDatabase.js');

var taskRepository = require('./TaskRepository.js');
var db = new database();
var sprint = require('./library/stringfunctions.js');
var newString = new sprint();
var chalk = require('chalk');
var ApprovalProcessId = 3;
var deferred1 = Q.defer();

var taskrepo = new taskRepository({
    WorkflowProcessId: ApprovalProcessId,
    dbContext: db
});
var log = logger.LOG;

module.exports.getStartNode = function (ApprovalProcessId) {
    var deferred = Q.defer();
    var arr = [ApprovalProcessId];
    var sSQL = newString.format(" Select StartNodeId from ApprovalProcessTypes where ApprovalProcessId = {0}", arr);

    var returnstartnode = function (rows, rowindex, property) {
        var parsedJSON;
        if (typeof rowindex === 'undefined') {
            rowindex = 0;
        } else {
            log.info("Return row number " + rowindex);
        }
        try {
            parsedJSON = JSON.parse(rows);
        } catch (e) {
            log.error(chalk.red("Unable to parse rows"));
        }
        var rowsobj;
        if (parsedJSON.length > 1) {
            console.log("More than one row - returning row" + rowindex);
            rowsobj = parsedJSON[rowindex];
        } else {
            rowsobj = parsedJSON;
        }
        log.info(chalk.blue("rows : " + rows));
        log.info(chalk.blue("parsed JSON : " + parsedJSON));
        log.info(chalk.white("Get Property: " + property));
        var startnode = fetchFromObject(rowsobj, property);
        log.info(chalk.green("Start Node is : " + startnode));
        deferred.resolve(startnode);
    };

    db.deferredQuery(sSQL, "StartNodeId", returnstartnode);

    //    return sSQL;
    return deferred.promise;
};

var getValue = function (rows, rowindex, property) {
    var deferred = Q.defer();
    var parsedJSON;
    if (typeof rowindex === 'undefined') {
        rowindex = 0;
    } else {
        log.info("Return row no: " + rowindex);
    }
    try {
        parsedJSON = JSON.parse(rows);
    } catch (e) {
        log.error(chalk.red("Unable to parse rows"));
    }
    var rowsobj;
    if (parsedJSON.length > 1) {
        console.log("More than one row - returning row@ " + rowindex);
        rowsobj = parsedJSON[rowindex];
    } else {
        rowsobj = parsedJSON;
    }
    var returnval = fetchFromObject(rowsobj, property);
    log.info(chalk.green("Returning is : " + returnval));

    deferred.resolve(returnval);
    return deferred.promise;
};

var returnvalue = function (rows, rowindex, property) {
    var parsedJSON;
    if (typeof rowindex === 'undefined') {
        rowindex = 0;
    } else {
        log.info("Return row no: " + rowindex);
    }
    try {
        parsedJSON = JSON.parse(rows);
    } catch (e) {
        log.error(chalk.red("Unable to parse rows"));
    }
    var rowsobj;
    if (parsedJSON.length > 1) {
        console.log("More than one row - returning row@ " + rowindex);
        rowsobj = parsedJSON[rowindex];
    } else {
        rowsobj = parsedJSON;
    }
    var returnval = fetchFromObject(rowsobj, property);
    log.info(chalk.green("Returning is : " + returnval));
    return returnval;
};

var returngvalue = function (rows, rowindex, property) {
    var parsedJSON;
    if (typeof rowindex === 'undefined') {
        rowindex = 0;
    } else {
        log.info("Return row no: " + rowindex);
    }
    try {
        parsedJSON = JSON.parse(rows);
    } catch (e) {
        log.error(chalk.red("Unable to parse rows"));
    }
    var rowsobj;
    if (parsedJSON.length > 1) {
        console.log("More than one row - returning row@ " + rowindex);
        rowsobj = parsedJSON[rowindex];
    } else {
        rowsobj = parsedJSON;
    }
    var returnval = fetchFromObject(rowsobj, property);
    log.info(chalk.green("Returning is : " + returnval));

    //deferred.resolve(returnval);
    //return this.deferred.promise;
};

function fetchFromObject(obj, prop) {

    if (typeof obj === 'undefined') {
        return false;
    }

    var _index = prop.indexOf('.');
    if (_index > -1) {
        return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }

    return obj[prop];
}

module.exports.getStartNode1 = function (ApprovalProcessId) {
    var deferred = Q.defer();
    var arr = [ApprovalProcessId];
    var sSQL = newString.format(" Select StartNodeId from ApprovalProcessTypes where ApprovalProcessId = {0}", arr);
    db.deferredQuery(sSQL, "StartNodeId", function (rows, rowindex, property) {
        deferred.resolve(returnvalue(rows, rowindex, property));
    });
    return deferred.promise;
};

module.exports.Initialise = function (UserId, ApprovalProcessId) {
    var deferred = Q.defer();
    var arr = [UserId, ApprovalProcessId];
    var sSQL = newString.format("insert into Task(DateUpdated, Status, RaiserUserId, ApprovalProcessType)    values(getdate(), 'I', {0}, {1})",
        arr);
    //    return sSQL;
    return deferred.promise;
};