'use strict';
var sprint = require('./library/stringfunctions.js');

var taskRepository =

    class TaskRepository {

        constructor(Options) {
            this.WorkflowProcessId = Options.WorkflowProcessId;
            this.dbContext = Options.dbContext;
        }

        wonk() {
            console.log("javascript sucks big time");
        }

        obtainSQL(theObject) {
            var selectSQL = "select ";
            var updateSQL = "update " + theObject.TableName;
            var insertSQL = "insert into " + theObject.TableName + "(";
            var insertValues = "";
            var insertFields = "";
            var whereSQL = "";

            for (var property in theObject.Fields) {
                //Write out property name and value into SQL
                if (selectSQL == "select ") {
                    updateSQL = updateSQL + " SET ";

                } else {
                    selectSQL = selectSQL + ",";
                    updateSQL = updateSQL + ",";
                    insertValues = insertValues + ",";
                    insertFields = insertFields + ",";
                }
                selectSQL = selectSQL + property;
                updateSQL = updateSQL + property + "= '" + theObject.Fields[property] + "'";
                insertValues = insertValues + "'" + theObject.Fields[property] + "'";
                insertFields = insertFields + property;
            }

            selectSQL = selectSQL + " from " + theObject.TableName;
            insertSQL = insertSQL + insertFields + ") VALUES (" + insertValues + ")";

            theObject.Keys.map(function (item) {
                if (whereSQL === "") {
                    whereSQL = " where " + item + " = " + theObject[item];
                } else {
                    whereSQL = whereSQL + " AND " + item + " = " + theObject[item];
                }

            });

            //Functionalise!

            insertSQL = insertSQL + whereSQL;
            updateSQL = updateSQL + whereSQL;
            selectSQL = selectSQL + whereSQL;
            return {
                update: updateSQL,
                select: selectSQL,
                insert: insertSQL
            };

        }

        load(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            var theType = theObject.theType();
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
            console.log('load instance of ' + Object.getPrototypeOf(theObject) + ' (' + theType + ')');
            var sqlobj = this.obtainSQL(theObject);
            var sql = sqlobj.select;
            console.log(sql);
            this.dbContext.ConnectAndQuery(sql, callme);
        }



        save(theObject, callme) {
            //Hard coded SQL as proof of concept
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
            console.log('save instance of ' + Object.getPrototypeOf(theObject));
            var sql = "";
            var keys = [];
            var sqlobj = this.obtainSQL(theObject);
            //TODO: Code "select" check then if no rows insert else update
            //For now just force insert each time
            var sql = sqlobj.insert;
            console.log(sql);
            this.dbContext.ConnectAndQuery(sql, callme);
            console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');

        }
    };





module.exports = taskRepository;



//Replaced code
//            var cb = function cbres(rows, rowCount) {
//              console.log("Return Rows:" + rowCount);
//            console.log(rows);
//      };
//this.dbContext.ConnectAndQuery(sql, cb);


//Get inserts/select/update SQL (mapping)
// Consider how to do this with a field list/value list name-value pairing rather than hard-coding
//Then only need one SQL statement and just replace table name, fields and values each time
//These are just hard coded for now for speed - have started writing a full ORM but probably a bit pointless


//        obtainSQL(theObject) {
//
//            //[] delineates values
//            //{} delineates field names
//
//            var theType = theObject.theType();
//            var selectsql, updatesql, insertsql;
//
//            switch (theType) {
//            case "Task":
//                selectsql = "select * from Task where TaskId = {0}";
//                updatesql = "Update Task set where TaskId = {0}";
//                insertsql = "insert into Task() values()";
//                break;
//            case "TaskAssignment":
//                selectsql = "select * from TaskAssignment where taskid = {0}";
//                updatesql = "Update TaskAssignment set where TaskId = {0}";
//                insertsql = "insert into TaskAssignment ({0},{1},{2},{3},{4}) VALUES([0],[1], [2], [3], [4])";
//                break;
//            default:
//                console.log("no match found");
//            }
//
//            return {
//                update: updatesql,
//                select: selectsql,
//                insert: insertsql
//            };
//        }
//
//        //Get the key array for a given object
//        //Written this so later can abstract it out into a full ORM layer
//        //Might be better to return an object so it's got the key names too?
//
//        obtainKeys(theObject) {
//            var theType = theObject.theType();
//            var keys = [];
//
//            switch (theType) {
//            case "Task":
//                keys[0] = theObject.TaskId;
//                break;
//            case "TaskAssignment":
//                keys[0] = theObject.TaskId;
//                break;
//            default:
//                console.log("no match found");
//            }
//            return keys;
//        }
//
//        //Get the field array for a given object
//        //Written this so later can abstract it out into a full ORM layer
//        obtainFields(theObject) {
//            var theType = theObject.theType();
//            var fields = [];
//            var keys = [];
//
//            switch (theType) {
//            case "Task":
//                keys[0] = theObject.TaskId;
//                break;
//            case "TaskAssignment":
//                keys[0] = theObject.TaskId;
//                break;
//            default:
//                console.log("no match found");
//            }
//            return keys;
//        }
//
//        obtainValues(theObject) {
//            var theType = theObject.theType();
//            var values = [];
//            var keys = [];
//
//            switch (theType) {
//            case "Task":
//                values[0] = theObject.TaskId;
//                break;
//            case "TaskAssignment":
//                values[0] = theObject.TaskId;
//                break;
//            default:
//                console.log("no match found");
//            }
//            return keys;
//        }
//
//        replaceKeys(sql, arr) {
//            var newString = new sprint();
//            sql = newString.formatfieldname(sql, arr);
//            console.log(sql);
//            return sql;
//        }
//
//        replacefieldnames(sql, arr) {
//            var newString = new sprint();
//            sql = newString.formatfieldname(sql, arr);
//            console.log(sql);
//            return sql;
//        }
//
//        replaceFields(sql, arr) {
//            var newString = new sprint();
//            sql = newString.formatfieldvalue(sql, arr);
//            console.log(sql);
//            return sql;
//        }

////Removed from load method
//
////Should really bootstrap this from an array, hard coded just to get a prototype done
//            var sql = "";
//            var keys = [];
//
//            switch (theType) {
//            case "Task":
//                sql = "select * from task where TaskId = {0}";
//                keys[0] = theObject.TaskId;
//                break;
//            case "TaskAssignment":
//                sql = "select * from TaskAssignment where taskid = {0}";
//                keys[0] = theObject.TaskId;
//                break;
//            default:
//                console.log("no match found");
//            }
//
//            //Replace parameters with values  (should have used stored procs, would have been quicker than writing a string format function!
//            console.log(sql);
//            console.log(keys);
//
//            sql = this.replaceParameters(sql, keys);

//Quick function to replace parameters with the values        
//
//        replaceParameters(sql, arr) {
//            var newString = new sprint();
//            sql = newString.format(sql, arr);
//            console.log(sql);
//            return sql;
//        }