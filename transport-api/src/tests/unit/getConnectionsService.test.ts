import getConnectionsService from '../../api/routes/connections/getConnectionsServices/getConnectionsService';
import * as HttpService from '../../services/http/HttpService';
import * as ConnectionsMapper from '../../services/mappers/connectionsMapper';
import * as QueryParamsUtils from '../../utils/queryParamsUtils';
import * as connectionsApiResponse from './mockData/connectionsExternalApiResponse.json';
import { connectionsEndpointResponse } from './mockData/connectionsEndpointResponse';
import { connectionsQueryParams } from './mockData/connectionsParams';

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

jest.mock('../../utils/queryParamsUtils', () => {
    return {
        validateConnectionsQueryParams: jest.fn(),
        generateConnectionsQueryParams: jest.fn(() => connectionsQueryParams)
    };
});

afterEach(() => {
    jest.resetModules();
});

describe('getConnectionsService', () => {
    it('should have a getConnectionsService funciton', () => {
        expect(typeof getConnectionsService).toBe('function');
    });

    it('should call validateConnectionsQueryParams function', () => {
        getConnectionsService(connectionsQueryParams.params);
        expect(QueryParamsUtils.validateConnectionsQueryParams).toBeCalled();
    });

    it('should call validateConnectionsQueryParams function with params', () => {
        getConnectionsService(connectionsQueryParams.params);
        expect(QueryParamsUtils.validateConnectionsQueryParams).toBeCalledWith(
            expect.objectContaining(connectionsQueryParams.params)
        );
    });

    it('should call generateConnectionsQueryParams function', () => {
        getConnectionsService(connectionsQueryParams.params);
        expect(QueryParamsUtils.generateConnectionsQueryParams).toBeCalled();
    });

    it('should call generateConnectionsQueryParams function with params', () => {
        getConnectionsService(connectionsQueryParams.params);
        expect(QueryParamsUtils.generateConnectionsQueryParams).toBeCalledWith(
            expect.objectContaining(connectionsQueryParams.params)
        );
    });

    it('should call getConnections funciton', () => {
        getConnectionsService(connectionsQueryParams.params);
        expect(HttpService.getConnections).toBeCalled();
    });

    it('should call getConnections function with query params', async () => {
        await getConnectionsService(connectionsQueryParams.params);
        expect(HttpService.getConnections).toBeCalledWith(
            expect.objectContaining(connectionsQueryParams)
        );
    });

    it('should call getMappedConnections funciton', async () => {
        await getConnectionsService(connectionsQueryParams.params);
        expect(ConnectionsMapper.getMappedConnections).toBeCalled();
    });

    it('should call getMappedConnections with /connections response data', async () => {
        await getConnectionsService(connectionsQueryParams.params);
        expect(ConnectionsMapper.getMappedConnections).toBeCalledWith(connectionsApiResponse);
    });
});
