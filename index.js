const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 9001;
const API = require('./APIs/API');
const axios = require('axios');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(bodyParser.json());

server.listen(port);

app.use(express.static(path.join(__dirname, '/client/build')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });

io.on('connection', (socket) => {
  console.log('A user connected');
});

console.log(`Server Listening on port ${port}`);

// APIs
app.get('/api/getSessionID', async (req, res) => {
  console.log('/api/getSessionID');
  const getSessionID = await API.getSessionID();
  res.json(getSessionID);
});

app.post('/api/fetchToken', async (req, res) => {
  console.log('/api/fetchToken');
  const fetchToken = await API.fetchToken(req.body.sessionID);
  res.json(fetchToken);
});

app.post('/api/getOauthToken', async (req, res) => {
  console.log('/api/getOauthToken');

  try {
    const getOauthToken = await API.getOauthToken(req.body.authCode);
    res.json(getOauthToken);
  } catch (err) {
    res.json(err);
  }
});
