const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'CSE341 Project 1 - Contacts API',
      description: 'This projects is required as part of the BYUI class CSE341: Web Services.'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);