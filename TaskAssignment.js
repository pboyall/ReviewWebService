class TaskAssignment{
    
    constructor(TaskId, DateAssigned, GroupId, AccessType, NodeId, dbContext){
        this._TaskId = TaskId;
        this._DateAssigned = DateAssigned;
        this._GroupId = GroupId;
        this._AccessType = AccessType;
        this._NodeId = NodeId;
        this._dbContext = dbContext;
        
        var TableName = 'TaskAssignment';
        var Keys = {'TaskId', 'GroupId'};
        
        //Is there a way to iterate the properties in a javascript object?  Never tried it.
        //Maybe instead of unique properties we could have a dictionary object of name value pairs?
        //Then we could have a generic class for all the tables
        //Might be gettting carried away here
        
        var fields = {'DateAssigned','AccessType','NodeId'};
        
        sInsertSQL = 'Insert into ' . TableName . '(TaskId, GroupId, DateAssigned, AccessType, NodeId) Values (' . _TaskId . ',' . 
        
    }
    
        
  get TaskId() {
    return this._make;
  }

  get DateAssigned() {
    return this._DateAssigned;
  }
  get GroupId() {
    return this._GroupId;
  }
  get AccessType() {
    return this._AccessType;
  }
  get NodeId() {
    return this._NodeId;
  }

    toString(){
        return '${this.TaskId} ${this.DataAssigned}';   
    }
    
    
    
}