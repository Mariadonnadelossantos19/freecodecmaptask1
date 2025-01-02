const helmet = require('helmet');

const express = require('express');
const app = express();
// use helmet middleware to  hide "x-powered-by"
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
