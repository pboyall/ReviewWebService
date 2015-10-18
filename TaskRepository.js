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
            //switch statement here when have more than one class
            theType = theType.substring(0, theType.indexOf("{"));
            //Should really bootstrap this from an array, hard coded just to get a prototype done

            console.log(theType.toString());

            /*
                            switch (theType) {
                            case n:
                                code block
                                break;
                            case n:
                                code block
                                break;
                            default:
                            default code block
                            }
            */
            var sql = "select * from task where task";

            var cb = function cbres(rows, rowCount) {
                console.log("End Rows:" + rowCount);
                console.log(rows);
            }

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