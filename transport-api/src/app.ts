import express from 'express';
import expressLoader from './loaders/express';
import logger from './loaders/logger';
import errorLoader from './loaders/error';

function startServer(): void {
    // Load error handling for uncaught exceptions and rejections outside of express
    errorLoader();

    const app = express();

    // Load express middleware, routes and error handler
    expressLoader(app);

    // Start the server
    app.listen(5000, (err: Error) => {
        if (err) {
            logger.error(err);
            process.exit(1);
        }
        logger.info('Server listening on port 5000');
    });
}

// Initialize server setup
startServer();
