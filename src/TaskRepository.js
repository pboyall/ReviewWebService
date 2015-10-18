'use strict';

var taskRepository =

    class TaskRepository {

        constructor(Options) {
            this.WorkflowProcessId = Options.WorkflowProcessId;
            this.dbContext = Options.dbContext;
        }

        load(theObject, callme) {
            //Hard coded SQL as proof of concept
            //_dbContext
            console.log('load');
            console.log('instance of ');
            console.log(Object.getPrototypeOf(theObject));
            var theType = theObject.type();
            console.log(theType);
            //Should really bootstrap this from an array, hard coded just to get a prototype done

            console.log(theType.toString());

            var sql = "";

            switch (theType) {
            case "Task":
                sql = "select * from task where TaskId = {0}";
                break;
            case "Task Assignment":
                sql = "select * from task where taskid = {0}";
                break;
            default:
                //
            }

            var cb = function cbres(rows, rowCount) {
                console.log("End Rows:" + rowCount);
                console.log(rows);
            }

            //Replace parameters with values  (should have used stored procs, would have been quicker than writing a string format function!



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