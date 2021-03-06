USE [master]
GO
/****** Object:  Database [ReviewProject]    Script Date: 27/10/2015 09:35:47 ******/
CREATE DATABASE [ReviewProject]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ReviewProject', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\ReviewProject.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'ReviewProject_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\ReviewProject_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ReviewProject] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ReviewProject].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ReviewProject] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ReviewProject] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ReviewProject] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ReviewProject] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ReviewProject] SET ARITHABORT OFF 
GO
ALTER DATABASE [ReviewProject] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ReviewProject] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [ReviewProject] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ReviewProject] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ReviewProject] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ReviewProject] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ReviewProject] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ReviewProject] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ReviewProject] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ReviewProject] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ReviewProject] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ReviewProject] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ReviewProject] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ReviewProject] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ReviewProject] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ReviewProject] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ReviewProject] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ReviewProject] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ReviewProject] SET RECOVERY FULL 
GO
ALTER DATABASE [ReviewProject] SET  MULTI_USER 
GO
ALTER DATABASE [ReviewProject] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ReviewProject] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ReviewProject] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ReviewProject] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'ReviewProject', N'ON'
GO
USE [ReviewProject]
GO
/****** Object:  User [radmin]    Script Date: 27/10/2015 09:35:47 ******/
CREATE USER [radmin] FOR LOGIN [radmin] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [radmin]
GO
/****** Object:  Table [dbo].[AccessType]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccessType](
	[AccessTypeId] [int] IDENTITY(1,1) NOT NULL,
	[AccessDescription] [nvarchar](50) NULL,
 CONSTRAINT [PK_AccessType] PRIMARY KEY CLUSTERED 
(
	[AccessTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ApprovalProcessTypes]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApprovalProcessTypes](
	[ApprovalProcessId] [int] IDENTITY(1,1) NOT NULL,
	[StartNodeId] [int] NULL,
	[ApprovalType] [nvarchar](max) NULL,
	[CompanyId] [int] NULL,
	[FunctionId] [int] NULL,
	[ProductId] [int] NULL,
	[RegionId] [int] NULL,
 CONSTRAINT [PK_ApprovalProcessTypes] PRIMARY KEY CLUSTERED 
(
	[ApprovalProcessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Audit_Log]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Audit_Log](
	[AuditId] [int] IDENTITY(1,1) NOT NULL,
	[PersonId] [int] NOT NULL,
	[DelegateId] [int] NULL,
	[TableName] [nvarchar](max) NULL,
	[ColumnName] [nvarchar](max) NULL,
	[AuditedAction] [nvarchar](max) NULL,
	[AuditCriteria] [nvarchar](max) NULL,
 CONSTRAINT [PK_Audit_Log] PRIMARY KEY CLUSTERED 
(
	[AuditId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[AuditDefinition]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuditDefinition](
	[AuditDefinitionId] [int] IDENTITY(1,1) NOT NULL,
	[TableName] [nvarchar](max) NOT NULL,
	[ColumnName] [nvarchar](max) NOT NULL,
	[AuditOn] [nvarchar](max) NULL,
 CONSTRAINT [PK_AuditDefinition] PRIMARY KEY CLUSTERED 
(
	[AuditDefinitionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BranchCondition]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BranchCondition](
	[ConditionId] [int] IDENTITY(1,1) NOT NULL,
	[ConditionTest] [nvarchar](max) NULL,
	[ConditionDescription] [nvarchar](50) NULL,
 CONSTRAINT [PK_BranchCondition] PRIMARY KEY CLUSTERED 
(
	[ConditionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[BranchNode]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BranchNode](
	[GuardId] [int] IDENTITY(1,1) NOT NULL,
	[NodeId] [int] NOT NULL,
	[OutputNodeId] [int] NULL,
	[ConditionId] [int] NOT NULL,
	[RelationTypeId] [int] NOT NULL,
	[Type] [nvarchar](50) NULL,
	[AccessType] [int] NULL,
 CONSTRAINT [PK_BranchNode_1] PRIMARY KEY CLUSTERED 
(
	[GuardId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Company]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[CompanyId] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[CompanyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[CorpFunction]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CorpFunction](
	[FunctionId] [int] IDENTITY(1,1) NOT NULL,
	[FunctionName] [nchar](10) NULL,
	[CompanyID] [int] NULL,
 CONSTRAINT [PK_Function] PRIMARY KEY CLUSTERED 
(
	[FunctionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[DelegateTaskAssignment]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DelegateTaskAssignment](
	[TaskId] [int] NOT NULL,
	[PersonId] [int] NOT NULL,
	[DelegateId] [int] NOT NULL,
	[DateAssigned] [datetime] NULL,
 CONSTRAINT [PK_DelegateTaskAssignment] PRIMARY KEY CLUSTERED 
(
	[TaskId] ASC,
	[PersonId] ASC,
	[DelegateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GroupRoleRelation]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GroupRoleRelation](
	[GroupRelationId] [int] IDENTITY(1,1) NOT NULL,
	[MasterGroupId] [int] NULL,
	[RelativeGroupId] [int] NULL,
	[DateUpdated] [datetime] NULL,
	[Enabled] [int] NULL,
	[RelationTypeId] [int] NOT NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[ApprovalProcessId] [int] NULL,
	[GroupRoleWeight] [int] NULL,
 CONSTRAINT [PK_GroupRelation] PRIMARY KEY CLUSTERED 
(
	[GroupRelationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ITSystem]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ITSystem](
	[SystemId] [int] IDENTITY(1,1) NOT NULL,
	[SystemName] [nvarchar](max) NULL,
	[SystemEndpoint] [nvarchar](max) NULL,
	[URL] [nvarchar](max) NULL,
	[RedirectURL] [nvarchar](max) NULL,
	[SystemHash] [nvarchar](max) NULL,
	[SystemToken] [nvarchar](max) NULL,
	[SystemSharedSecret] [nvarchar](max) NULL,
 CONSTRAINT [PK_System] PRIMARY KEY CLUSTERED 
(
	[SystemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Node]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Node](
	[NodeId] [int] IDENTITY(1,1) NOT NULL,
	[NodeDescription] [nvarchar](50) NOT NULL,
	[NodeType] [nvarchar](50) NULL,
 CONSTRAINT [PK_Node] PRIMARY KEY CLUSTERED 
(
	[NodeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PersonDelegate]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonDelegate](
	[PersonId] [int] NOT NULL,
	[DelegateId] [int] NOT NULL,
	[DateUpdated] [datetime] NOT NULL,
	[Enabled] [int] NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[RelationTypeId] [int] NULL,
	[GroupId] [int] NULL,
	[DelegationId] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_PERSON_DELEGATE] PRIMARY KEY CLUSTERED 
(
	[DelegationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Product]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ProductId] [int] IDENTITY(1,1) NOT NULL,
	[ProductName] [nvarchar](max) NULL,
	[FunctionId] [int] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Region]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Region](
	[RegionId] [int] IDENTITY(1,1) NOT NULL,
	[RegionName] [nchar](10) NULL,
	[ProductId] [int] NULL,
 CONSTRAINT [PK_Region] PRIMARY KEY CLUSTERED 
(
	[RegionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[RelationType]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RelationType](
	[RelationTypeId] [int] IDENTITY(1,1) NOT NULL,
	[RelationDescription] [nvarchar](max) NULL,
	[Recursive] [int] NULL,
	[NumberofRecursions] [int] NULL,
	[InverseRelationTypeId] [int] NULL,
 CONSTRAINT [PK_RelationType] PRIMARY KEY CLUSTERED 
(
	[RelationTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SysGroup]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SysGroup](
	[GroupId] [int] IDENTITY(1,1) NOT NULL,
	[GroupName] [nvarchar](max) NOT NULL,
	[CompanyId] [int] NULL,
	[FunctionId] [int] NULL,
	[ProductId] [int] NULL,
	[RegionId] [int] NULL,
 CONSTRAINT [PK_Group] PRIMARY KEY CLUSTERED 
(
	[GroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SystemUser]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemUser](
	[SystemId] [int] NOT NULL,
	[PersonId] [int] NOT NULL,
	[SystemUserIdentifier] [nvarchar](max) NULL,
	[SystemUserPassword] [nvarchar](max) NULL,
	[SystemHash] [nvarchar](max) NULL,
	[SystemSharedSecret] [nvarchar](max) NULL,
 CONSTRAINT [PK_SystemUser] PRIMARY KEY CLUSTERED 
(
	[SystemId] ASC,
	[PersonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Task]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[TaskId] [int] IDENTITY(1,1) NOT NULL,
	[DateUpdated] [datetime] NULL,
	[Status] [nvarchar](50) NULL,
	[RaiserUserId] [int] NULL,
	[ApprovalProcessType] [int] NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[TaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskAssignment]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskAssignment](
	[TaskId] [int] NOT NULL,
	[DateAssigned] [datetime] NULL,
	[GroupId] [int] NOT NULL,
	[AccessType] [nvarchar](50) NULL,
	[NodeId] [int] NULL,
 CONSTRAINT [PK_TaskAssignment_1] PRIMARY KEY CLUSTERED 
(
	[TaskId] ASC,
	[GroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskAssignmentHistory]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskAssignmentHistory](
	[TaskId] [int] NULL,
	[GroupId] [int] NULL,
	[NodeId] [int] NULL,
	[DateUpdated] [datetime] NULL,
	[Outcome] [nvarchar](50) NULL,
	[TaskAssignmentHistoryId] [int] IDENTITY(1,1) NOT NULL,
	[ApproverId] [int] NULL,
	[ConditionTest] [nvarchar](50) NULL,
 CONSTRAINT [PK_TaskAssignmentHistory] PRIMARY KEY CLUSTERED 
(
	[TaskAssignmentHistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaskNode]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskNode](
	[TaskId] [int] NOT NULL,
	[NodeId] [int] NOT NULL,
	[DateUpdated] [date] NULL,
	[GroupId] [int] NULL,
	[TaskNodeId] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_TaskNode] PRIMARY KEY CLUSTERED 
(
	[TaskNodeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserGroup]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserGroup](
	[GroupId] [int] NOT NULL,
	[PersonId] [int] NOT NULL,
	[DateUpdated] [datetime] NOT NULL,
	[Enabled] [int] NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
 CONSTRAINT [PK_UserGroup_1] PRIMARY KEY CLUSTERED 
(
	[GroupId] ASC,
	[PersonId] ASC,
	[DateUpdated] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserPwdHistory]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPwdHistory](
	[PersonId] [int] NOT NULL,
	[Password] [nvarchar](max) NULL,
	[Salt] [nvarchar](max) NULL,
	[DateUpdated] [datetime] NOT NULL,
 CONSTRAINT [PK_UserPwdHistory] PRIMARY KEY CLUSTERED 
(
	[PersonId] ASC,
	[DateUpdated] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Users]    Script Date: 27/10/2015 09:35:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[PersonId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[Enabled] [int] NULL,
	[LoginId] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[PersonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[AccessType] ON 

INSERT [dbo].[AccessType] ([AccessTypeId], [AccessDescription]) VALUES (1, N'Full')
INSERT [dbo].[AccessType] ([AccessTypeId], [AccessDescription]) VALUES (2, N'ReadOnly')
SET IDENTITY_INSERT [dbo].[AccessType] OFF
SET IDENTITY_INSERT [dbo].[ApprovalProcessTypes] ON 

INSERT [dbo].[ApprovalProcessTypes] ([ApprovalProcessId], [StartNodeId], [ApprovalType], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (3, 1, N'Sequential', 1, 1, 1, 1)
INSERT [dbo].[ApprovalProcessTypes] ([ApprovalProcessId], [StartNodeId], [ApprovalType], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (4, 2, N'Hierarchical', 1, 1, 2, 1)
INSERT [dbo].[ApprovalProcessTypes] ([ApprovalProcessId], [StartNodeId], [ApprovalType], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (5, 3, N'Voting', 1, 1, 1, 2)
INSERT [dbo].[ApprovalProcessTypes] ([ApprovalProcessId], [StartNodeId], [ApprovalType], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (6, 4, N'Unanimous', 2, 1, 1, 1)
SET IDENTITY_INSERT [dbo].[ApprovalProcessTypes] OFF
SET IDENTITY_INSERT [dbo].[BranchCondition] ON 

INSERT [dbo].[BranchCondition] ([ConditionId], [ConditionTest], [ConditionDescription]) VALUES (1, N'Success', N'Submission Success')
INSERT [dbo].[BranchCondition] ([ConditionId], [ConditionTest], [ConditionDescription]) VALUES (2, N'Reject', N'Rejection')
INSERT [dbo].[BranchCondition] ([ConditionId], [ConditionTest], [ConditionDescription]) VALUES (3, N'VoteYes', NULL)
INSERT [dbo].[BranchCondition] ([ConditionId], [ConditionTest], [ConditionDescription]) VALUES (4, N'VoteNo', NULL)
INSERT [dbo].[BranchCondition] ([ConditionId], [ConditionTest], [ConditionDescription]) VALUES (5, N'Null', N'No Test')
SET IDENTITY_INSERT [dbo].[BranchCondition] OFF
SET IDENTITY_INSERT [dbo].[BranchNode] ON 

INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (1, 5, 9, 1, 1, N'FirstApprovalNodeSequential', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (3, 5, 7, 2, 0, N'EndAtFirstStep-RejectedSequential', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (8, 10, 6, 1, 0, N'IntermediateApproval', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (9, 10, 7, 2, 0, N'IntermediateApproval', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (10, 7, NULL, 5, 4, N'EndAtSecondStep-Rejected', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (13, 6, NULL, 5, 4, N'EndAtSecondStep-Approved', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (14, 1, 5, 5, 1, N'Start', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (16, 9, 10, 5, 1, N'IntermediateResult', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (17, 4, 11, 5, 1, N'Start', 1)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (21, 11, 16, 1, 0, N'End-Approved', NULL)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (22, 11, 17, 2, 0, N'End-Rejected', NULL)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (23, 2, 18, 5, 2, N'Start', NULL)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (26, 18, 19, 1, 2, N'FirstapprovalNodeHierachical', NULL)
INSERT [dbo].[BranchNode] ([GuardId], [NodeId], [OutputNodeId], [ConditionId], [RelationTypeId], [Type], [AccessType]) VALUES (29, 18, 20, 2, 0, N'EndAtFirstStep-RejectedSequential', NULL)
SET IDENTITY_INSERT [dbo].[BranchNode] OFF
SET IDENTITY_INSERT [dbo].[Company] ON 

INSERT [dbo].[Company] ([CompanyId], [CompanyName]) VALUES (1, N'PW')
INSERT [dbo].[Company] ([CompanyId], [CompanyName]) VALUES (2, N'AV')
SET IDENTITY_INSERT [dbo].[Company] OFF
SET IDENTITY_INSERT [dbo].[CorpFunction] ON 

INSERT [dbo].[CorpFunction] ([FunctionId], [FunctionName], [CompanyID]) VALUES (1, N'CMLR      ', NULL)
INSERT [dbo].[CorpFunction] ([FunctionId], [FunctionName], [CompanyID]) VALUES (2, N'MedReg    ', NULL)
INSERT [dbo].[CorpFunction] ([FunctionId], [FunctionName], [CompanyID]) VALUES (3, N'ePass     ', NULL)
SET IDENTITY_INSERT [dbo].[CorpFunction] OFF
SET IDENTITY_INSERT [dbo].[GroupRoleRelation] ON 

INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (3, 1, 2, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 3, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (4, 2, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 3, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 3, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (5, 2, 3, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 3, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (6, 3, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 4, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 3, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (7, 1, 4, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 6, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (8, 1, 5, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 5, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (9, 4, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 3, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 6, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (10, 5, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, 4, CAST(N'2000-01-01 00:00:00.000' AS DateTime), NULL, 5, NULL)
INSERT [dbo].[GroupRoleRelation] ([GroupRelationId], [MasterGroupId], [RelativeGroupId], [DateUpdated], [Enabled], [RelationTypeId], [StartDate], [EndDate], [ApprovalProcessId], [GroupRoleWeight]) VALUES (11, 1, 2, NULL, 1, 2, NULL, NULL, 4, NULL)
SET IDENTITY_INSERT [dbo].[GroupRoleRelation] OFF
SET IDENTITY_INSERT [dbo].[ITSystem] ON 

INSERT [dbo].[ITSystem] ([SystemId], [SystemName], [SystemEndpoint], [URL], [RedirectURL], [SystemHash], [SystemToken], [SystemSharedSecret]) VALUES (1, N'Active Directory', N'PWSBS', NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[ITSystem] OFF
SET IDENTITY_INSERT [dbo].[Node] ON 

INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (1, N'StartNodeForSequentialWorkflow', N'Node')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (2, N'StartNodeForHierarchialWorkflow', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (3, N'StartNodeForVotingWorkflow', N'Node')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (4, N'StartNodeForUnanimousWorkFlow', N'Node')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (5, N'FirstApprovalNodeForSequentialWorkflow', N'Transition')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (6, N'EndNodeForSequentialWorkflow', N'Node')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (7, N'FailureEndNodeForSequentialWorkflow', N'Node')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (9, N'IntermediateResultNodeForSequentialWorkflow', N'Node')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (10, N'IntermediateApprovalForSequentialWorkflow', N'Transition')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (11, N'FirstApprovalNodeForUnanimousGroup1', N'Transition')
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (16, N'EndNodeForUnanimous', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (17, N'FailureEndNodeForUnanimous', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (18, N'FirstApprovalNodeForHierarchicalWorkflow', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (19, N'SuccessNodeForHierarchicalWorkflow', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (20, N'FailureNodeForHierarchicalWorkflow', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (21, N'FirstApprovalNodeForVotingGroup1', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (22, N'EndNodeForVoting', NULL)
INSERT [dbo].[Node] ([NodeId], [NodeDescription], [NodeType]) VALUES (23, N'FailureEndNodeForVoting', NULL)
SET IDENTITY_INSERT [dbo].[Node] OFF
SET IDENTITY_INSERT [dbo].[Product] ON 

INSERT [dbo].[Product] ([ProductId], [ProductName], [FunctionId]) VALUES (1, N'HCV', NULL)
INSERT [dbo].[Product] ([ProductId], [ProductName], [FunctionId]) VALUES (2, N'Duodopa', NULL)
SET IDENTITY_INSERT [dbo].[Product] OFF
SET IDENTITY_INSERT [dbo].[Region] ON 

INSERT [dbo].[Region] ([RegionId], [RegionName], [ProductId]) VALUES (1, N'Global    ', NULL)
INSERT [dbo].[Region] ([RegionId], [RegionName], [ProductId]) VALUES (2, N'UK        ', NULL)
INSERT [dbo].[Region] ([RegionId], [RegionName], [ProductId]) VALUES (3, N'France    ', NULL)
SET IDENTITY_INSERT [dbo].[Region] OFF
SET IDENTITY_INSERT [dbo].[RelationType] ON 

INSERT [dbo].[RelationType] ([RelationTypeId], [RelationDescription], [Recursive], [NumberofRecursions], [InverseRelationTypeId]) VALUES (1, N'Approve', 0, NULL, 3)
INSERT [dbo].[RelationType] ([RelationTypeId], [RelationDescription], [Recursive], [NumberofRecursions], [InverseRelationTypeId]) VALUES (2, N'RecursiveApprove', 1, 4, NULL)
INSERT [dbo].[RelationType] ([RelationTypeId], [RelationDescription], [Recursive], [NumberofRecursions], [InverseRelationTypeId]) VALUES (3, N'Reject', 0, NULL, 1)
INSERT [dbo].[RelationType] ([RelationTypeId], [RelationDescription], [Recursive], [NumberofRecursions], [InverseRelationTypeId]) VALUES (4, N'RejectToStart', 0, NULL, NULL)
INSERT [dbo].[RelationType] ([RelationTypeId], [RelationDescription], [Recursive], [NumberofRecursions], [InverseRelationTypeId]) VALUES (5, N'RecursiveReject', 1, 4, 2)
SET IDENTITY_INSERT [dbo].[RelationType] OFF
SET IDENTITY_INSERT [dbo].[SysGroup] ON 

INSERT [dbo].[SysGroup] ([GroupId], [GroupName], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (1, N'Creators', 1, NULL, NULL, NULL)
INSERT [dbo].[SysGroup] ([GroupId], [GroupName], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (2, N'Approvers', 1, NULL, NULL, NULL)
INSERT [dbo].[SysGroup] ([GroupId], [GroupName], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (3, N'Second Approvers', 1, NULL, NULL, NULL)
INSERT [dbo].[SysGroup] ([GroupId], [GroupName], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (4, N'Unanimous Approvers', 1, NULL, NULL, NULL)
INSERT [dbo].[SysGroup] ([GroupId], [GroupName], [CompanyId], [FunctionId], [ProductId], [RegionId]) VALUES (5, N'Voting Approvers', 1, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[SysGroup] OFF
INSERT [dbo].[SystemUser] ([SystemId], [PersonId], [SystemUserIdentifier], [SystemUserPassword], [SystemHash], [SystemSharedSecret]) VALUES (1, 1, N'PW\boyallP', N'Pa$4word0', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Task] ON 

INSERT [dbo].[Task] ([TaskId], [DateUpdated], [Status], [RaiserUserId], [ApprovalProcessType]) VALUES (1, CAST(N'2015-10-26 15:54:05.583' AS DateTime), N'I', 1, 3)
INSERT [dbo].[Task] ([TaskId], [DateUpdated], [Status], [RaiserUserId], [ApprovalProcessType]) VALUES (2, CAST(N'2015-10-09 18:33:39.737' AS DateTime), N'I', 1, 6)
INSERT [dbo].[Task] ([TaskId], [DateUpdated], [Status], [RaiserUserId], [ApprovalProcessType]) VALUES (5, CAST(N'2000-01-01 00:00:00.000' AS DateTime), N'I', 1, 3)
INSERT [dbo].[Task] ([TaskId], [DateUpdated], [Status], [RaiserUserId], [ApprovalProcessType]) VALUES (6, CAST(N'2015-10-26 15:27:44.840' AS DateTime), N'I', 1, 3)
SET IDENTITY_INSERT [dbo].[Task] OFF
INSERT [dbo].[TaskAssignment] ([TaskId], [DateAssigned], [GroupId], [AccessType], [NodeId]) VALUES (1, CAST(N'2015-01-15 00:00:00.000' AS DateTime), 1, N'1', 1)
INSERT [dbo].[TaskAssignment] ([TaskId], [DateAssigned], [GroupId], [AccessType], [NodeId]) VALUES (2, CAST(N'2015-10-10 18:40:07.943' AS DateTime), 4, N'1', 4)
SET IDENTITY_INSERT [dbo].[TaskAssignmentHistory] ON 

INSERT [dbo].[TaskAssignmentHistory] ([TaskId], [GroupId], [NodeId], [DateUpdated], [Outcome], [TaskAssignmentHistoryId], [ApproverId], [ConditionTest]) VALUES (1, 2, 9, CAST(N'2015-10-09 17:07:43.140' AS DateTime), N'Sucess', 4, 13, NULL)
INSERT [dbo].[TaskAssignmentHistory] ([TaskId], [GroupId], [NodeId], [DateUpdated], [Outcome], [TaskAssignmentHistoryId], [ApproverId], [ConditionTest]) VALUES (2, 4, 4, CAST(N'2015-10-10 19:31:09.920' AS DateTime), N'Success', 5, 10, NULL)
INSERT [dbo].[TaskAssignmentHistory] ([TaskId], [GroupId], [NodeId], [DateUpdated], [Outcome], [TaskAssignmentHistoryId], [ApproverId], [ConditionTest]) VALUES (1, 2, 9, CAST(N'2015-10-26 15:47:40.313' AS DateTime), N'Sucess', 6, 13, N'Success')
INSERT [dbo].[TaskAssignmentHistory] ([TaskId], [GroupId], [NodeId], [DateUpdated], [Outcome], [TaskAssignmentHistoryId], [ApproverId], [ConditionTest]) VALUES (1, 3, 9, CAST(N'2015-10-26 15:54:11.653' AS DateTime), N'Sucess', 7, 14, N'Success')
SET IDENTITY_INSERT [dbo].[TaskAssignmentHistory] OFF
SET IDENTITY_INSERT [dbo].[TaskNode] ON 

INSERT [dbo].[TaskNode] ([TaskId], [NodeId], [DateUpdated], [GroupId], [TaskNodeId]) VALUES (2, 4, CAST(N'2015-10-10' AS Date), 4, 8)
INSERT [dbo].[TaskNode] ([TaskId], [NodeId], [DateUpdated], [GroupId], [TaskNodeId]) VALUES (1, 6, CAST(N'2015-10-26' AS Date), 3, 11)
SET IDENTITY_INSERT [dbo].[TaskNode] OFF
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (1, 1, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (2, 2, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (2, 3, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (2, 13, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (3, 4, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (3, 14, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (4, 10, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (4, 11, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (4, 12, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (5, 7, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (5, 8, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
INSERT [dbo].[UserGroup] ([GroupId], [PersonId], [DateUpdated], [Enabled], [StartDate], [EndDate]) VALUES (5, 9, CAST(N'2000-01-01 00:00:00.000' AS DateTime), 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (1, N'Peter Boyall', 1, N'pboyall')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (2, N'Jason Gay', 1, N'jGay')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (3, N'Julian Willing', 1, N'jWilling')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (4, N'David Walters', 1, N'DWalters')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (5, N'The Judge', 1, N'Judge')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (7, N'The Jury 1', NULL, N'Jury1')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (8, N'The Jury2', NULL, N'Jury2')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (9, N'TheJury3', NULL, N'Jury3')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (10, N'Unanimous1', NULL, N'Uni1')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (11, N'Unanimous2', NULL, N'Uni2')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (12, N'Unanimous3', NULL, N'Uni3')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (13, N'Sequential1', NULL, N'Sequential1')
INSERT [dbo].[Users] ([PersonId], [UserName], [Enabled], [LoginId]) VALUES (14, N'Sequential2', NULL, N'Sequential2')
SET IDENTITY_INSERT [dbo].[Users] OFF
ALTER TABLE [dbo].[ApprovalProcessTypes]  WITH CHECK ADD  CONSTRAINT [FK_ApprovalProcessTypes_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([CompanyId])
GO
ALTER TABLE [dbo].[ApprovalProcessTypes] CHECK CONSTRAINT [FK_ApprovalProcessTypes_Company]
GO
ALTER TABLE [dbo].[ApprovalProcessTypes]  WITH CHECK ADD  CONSTRAINT [FK_ApprovalProcessTypes_Function] FOREIGN KEY([FunctionId])
REFERENCES [dbo].[CorpFunction] ([FunctionId])
GO
ALTER TABLE [dbo].[ApprovalProcessTypes] CHECK CONSTRAINT [FK_ApprovalProcessTypes_Function]
GO
ALTER TABLE [dbo].[ApprovalProcessTypes]  WITH CHECK ADD  CONSTRAINT [FK_ApprovalProcessTypes_Node] FOREIGN KEY([StartNodeId])
REFERENCES [dbo].[Node] ([NodeId])
GO
ALTER TABLE [dbo].[ApprovalProcessTypes] CHECK CONSTRAINT [FK_ApprovalProcessTypes_Node]
GO
ALTER TABLE [dbo].[ApprovalProcessTypes]  WITH CHECK ADD  CONSTRAINT [FK_ApprovalProcessTypes_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
GO
ALTER TABLE [dbo].[ApprovalProcessTypes] CHECK CONSTRAINT [FK_ApprovalProcessTypes_Product]
GO
ALTER TABLE [dbo].[ApprovalProcessTypes]  WITH CHECK ADD  CONSTRAINT [FK_ApprovalProcessTypes_Region] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Region] ([RegionId])
GO
ALTER TABLE [dbo].[ApprovalProcessTypes] CHECK CONSTRAINT [FK_ApprovalProcessTypes_Region]
GO
ALTER TABLE [dbo].[BranchNode]  WITH CHECK ADD  CONSTRAINT [FK_BranchNode_BranchCondition] FOREIGN KEY([ConditionId])
REFERENCES [dbo].[BranchCondition] ([ConditionId])
GO
ALTER TABLE [dbo].[BranchNode] CHECK CONSTRAINT [FK_BranchNode_BranchCondition]
GO
ALTER TABLE [dbo].[BranchNode]  WITH CHECK ADD  CONSTRAINT [FK_BranchNode_Node] FOREIGN KEY([OutputNodeId])
REFERENCES [dbo].[Node] ([NodeId])
GO
ALTER TABLE [dbo].[BranchNode] CHECK CONSTRAINT [FK_BranchNode_Node]
GO
ALTER TABLE [dbo].[BranchNode]  WITH CHECK ADD  CONSTRAINT [FK_BranchNode_Node1] FOREIGN KEY([NodeId])
REFERENCES [dbo].[Node] ([NodeId])
GO
ALTER TABLE [dbo].[BranchNode] CHECK CONSTRAINT [FK_BranchNode_Node1]
GO
ALTER TABLE [dbo].[DelegateTaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_DelegateTaskAssignment_Task] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([TaskId])
GO
ALTER TABLE [dbo].[DelegateTaskAssignment] CHECK CONSTRAINT [FK_DelegateTaskAssignment_Task]
GO
ALTER TABLE [dbo].[DelegateTaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_DelegateTaskAssignment_Users] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Users] ([PersonId])
GO
ALTER TABLE [dbo].[DelegateTaskAssignment] CHECK CONSTRAINT [FK_DelegateTaskAssignment_Users]
GO
ALTER TABLE [dbo].[GroupRoleRelation]  WITH CHECK ADD  CONSTRAINT [FK_GroupRelation_RelationType] FOREIGN KEY([RelationTypeId])
REFERENCES [dbo].[RelationType] ([RelationTypeId])
GO
ALTER TABLE [dbo].[GroupRoleRelation] CHECK CONSTRAINT [FK_GroupRelation_RelationType]
GO
ALTER TABLE [dbo].[GroupRoleRelation]  WITH CHECK ADD  CONSTRAINT [FK_GroupRoleRelation_ApprovalProcessTypes] FOREIGN KEY([ApprovalProcessId])
REFERENCES [dbo].[ApprovalProcessTypes] ([ApprovalProcessId])
GO
ALTER TABLE [dbo].[GroupRoleRelation] CHECK CONSTRAINT [FK_GroupRoleRelation_ApprovalProcessTypes]
GO
ALTER TABLE [dbo].[GroupRoleRelation]  WITH CHECK ADD  CONSTRAINT [FK_MasterGroupRoleRelation_SysGroup] FOREIGN KEY([MasterGroupId])
REFERENCES [dbo].[SysGroup] ([GroupId])
GO
ALTER TABLE [dbo].[GroupRoleRelation] CHECK CONSTRAINT [FK_MasterGroupRoleRelation_SysGroup]
GO
ALTER TABLE [dbo].[GroupRoleRelation]  WITH CHECK ADD  CONSTRAINT [FK_RelativeGroupRoleRelation_SysGroup] FOREIGN KEY([RelativeGroupId])
REFERENCES [dbo].[SysGroup] ([GroupId])
GO
ALTER TABLE [dbo].[GroupRoleRelation] CHECK CONSTRAINT [FK_RelativeGroupRoleRelation_SysGroup]
GO
ALTER TABLE [dbo].[PersonDelegate]  WITH CHECK ADD  CONSTRAINT [FK_PersonDelegate_Users] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Users] ([PersonId])
GO
ALTER TABLE [dbo].[PersonDelegate] CHECK CONSTRAINT [FK_PersonDelegate_Users]
GO
ALTER TABLE [dbo].[PersonDelegate]  WITH CHECK ADD  CONSTRAINT [FK_PersonDelegate_Users1] FOREIGN KEY([DelegateId])
REFERENCES [dbo].[Users] ([PersonId])
GO
ALTER TABLE [dbo].[PersonDelegate] CHECK CONSTRAINT [FK_PersonDelegate_Users1]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Function] FOREIGN KEY([FunctionId])
REFERENCES [dbo].[CorpFunction] ([FunctionId])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Function]
GO
ALTER TABLE [dbo].[Region]  WITH CHECK ADD  CONSTRAINT [FK_Region_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
GO
ALTER TABLE [dbo].[Region] CHECK CONSTRAINT [FK_Region_Product]
GO
ALTER TABLE [dbo].[RelationType]  WITH CHECK ADD  CONSTRAINT [FK_RelationType_RelationType] FOREIGN KEY([InverseRelationTypeId])
REFERENCES [dbo].[RelationType] ([RelationTypeId])
GO
ALTER TABLE [dbo].[RelationType] CHECK CONSTRAINT [FK_RelationType_RelationType]
GO
ALTER TABLE [dbo].[SysGroup]  WITH CHECK ADD  CONSTRAINT [FK_Group_Function] FOREIGN KEY([FunctionId])
REFERENCES [dbo].[CorpFunction] ([FunctionId])
GO
ALTER TABLE [dbo].[SysGroup] CHECK CONSTRAINT [FK_Group_Function]
GO
ALTER TABLE [dbo].[SysGroup]  WITH CHECK ADD  CONSTRAINT [FK_Group_Product] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
GO
ALTER TABLE [dbo].[SysGroup] CHECK CONSTRAINT [FK_Group_Product]
GO
ALTER TABLE [dbo].[SysGroup]  WITH CHECK ADD  CONSTRAINT [FK_SysGroup_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([CompanyId])
GO
ALTER TABLE [dbo].[SysGroup] CHECK CONSTRAINT [FK_SysGroup_Company]
GO
ALTER TABLE [dbo].[SystemUser]  WITH CHECK ADD  CONSTRAINT [FK_SystemUser_System] FOREIGN KEY([SystemId])
REFERENCES [dbo].[ITSystem] ([SystemId])
GO
ALTER TABLE [dbo].[SystemUser] CHECK CONSTRAINT [FK_SystemUser_System]
GO
ALTER TABLE [dbo].[SystemUser]  WITH CHECK ADD  CONSTRAINT [FK_SystemUser_Users] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Users] ([PersonId])
GO
ALTER TABLE [dbo].[SystemUser] CHECK CONSTRAINT [FK_SystemUser_Users]
GO
ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_Group] FOREIGN KEY([GroupId])
REFERENCES [dbo].[SysGroup] ([GroupId])
GO
ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_Group]
GO
ALTER TABLE [dbo].[TaskAssignment]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignment_Task] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([TaskId])
GO
ALTER TABLE [dbo].[TaskAssignment] CHECK CONSTRAINT [FK_TaskAssignment_Task]
GO
ALTER TABLE [dbo].[TaskAssignmentHistory]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignmentHistory_Node] FOREIGN KEY([NodeId])
REFERENCES [dbo].[Node] ([NodeId])
GO
ALTER TABLE [dbo].[TaskAssignmentHistory] CHECK CONSTRAINT [FK_TaskAssignmentHistory_Node]
GO
ALTER TABLE [dbo].[TaskAssignmentHistory]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignmentHistory_SysGroup] FOREIGN KEY([GroupId])
REFERENCES [dbo].[SysGroup] ([GroupId])
GO
ALTER TABLE [dbo].[TaskAssignmentHistory] CHECK CONSTRAINT [FK_TaskAssignmentHistory_SysGroup]
GO
ALTER TABLE [dbo].[TaskAssignmentHistory]  WITH CHECK ADD  CONSTRAINT [FK_TaskAssignmentHistory_Task] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([TaskId])
GO
ALTER TABLE [dbo].[TaskAssignmentHistory] CHECK CONSTRAINT [FK_TaskAssignmentHistory_Task]
GO
ALTER TABLE [dbo].[TaskNode]  WITH CHECK ADD  CONSTRAINT [FK_TaskNode_Node] FOREIGN KEY([NodeId])
REFERENCES [dbo].[Node] ([NodeId])
GO
ALTER TABLE [dbo].[TaskNode] CHECK CONSTRAINT [FK_TaskNode_Node]
GO
ALTER TABLE [dbo].[TaskNode]  WITH CHECK ADD  CONSTRAINT [FK_TaskNode_Task] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([TaskId])
GO
ALTER TABLE [dbo].[TaskNode] CHECK CONSTRAINT [FK_TaskNode_Task]
GO
ALTER TABLE [dbo].[UserGroup]  WITH CHECK ADD  CONSTRAINT [FK_UserGroup_Group] FOREIGN KEY([GroupId])
REFERENCES [dbo].[SysGroup] ([GroupId])
GO
ALTER TABLE [dbo].[UserGroup] CHECK CONSTRAINT [FK_UserGroup_Group]
GO
ALTER TABLE [dbo].[UserGroup]  WITH CHECK ADD  CONSTRAINT [FK_UserGroup_Users] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Users] ([PersonId])
GO
ALTER TABLE [dbo].[UserGroup] CHECK CONSTRAINT [FK_UserGroup_Users]
GO
ALTER TABLE [dbo].[UserPwdHistory]  WITH CHECK ADD  CONSTRAINT [FK_UserPwdHistory_Users] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Users] ([PersonId])
GO
ALTER TABLE [dbo].[UserPwdHistory] CHECK CONSTRAINT [FK_UserPwdHistory_Users]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Sequential, Parallel, First Past the Post, Unanimous, Weighted' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ApprovalProcessTypes', @level2type=N'COLUMN',@level2name=N'ApprovalType'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ForApproval,Approved,Rejected,FlatRejected,ApprovedWithNotes' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'BranchNode', @level2type=N'COLUMN',@level2name=N'Type'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'State Node or Decision Node' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Node', @level2type=N'COLUMN',@level2name=N'NodeType'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Table to identify System IDs for a given User.  E.g. One User (in our system) may have multple System IDs for e.g. Accounts System, ZINC System, Active Directory' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'SystemUser', @level2type=N'COLUMN',@level2name=N'SystemId'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Condition Test that was passed to cause this row to be written' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'TaskAssignmentHistory', @level2type=N'COLUMN',@level2name=N'ConditionTest'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Used to allow loginID to change without needing a new record (e.g. married woman surname)' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Users', @level2type=N'COLUMN',@level2name=N'PersonId'
GO
USE [master]
GO
ALTER DATABASE [ReviewProject] SET  READ_WRITE 
GO
