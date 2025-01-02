const helmet = require('helmet');

const express = require('express');
const app = express();
// use helmet middleware to  hide "x-powered-by"
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
const ninetyDaysInSeconds = 90 * 24 * 60 * 60;
app.use(helmet.hsts({maxAge:ninetyDaysInSeconds,
    force: true}));
app.use(helmet.dnsPrefetchControl());
