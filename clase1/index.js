const http = require('http');

const server = 3000;


http.createServer(function(req, res) {
    res.write('<h1>Hola mundo desde Nodesfsfdsdfsdf.js</h1>');
    res.end();
}).listen(server, function() {
    console.log('Server on port ' + server);
});