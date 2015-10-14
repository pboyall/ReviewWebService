'use strict';

var taskRepository = 

    class TaskRepository{

       constructor(WorkflowProcessId, dbContext){
            this._WorkflowProcessId = WorkflowProcessId;
            this._dbContext = dbContext;
        }

    save(TaskAssignment){
        //Hard coded SQL as proof of concept
     //_dbContext
        console.log('Bye');
    }

    }

module.exports = taskRepository;
