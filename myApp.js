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
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({ directives:{defaultSrc:["'self'"], scriptSrc:["'self'",'trusted-cdn.com']}}));

// Configure helmet() with custom options
app.use(helmet({
    frameguard: { // Configure frameguard
      action: 'deny', // Deny iframe embedding
    },
    contentSecurityPolicy: { // Enable and configure CSP
      directives: {
        defaultSrc: ["'self'"], // Allow resources only from the same origin
        styleSrc: ['style.com'], // Allow styles from specific domain
      }
    },
    dnsPrefetchControl: false, // Disable DNS prefetch control
  }));