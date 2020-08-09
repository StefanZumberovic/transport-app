const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Transportation API',
            description: 'Transportation options API',
            version: '1.0.0',
            servers: ['http://localhost:5000']
        }
    },
    apis: [`${__dirname}/../api/routes/**/*.ts`]
};

export default swaggerOptions;