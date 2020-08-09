import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import getRoutes from '../routes/routes';
import swaggerLoader from './swagger';

/**
 * @remarks - Loader function that loads express middleware
 *
 * @param app - Express applicaiton
 *
 * @returns - void
 */

const expressLoader = (app: express.Application): void => {
    // Enable Cross Origin Resource Sharing
    app.use(cors());

    // Middleware to transform req.body string to json
    app.use(bodyParser.json());

    app.use('/api-docs', ...swaggerLoader());

    // Load all the api routes
    app.use('/api', getRoutes());

    // If the request comes to this point, no route was found,
    // catch the 404 and move next() to error handler
    app.use((req: Request, res: Response, next: NextFunction) => {
        const error: any = new Error('Not found');
        error.status = 404;
        next(error);
    });

    // Error handler
    app.use((err: any, req: Request, res: Response) => {
        res.status(err.status || 500).json({ error: { message: err.message } });
    });
};

export default expressLoader;
