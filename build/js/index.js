console.log("Hello World");
console.log("Hello me");

var database = require('./Database.js');

var callme = function(){
 console.log("Done");   
    process.exit();
}

database.query(callme);

//As this is node, it keeps running unless we exit

//process.exit();