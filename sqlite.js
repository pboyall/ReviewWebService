    var fs = require("fs");
    var file = "reviewdb.db";
    var exists = fs.existsSync(file);
    var sqlite3 = require("sqlite3").verbose();
    var sql = "select * from Task";

    ConnectAndQuery = function (sql, callback) {
        var db = new sqlite3.Database(file);
        console.log("Query SQL : " + sql);
        console.log(file);
        //db.serialize(function () {
        db.each("SELECT * FROM Task", function (err, row) {
            console.log("Execute");
            console.log("Interior sql : " + sql);
            console.log(row.TaskId + ": " + row.Status + " : " + row.RaiserUserId);
        });
        //});
    }

    //module.exports.ConnectAndQuery = func2;

    //    var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");
    //        stmt.run("Thing #" + rnd);
    //    stmt.finalize();
    //        db.each("SELECT * FROM Task", function (err, row) {
    //            console.log(row.TaskId + ": " + row.Status + " : " + row.RaiserUserId);

    var complete = function (err, numrows) {
        stmt.finalize();
        db.close();
        console.log("Complete");

    };