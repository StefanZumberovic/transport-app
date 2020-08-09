import axios, { AxiosResponse } from 'axios';
import { constants } from '../../constants/constants';
import { ConnectionsRequestParamsInterface } from '../../interfaces/connectionsRequestParamsInterfaces/connectionsRequestParamsInterface';

/**
 * @remarks - Funciton that transforms received query params to appropriate query params
 * needed for the external api call
 *
 * @param params - Query params for the external api call
 *
 * @returns - Promise<AxiosResponse>
 */

const getConnections = (params: ConnectionsRequestParamsInterface): Promise<AxiosResponse> => {
    const { TRANSPORT_API_URL } = constants;
    return axios.get(`${TRANSPORT_API_URL}/connections`, params);
};

export { getConnections };
