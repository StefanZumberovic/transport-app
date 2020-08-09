import { Router } from 'express';
import errorHandlerMiddleware from '../../../customMiddleware/errorHandlerMiddleware';
import getConnectionsController from './controller/getConnectionsController';

/**
 * @remarks - Function on /api/connections endpoint that routes http methods to appropriate controllers
 *
 * @param - None
 *
 * @returns - Express router;
 */

const Connections = () => {
    const router = Router();

    /**
     * @swagger
     * /api/connections:
     *   get:
     *     description: Used to get travel solutions
     *     responses:
     *       '200':
     *         description: A successful response
     *     parameters:
     *       - in: query
     *         name: from
     *         required: true
     *         schema:
     *           type: string
     *         description: Starting point
     *       - in: query
     *         name: to
     *         required: true
     *         schema:
     *           type: string
     *         description: Destination point
     *       - in: query
     *         name: time
     *         schema:
     *           type: string
     *         description: Expected arrival time
     *       - in: query
     *         name: limit
     *         schema:
     *           type: number
     *         description: Number of travel solutions
     *       - in: query
     *         name: transportations
     *         schema:
     *           type: string
     *         description: Select to get only train connections
     */
    router.get('/', errorHandlerMiddleware(getConnectionsController));

    return router;
};

export default Connections;
