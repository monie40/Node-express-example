const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//We provide the root path for the campsiteRouter here and thats why we dont need to specify that in campsiteRouter.js
app.use('/campsites', campsiteRouter);


/*

//We will set up the remaining endpoints, but they wills upport a difrernt path so for the path of these enpoints, I'm going to add a router parameter
//to the end of the path with /:campsiteId.  This will allow us to store whatever the ciient sends as a part of the path after the slash as
//a router parameter named campsiteId

//This is a get request for a particular campsite
app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

//We will not support a post on this type of path
app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

//We wll support a put request on a campsiteid
app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

*/
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    //Morgan will handle logging the request info now
    //console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});