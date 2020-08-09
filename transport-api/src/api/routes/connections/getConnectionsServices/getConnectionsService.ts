import { getConnections } from '../../../../services/http/HttpService';
import { validateConnectionsQueryParams } from '../../../../utils/queryParamsUtils';
import { generateConnectionsQueryParams } from '../../../../utils/queryParamsUtils';
import { getMappedConnections } from '../../../../services/mappers/connectionsMapper';
import { ConnectionsResponseInterface } from '../../../../interfaces/connectionsResponseInterfaces/connectionsResponseInterfaces';
import { ConnectionsRequestParamsInterface } from '../../../../interfaces/connectionsRequestParamsInterfaces/connectionsRequestParamsInterface';
import { MappedConnectionInterface } from '../../../../interfaces/mappedConnectionsInterfaces/mappedConnectionsInterfaces';

/**
 * @remarks - Funciton service that handles all the logic for GET ~/connections endpoint
 *
 * @param receivedParams - Query params received from the client app
 *
 * @returns - Promise<MappedConnectionInterface[]>
 */

const getConnectionsService = async (
    receivedParams: ConnectionsRequestParamsInterface
): Promise<MappedConnectionInterface[]> => {
    validateConnectionsQueryParams(receivedParams);

    const params = generateConnectionsQueryParams(receivedParams);

    const response = await getConnections(params);
    const connectionsResponse: ConnectionsResponseInterface = response.data;

    return getMappedConnections(connectionsResponse);
};

export default getConnectionsService;
