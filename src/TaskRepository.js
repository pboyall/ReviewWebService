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

        //Quick function to replace parameters with the values        

        replaceParameters(sql, arr) {
            var newString = new sprint();
            sql = newString.format(sql, arr);
            console.log(sql);
            return sql;
        }

        //Get inserts/select/update SQL (mapping)
        // Consider how to do this with a field list/value list name-value pairing rather than hard-coding
        //Then only need one SQL statement and just replace table name, fields and values each time

        obtainSQL(theObject) {
            var theType = theObject.theType();
            var selectsql, updatesql, insertsql;

            switch (theType) {
            case "Task":
                selectsql = "select * from Task where TaskId = {0}";
                updatesql = "Update Task set where TaskId = {0}";
                insertsql = "insert into Task() values()";
                break;
            case "TaskAssignment":
                selectsql = "select * from TaskAssignment where taskid = {0}";
                updatesql = "Update TaskAssignment set where TaskId = {0}";
                insertsql = "insert into TaskAssignment (TaskId, DateAssigned, GroupId, AccessType, NodeId) VALUES({0}, getdate(), {1}, {2}, {3})";
                break;
            default:
                console.log("no match found");
            }

            return {
                update: updatesql,
                select: selectsql,
                insert: insertsql
            };
        }

        //Get the key array for a given object

        obtainKeys(theObject) {
            var theType = theObject.theType();
            var keys = [];

            switch (theType) {
            case "Task":
                keys[0] = theObject.TaskId;
                break;
            case "TaskAssignment":
                keys[0] = theObject.TaskId;
                break;
            default:
                console.log("no match found");
            }
            return keys;
        }

        load(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            var theType = theObject.theType();
            console.log('load instance of ' + Object.getPrototypeOf(theObject) + ' (' + theType + ')');
            //Should really bootstrap this from an array, hard coded just to get a prototype done
            var sql = "";
            var keys = [];

            switch (theType) {
            case "Task":
                sql = "select * from task where TaskId = {0}";
                keys[0] = theObject.TaskId;
                break;
            case "TaskAssignment":
                sql = "select * from TaskAssignment where taskid = {0}";
                keys[0] = theObject.TaskId;
                break;
            default:
                console.log("no match found");
            }

            //Replace parameters with values  (should have used stored procs, would have been quicker than writing a string format function!
            console.log(sql);
            console.log(keys);

            sql = this.replaceParameters(sql, keys);

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
            sql = sqlobj.insert;
            console.log(sql);
            keys = this.obtainKeys(theObject);
            console.log(keys);
            console.log(sql);
            //replace sql paramters with values

            sql = this.replaceParameters(sql, keys);

            //this.dbContext.ConnectAndQuery(sql, callme);

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