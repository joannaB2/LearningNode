const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>User list</title></head>')
        res.write('<body>')
        res.write('<h1>Helloo <a href="/users">go to users</a></h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>')
        res.write('<head><title>User list</title></head>')
        res.write('<body>')
        res.write('<h1>Users list</h1>')
        res.write('<ul><li>user 1</li><li>user 2</li><li>user 3</li></ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          console.log(message);
          return res.end();
        })
    };
};

module.exports = requestHandler;