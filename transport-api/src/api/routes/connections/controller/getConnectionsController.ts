import { Request, Response } from 'express';
import getConnectionsService from '../getConnectionsServices/getConnectionsService';

/**
 * @remarks - Controller for the GET /api/connections endpoint
 *
 * @param req - Express request object. It contains query params. Params 'from' and 'to' are strings
 * representing departure and arrival destinations, and are required. Param time is a string in the 'hh:mm'
 * format and is optional. If not supplied it will default to 17.15. Param limit is a number and is
 * optional. If not supplied will default to 4.
 * @param res - Express response object. On a successful request it should have response body containing
 * transportation connections
 *
 * @returns - Promise<void>
 */

const getConnectionsController = async (req: Request, res: Response): Promise<void> => {
    const { query: receivedParams } = req;
    const mappedConnections = await getConnectionsService(receivedParams);
    res.status(200).json(mappedConnections);
};

export default getConnectionsController;
