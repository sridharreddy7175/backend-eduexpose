import swaggerDefinition from './swaggerDefinition';


const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Update with your route file path
};

export default options;
