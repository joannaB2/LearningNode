const http = require('http');
const routes = require('./routes');
/* streams 
    node is parsing streams (req) in chunks
*/

/* buffers
    allows to work on multiple chunks at once and release them when finished
*/

const server = http.createServer(routes);

server.listen(3000);