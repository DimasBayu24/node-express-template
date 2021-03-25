const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.NODE_ENV === 'prod' ? 8081 : 8081;
const route = require('./src/route')
const logger = require('morgan')

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());
app.use(logger('dev'));
app.listen(port, () => {
    console.log("Server running on port ", port);
});

app.use('/v1', route)

module.exports = app