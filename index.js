const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 9001;
const API = require('./APIs/API');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(bodyParser.json());

server.listen(port);

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

console.log(`Server Listening on port ${port}`);

// APIs

app.get('/api/readEbayCategory', (req, res) => {
    // res.send(API.readEbayCategory());
    res.json({
        eBayCategory: API.readEbayCategory(),
    });
});

const eBayBrowseAPI = require('./APIs/eBayBrowseAPI');

app.post('/api/search', jsonParser, (req, res) => {
    console.log(req.body);
    eBayBrowseAPI(req.body.sellerID, req.body.categoryID, progressEmit);

    function progressEmit(progressCount) { console.log(progressCount) };
});