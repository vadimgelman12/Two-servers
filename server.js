// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;


// Create a generic function to handle requests and responses
function somethingGood(request, response) {

	var randomGood = ["you are awesome", "you have great shoes", "you are an awesome programmer", "you have a great smile!"];
	var randomIndex = Math.floor(Math.random()*randomGood.length);
	var myMessage = randomGood[randomIndex];

  // Send the below string to the client when the user visits the PORT URL
  response.end(myMessage + request.url);
}

function somethingBad(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You suck!! " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(somethingGood);

var server2 = http.createServer(somethingBad);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server 1 listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server 2 listening on: http://localhost:" + PORT2);
});