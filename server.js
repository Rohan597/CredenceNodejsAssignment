const http = require('http');

//connecting to main app module which will spin up the exprress application

const app = require('./app');  
const port = process.env.PORT || 4000; 
// process env simple access the nodejs environment variable 
// and this would be set for eg the server on which we deploy if not then get :4000

const server = http.createServer(app);

server.listen(port);