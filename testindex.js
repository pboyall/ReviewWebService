var database = require('./testdatabase.js');
//var database1 = require('./testdatabase.js').huh;

//foo();
//database1();
//database.bux();

var db = new database();
var sql = "select * from Task";


function myfunc() {}

//db.log();
//db.log1("select", myfunc);

db.ConnectAndQuery(sql, myfunc);