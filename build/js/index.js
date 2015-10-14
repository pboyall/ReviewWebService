'use strict';

console.log("Hello World");
console.log("Hello me");

var database = require('./Database.js');

//POC DB Query Code

var callme = function(){
 console.log("Done");   
    process.exit();
}

database.query(callme);

//End POC

//Initial Attempt at making a repository work

var taskRepository = require('./TaskRepository.js');

var wibble = new taskRepository();
 
wibble.save();

//As this is node, it keeps running unless we exit

//process.exit();