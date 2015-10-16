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
            //switch statement here when have more than one class

            var sql = "select * from task";
            this.dbContext.ConnectAndQuery(sql, callme);
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