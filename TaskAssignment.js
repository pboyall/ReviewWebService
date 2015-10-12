class TaskAssignment{
    
    constructor(TaskId, DateAssigned, GroupId, AccessType, NodeId, dbContext){
        this._TaskId = TaskId;
        this._DateAssigned = DateAssigned;
        this._GroupId = GroupId;
        this._AccessType = AccessType;
        this._NodeId = NodeId;
        this._dbContext = dbContext;
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