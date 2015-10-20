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

        //Get inserts/select/update SQL (mapping)
        // Consider how to do this with a field list/value list name-value pairing rather than hard-coding
        //Then only need one SQL statement and just replace table name, fields and values each time
        //These are just hard coded for now for speed - have started writing a full ORM but probably a bit pointless


        obtainSQL(theObject) {

            //[] delineates values
            //{} delineates field names

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
                insertsql = "insert into TaskAssignment ({0},{1},{2},{3},{4}) VALUES([0],[1], [2], [3], [4])";
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
        //Written this so later can abstract it out into a full ORM layer
        //Might be better to return an object so it's got the key names too?

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

        //Get the field array for a given object
        //Written this so later can abstract it out into a full ORM layer
        obtainFields(theObject) {
            var theType = theObject.theType();
            var fields = [];
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

        obtainValues(theObject) {
            var theType = theObject.theType();
            var values = [];
            var keys = [];

            switch (theType) {
            case "Task":
                values[0] = theObject.TaskId;
                break;
            case "TaskAssignment":
                values[0] = theObject.TaskId;
                break;
            default:
                console.log("no match found");
            }
            return keys;
        }


        populateSQL(theObject, sql) {
            var theType = theObject.theType();
            var fieldnames = [];
            var fieldvalues = [];
            var keys = [];
            var keyvalues = [];

            var selectSQL = "select ";
            var insertSQL = "insert into " + theObject.TableName + "";
            var deleteSQL = "delete ";
            var updateSQL = "update ";

            //Iterate over object and replace each SQL placeholder with the value
            //Suspect plain string formatting is a bit fragile here
            //Need matched pairs I guess in the SQL string
            //Would be just as dangerous to do it using a stored proc
            //unless had named parameters
            for (var property in theObject) {
                if (theObject.hasOwnProperty(property)) {
                    //Write out property name and value into SQL
                    if (selectSQL == "select ") {} else {
                        selectSQL = selectSQL + ",";
                    }
                    selectSQL = selectSQL + property;
                }
            }
            selectSQL = selectSQL + " from " + theObject.TableName;
            selectSQL = selectSQL + " where ";

            theObject.Keys.map(function (item) {
                console.log(item);
                console.log(theObject[item]);

            });

            this.replacefieldnames(sql, fieldnames);
            this.replaceFields(sql, fieldvalues);

        }

        //Quick function to replace parameters with the values        

        replaceParameters(sql, arr) {
            var newString = new sprint();
            sql = newString.format(sql, arr);
            console.log(sql);
            return sql;
        }

        replaceKeys(sql, arr) {
            var newString = new sprint();
            sql = newString.formatfieldname(sql, arr);
            console.log(sql);
            return sql;
        }

        replacefieldnames(sql, arr) {
            var newString = new sprint();
            sql = newString.formatfieldname(sql, arr);
            console.log(sql);
            return sql;
        }

        replaceFields(sql, arr) {
            var newString = new sprint();
            sql = newString.formatfieldvalue(sql, arr);
            console.log(sql);
            return sql;
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
            console.log(sql);
            console.log(keys);

            //replace sql paramters with values

            sql = this.replaceParameters(sql, keys);

            //this.dbContext.ConnectAndQuery(sql, callme);

            console.log(sql);

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