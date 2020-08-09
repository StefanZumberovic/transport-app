import { constants } from '../constants/constants';
import CustomException from './customException';
import { ConnectionsRequestParamsInterface } from '../interfaces/connectionsRequestParamsInterfaces/connectionsRequestParamsInterface';

/**
 * @remarks - Funciton that transforms received query params to appropriate query params
 * needed for the external api call
 *
 * @param receivedParams - Query params received from the client app
 *
 * @returns - Mapped query params
 */

export const generateConnectionsQueryParams = (
    receivedParams: ConnectionsRequestParamsInterface
): ConnectionsRequestParamsInterface => {
    const { ALLOWED_CONNECTIONS_PARAMS: allowedParams } = constants;

    const mapReceivedParams = Object.keys(receivedParams)
        .filter((key: string) => allowedParams.includes(key))
        .reduce((acc: { [key: string]: any }, key: string) => {
            if (key === 'time' && !receivedParams[key]) {
                acc[key] = constants.DEFAULT_TIME;
                return acc;
            }
            if (key === 'limit' && !receivedParams[key]) {
                acc[key] = constants.DEFAULT_LIMIT;
                return acc;
            }
            acc[key] = receivedParams[key];
            return acc;
        }, {});

    if (!mapReceivedParams.time) mapReceivedParams.time = constants.DEFAULT_TIME;
    if (!mapReceivedParams.limit) mapReceivedParams.limit = constants.DEFAULT_LIMIT;

    return {
        params: { ...mapReceivedParams, isArrivalTime: constants.IS_ARRIVAL_TIME }
    };
};

/**
 * @remarks - Funciton that validates query params received from the client app. Params 'from'
 * and 'to' are required
 *
 * @param receivedParams - Query params received from the client app
 *
 * @returns - Boolean
 */

export const validateConnectionsQueryParams = (
    receivedParams: ConnectionsRequestParamsInterface
): boolean => {
    const { REQUIRED_CONNECTIONS_PARAMS: requiredParams } = constants;
    requiredParams.forEach((param: string) => {
        if (param === 'from' && !receivedParams[param]) {
            throw new CustomException('(From) param is required', 400);
        }
        if (param === 'to' && !receivedParams[param]) {
            throw new CustomException('(To) param is required', 400);
        }
    });
    return true;
};
