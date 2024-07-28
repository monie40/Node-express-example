//This module will contain the code for handling the REST api endpoints for campsites and campsites/campsiteId
const express = require('express');

//To create a new express router
const campsiteRouter = express.Router();

//They are all chained together, they h andle all the endpoints for routing for campsites.
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

//Export campsiteRouter so that it can be used elsewhere
module.exports = campsiteRouter;