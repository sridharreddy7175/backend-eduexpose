const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Description of your API',
    },
    servers: [
      {
        url: 'http://localhost:5555', // Update with your server URL
        description: 'Development server',
      },
    ],
  };
  
  export default swaggerDefinition;
  