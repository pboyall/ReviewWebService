var fs = require("fs");
var file = "reviewdb.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function () {
    //    var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");
    //        stmt.run("Thing #" + rnd);
    //    stmt.finalize();
    db.each("SELECT *  FROM Task", function (err, row) {
        console.log(row.TaskId + ": " + row.Status + " : " + row.RaiserUserId);
    });


});