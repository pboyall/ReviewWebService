--Show the relationship for the start of a given process flow
select B.RelationTypeId, R.RelationDescription, B.AccessType from BranchNode B Join RelationType R on R.RelationTypeId = B.RelationTypeId where NodeId = 1
and Type='Start'
select MasterGroupId, RelativeGroupId, R.RelationDescription from GroupRoleRelation G JOIN RelationType R on G.RelationTypeId = R.RelationTypeId
	WHERE 
	ApprovalProcessId = 4 AND
	MasterGroupId = 1 AND 
	G.RelationTypeId  = 1

--Show who is in what group

Select UserName, GroupName, U.GroupId, X.PersonId from UserGroup U join SysGroup S On S.GroupId = U.GroupId Join Users X on X.PersonId = U.PersonId

--Show the output nodes, conditions and relationships for a given node

select OutputNodeId, ConditionTest, ConditionDescription, 	RelationTypeId, Type, AccessType 
from BranchNode B
join 
BranchCondition C on B.ConditionId =  C.ConditionId 
Where NodeId IN
(
select OutputNodeId from BranchNode where NodeId = 1
)

--9	Success	Submission Success	1	FirstApprovalNode	1
--7	Reject	Rejection	0	End-Rejected	1





--Show the names of the Master and Relative Groups for each approval type

select StartNodeId, ApprovalType, G.GroupName as Master, H.GroupName as Relative, R.RelationDescription, R.Recursive , R2.RelationDescription as InverseRelation 
from GroupRoleRelation GR 
join SysGroup G ON GR.MasterGroupId = G.GroupId 
Join SysGroup H on GR.RelativeGroupId = H.GroupId
Join RelationType R  on GR.RelationTypeId= R.RelationTypeID
Join ApprovalProcessTypes A on A.ApprovalProcessId = GR.ApprovalProcessId
left Join RelationType R2  on R.InverseRelationTypeId = R2.RelationTypeID




select ApprovalType, R.GroupRelationId, T.RelationDescription, R2.RelationDescription as InverseRelation 
from ApprovalProcessTypes A 
join GroupRoleRelation R  on A.ApprovalProcessId = R.ApprovalProcessId
Join RelationType T  on R.RelationTypeId= t.RelationTypeID
left Join RelationType R2  on T.InverseRelationTypeId = R2.RelationTypeID


select * from Task

select * from TaskNode



select * from BranchNode
select * from RelationType
SELECT * from ApprovalProcessTypes
select * from SysGroup
select * from Users
Select * from UserGroup
select * from Node
select * from BranchCondition
select * from Company
select * from CorpFunction
Select * from Product
Select * from Region
select * from UserPwdHistory
select * from ITSystem
Select * from SystemUser

select * from PersonDelegate
select * from DelegateTaskAssignment
