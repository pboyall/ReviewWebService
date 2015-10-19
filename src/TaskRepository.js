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

        replaceParameters(sql, arr) {
            var newString = new sprint();
            sql = newString.format(sql, arr);
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

            switch (theType) {
            case "Task":
                sql = "select * from task where TaskId = {0}";
                break;
            case "TaskAssignment":
                sql = "select * from task where taskid = {0}";
                break;
            default:
                console.log("no match found");
            }

            var cb = function cbres(rows, rowCount) {
                console.log("End Rows:" + rowCount);
                console.log(rows);
            };



            //Replace parameters with values  (should have used stored procs, would have been quicker than writing a string format function!
            console.log(sql);

            //Quick test
            var keys = ['1'];

            sql = this.replaceParameters(sql, keys);
            this.dbContext.ConnectAndQuery(sql, cb);
        }



        save(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            console.log('save');
            console.log('instance of ');
            console.log(Object.getPrototypeOf(theObject));
            //switch statement here when have more than one class
            var sql = "select * from task";
            this.dbContext.ConnectAndQuery(sql, callme);
        }
    };





module.exports = taskRepository;