import express from 'express';
import expressLoader from './loaders/express';
import logger from './loaders/logger';
import errorLoader from './loaders/error';
import keys from './config/keys';

function startServer(): void {
    // Load error handling for uncaught exceptions and rejections outside of express
    errorLoader();

    const app = express();

    // Load express middleware, routes and error handler
    expressLoader(app);

    // Start the server
    app.listen(keys.port || 5000, () => {
        logger.info('Server listening on port 5000');
    });
}

// Initialize server setup
startServer();
