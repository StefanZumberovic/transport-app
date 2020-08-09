import { Request, Response, NextFunction } from 'express';

/**
 * @remarks - Custom middleware function that wrapps route handlers (controllers) with
 * a try catch block, so that controllers can be cleaner and not contain try catch blocks
 *
 * @param handler - Route handler funciton (controller)
 *
 * @returns - An async function that receives express parameters req, res and next
 */

const errorHandlerMiddleware = (handler: (...args: any) => any): ((...args: any) => any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res);
        } catch (err) {
            next(err);
        }
    };
};

export default errorHandlerMiddleware;
