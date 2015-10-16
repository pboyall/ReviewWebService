'use strict';
var database = require('./TediousDatabase.js');
var db = new database();
var sql = "select * from Task";
var myf = function myfunc(rows, rowCount) {
    console.log("End Rows:" + rowCount);
    console.log("End");
    console.log(Object.getPrototypeOf(rows));
    console.log(rows);
}
db.ConnectAndQuery(sql, myf);

//
//process.exit();