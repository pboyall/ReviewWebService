'use strict';
var database = require('./TediousDatabase.js');
var db = new database();
var sql = "select * from Task";
var myf = function myfunc() {
    console.log("end");
}
db.ConnectAndQuery(sql, myf);