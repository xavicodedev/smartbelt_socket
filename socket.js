// Include Nodejs' net module.
const Net = require('net');
//Include MySQL module.
/**
var mysql = require('mysql');
*/
// The port on which the server is listening.
//const port = 8080;

//Use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var express = require('express');
var app = express();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('El servidor service-smartbelt está encendido...');
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})

/** 
//Crea la conexión a base de datos.
//TODO Parametrizar los datos de BBDD por seguridad.
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
  });
*/

// Use net.createServer() in your code. This is just for illustration purpose.
// Create a new TCP server.
const netServer = new Net.Server();
// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
netServer.listen(port, function() {
    console.log(`Server listening for connection requests on socket localhost:${port}`);
});

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
netServer.on('connection', function(socket) {
    console.log('A new connection has been established.');


    // The server can also receive data from the client by reading from its socket.
    socket.on('data', function(chunk) {
        console.log(`Data received from client: ${chunk.toString()}`);
        
    });

    

    // When the client requests to end the TCP connection with the server, the server
    // ends the connection.
    socket.on('end', function() {
        console.log('Closing connection with the client');
    });

    // Don't forget to catch error, for your own sake.
    socket.on('error', function(err) {
        console.log(`Error: ${err}`);
    });
});








//Conecta con BBDD e inserta los datos.
/** 
function dbInsert(con, data){
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}
*/
