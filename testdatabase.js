    var fs = require("fs");
    var file = "reviewdb.db";
    var exists = fs.existsSync(file);
    var sqlite3 = require("sqlite3").verbose();
    var sql = "select * from Task";

    //Doesn't work globally

    var database = function () {};


    database.prototype.ConnectAndQuery = function (sql, callback) {
        var db = new sqlite3.Database(file);
        console.log("Query SQL : " + sql);
        console.log(file);
        db.serialize(function () {
            db.each("SELECT * FROM Task", function (err, row) {
                console.log("Execute");
                console.log("Interior sql : " + sql);
                console.log(row.TaskId + ": " + row.Status + " : " + row.RaiserUserId);
            });
        });
    }

    module.exports = database;

    //Full example    
    /*    
        var testfunc = function () {};

        testfunc.prototype.log = function () {
            console.log("test"); //sql
        };


        //sql, callback
        testfunc.prototype.log1 = function (sql, callback) {
            console.log(sql); //sql
        };

        module.exports = testfunc;
    */

    function myfunc() {

    }




    //Works globally
    /*
        foo = function () {
            console.log("Boo");
        }
    */

    //Works in isolation
    /*    exports.huh = function () {
            console.log("Huh");
        }
    */
    /* works okay
        var buz = function () {};

        buz.prototype.bux = function () {
            console.log("bux");
        }

        module.exports = new buz();
    */