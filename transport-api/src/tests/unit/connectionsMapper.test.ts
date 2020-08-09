import { getMappedConnections } from '../../services/mappers/connectionsMapper';
import * as connectionsApiResponse from './mockData/connectionsExternalApiResponse.json';
import { connectionsEndpointResponse } from './mockData/connectionsEndpointResponse';

describe('getMappedConnections', () => {
    it('shout have a getMappedConnections function', () => {
        expect(typeof getMappedConnections).toBe('function');
    });

    it('should return the correctly mapped response for the input value', () => {
        // @ts-ignore
        const mapperResponse = JSON.stringify(getMappedConnections(connectionsApiResponse));
        expect(mapperResponse).toBe(JSON.stringify(connectionsEndpointResponse));
    });
});
