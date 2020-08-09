import httpMocks from 'node-mocks-http';
import getConnectionsController from '../../api/routes/connections/controller/getConnectionsController';
import errorHandlerMiddleware from '../../customMiddleware/errorHandlerMiddleware';
import * as HttpService from '../../services/http/HttpService';
import { connectionsQueryParams } from './mockData/connectionsParams';
import * as connectionsApiResponse from './mockData/connectionsExternalApiResponse.json';
import { connectionsEndpointResponse } from './mockData/connectionsEndpointResponse';

jest.mock('../../services/http/HttpService', () => {
    return {
        getConnections: jest.fn(async () => ({ data: connectionsApiResponse }))
    };
});

jest.mock('../../services/mappers/connectionsMapper', () => {
    return {
        getMappedConnections: jest.fn(() => connectionsEndpointResponse)
    };
});

let req: any, res: any, next: any;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
    const {
        params: { from }
    } = connectionsQueryParams;
    const {
        params: { to }
    } = connectionsQueryParams;
    req.query = { from, to };
});

afterEach(() => {
    jest.resetModules();
});

describe('getConnectionsController', () => {
    it('should have a getConnectionsController funciton', () => {
        expect(typeof getConnectionsController).toBe('function');
    });

    it('should return 200 response code, and the response is sent', async () => {
        await getConnectionsController(req, res);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it('should return json body in response', async () => {
        await getConnectionsController(req, res);
        expect(res._getJSONData()).toStrictEqual(connectionsEndpointResponse);
    });

    it('should handle errors from external api call', async () => {
        const errorMessage = { message: 'External api call faliure' };
        const wrappedGetConnectionsController = errorHandlerMiddleware(getConnectionsController);
        // @ts-ignore
        HttpService.getConnections.mockReturnValue(Promise.reject(errorMessage));
        await wrappedGetConnectionsController(req, res, next);
        expect(next).toBeCalledWith(errorMessage);
    });

    it('should handle errors if invalid params are received', async () => {
        const errorMessage = '(From) param is required';
        req.query = { to: 'Biel/Bienne BSG' };
        const wrappedGetConnectionsController = errorHandlerMiddleware(getConnectionsController);
        await wrappedGetConnectionsController(req, res, next);
        expect(next).toBeCalledWith(new Error(errorMessage));
    });
});
