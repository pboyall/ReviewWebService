'use strict';
var sprint = require('./library/stringfunctions.js');
var Q = require('Q');

var taskRepository =

    class TaskRepository {

        constructor(Options) {
            this.WorkflowProcessId = Options.WorkflowProcessId;
            this.dbContext = Options.dbContext;
        }

        wonk() {
            console.log("javascript sucks big time");
        }

        obtainSQL(theObject) {
            var selectSQL = "select ";
            var updateSQL = "update " + theObject.TableName;
            var insertSQL = "insert into " + theObject.TableName + "(";
            var insertValues = "";
            var insertFields = "";
            var whereSQL = "";

            for (var property in theObject.Fields) {
                //Write out property name and value into SQL
                if (selectSQL == "select ") {
                    updateSQL = updateSQL + " SET ";

                } else {
                    selectSQL = selectSQL + ",";
                    updateSQL = updateSQL + ",";
                    insertValues = insertValues + ",";
                    insertFields = insertFields + ",";
                }
                selectSQL = selectSQL + property;
                updateSQL = updateSQL + property + "= '" + theObject.Fields[property] + "'";
                insertValues = insertValues + "'" + theObject.Fields[property] + "'";
                insertFields = insertFields + property;
            }

            selectSQL = selectSQL + " from " + theObject.TableName;
            insertSQL = insertSQL + insertFields + ") VALUES (" + insertValues + ")";

            theObject.Keys.map(function (item) {
                if (whereSQL === "") {
                    whereSQL = " where " + item + " = " + theObject[item];
                } else {
                    whereSQL = whereSQL + " AND " + item + " = " + theObject[item];
                }

            });

            //Functionalise!

            insertSQL = insertSQL;
            updateSQL = updateSQL + whereSQL;
            selectSQL = selectSQL + whereSQL;
            return {
                update: updateSQL,
                select: selectSQL,
                insert: insertSQL
            };

        }

              populateObject(theObject) {
            var selectSQL = "select ";
            var updateSQL = "update " + theObject.TableName;
            var insertSQL = "insert into " + theObject.TableName + "(";
            var insertValues = "";
            var insertFields = "";
            var whereSQL = "";

            for (var property in theObject.Fields) {
                //Write out property name and value into SQL
                if (selectSQL == "select ") {
                    updateSQL = updateSQL + " SET ";

                } else {
                    selectSQL = selectSQL + ",";
                    updateSQL = updateSQL + ",";
                    insertValues = insertValues + ",";
                    insertFields = insertFields + ",";
                }
                selectSQL = selectSQL + property;
                updateSQL = updateSQL + property + "= '" + theObject.Fields[property] + "'";
                insertValues = insertValues + "'" + theObject.Fields[property] + "'";
                insertFields = insertFields + property;
            }

            selectSQL = selectSQL + " from " + theObject.TableName;
            insertSQL = insertSQL + insertFields + ") VALUES (" + insertValues + ")";

            theObject.Keys.map(function (item) {
                if (whereSQL === "") {
                    whereSQL = " where " + item + " = " + theObject[item];
                } else {
                    whereSQL = whereSQL + " AND " + item + " = " + theObject[item];
                }

            });

            //Functionalise!

            insertSQL = insertSQL;
            updateSQL = updateSQL + whereSQL;
            selectSQL = selectSQL + whereSQL;
            return {
                update: updateSQL,
                select: selectSQL,
                insert: insertSQL
            };

        }
        
        
        
        
        
        load(theObject, callme) {
            var deferred = Q.defer();

            //Hard coded SQL as proof of concept
            //_dbContext
            var theType = theObject.theType();
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
            console.log('load instance of ' + Object.getPrototypeOf(theObject) + ' (' + theType + ')');
            var sqlobj = this.obtainSQL(theObject);
            var sql = sqlobj.select;
            console.log(sql);
            //Resolve promise then call callback
            var resolvePromise = function (rows, rowCount) {
                deferred.resolve();
                callme(rows, rowCount);
            };

            this.dbContext.ConnectAndQuery(sql, resolvePromise);
            //Populate the object perhaps?
            
            
            
            return deferred.promise;

        }

        save(theObject, callme) {
            var deferred = Q.defer();
            //Hard coded SQL as proof of concept
            console.log('+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=');
            console.log('save instance of ' + Object.getPrototypeOf(theObject));
            var sql = "";
            var keys = [];
            var sqlobj = this.obtainSQL(theObject);
            //TODO: Code "select" check then if no rows insert else update
            //For now just force insert each time
            //Also should do insert using parameters rather than like this but leave it for now
            sql = sqlobj.insert;
            console.log(sql);

            var resolvePromise = function (rows, rowCount) {
                deferred.resolve();
                //Not sure this is right thing to return
                callme(rows, rowCount);
            };
            var parameters = {}; //Empty for now
            //Works but has lousy error handling this.dbContext.ConnectAndQuery(sql, resolvePromise);
            this.dbContext.insert(sql, parameters, resolvePromise);
            console.log('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+');
            return deferred.promise;
        }
    };

module.exports = taskRepository;