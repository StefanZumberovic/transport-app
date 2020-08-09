import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../config/swaggerOptions';

const swaggerLoader = (): [any, any] => {
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    return [swaggerUi.serve, swaggerUi.setup(swaggerDocs)];
};

export default swaggerLoader;
