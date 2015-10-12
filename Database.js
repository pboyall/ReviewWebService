var exports = module.exports = {};

var Connection = require('tedious').Connection;
var config = {
        userName: 'radmin',
        password: 'password',
        server: 'localhost',
        options: {encrypt: false}
    };

var connection = new Connection(config);

module.exports.query = function (callback) {
    connection.on('connect', function(err) {
        // If no error, then good to go...
        console.log ("execute");
          executeStatement(callback);
        }
      );

    connection.on('error', function(err) {
        console.log("Error");
    });


}

 
var Request = require('tedious').Request;

function executeStatement(sql, callback) {
    request = new Request(sql, function(err, rowCount) {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
          callback();
      }
        
    });

    request.on('row', function(columns) {
      columns.forEach(function(column) {
        console.log('Row ' + column.value);
      });
    });

    connection.execSql(request);
//This event is not being fired    
    request.on('done', function(){
               callback();   
    });
   
    
  };