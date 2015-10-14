'use strict';

var taskRepository =

    class TaskRepository {


        constructor(Options) {
            this.WorkflowProcessId = Options.WorkflowProcessId;
            this.dbContext = Options.dbContext;
        }

        save(theObject) {
            //Hard coded SQL as proof of concept
            //_dbContext
            console.log('save');

            console.log('instance of ')
            console.log(Object.getPrototypeOf(theObject));


            //switch statement here when have more than one class

            var sql = "select * from task";
            dbContext.query(sql, callme);
        }

    };

module.exports = taskRepository;