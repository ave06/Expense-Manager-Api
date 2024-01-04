const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the version of OAS
    info: {
      title: 'Expense Manager API',
      version: '1.0.0',
      description: 'API documentation for Expense Manager API application',
    },
  },
  apis: ["/routes/*.js"], // Specify the paths to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;