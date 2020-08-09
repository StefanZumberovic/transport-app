import { getSectionDuration, formatTotalDurationTime } from '../../utils/dateTimeUtils';
import {
    ConnectionsResponseInterface,
    Section,
    PassStation
} from '../../interfaces/connectionsResponseInterfaces/connectionsResponseInterfaces';
import { MappedConnectionInterface } from '../../interfaces/mappedConnectionsInterfaces/mappedConnectionsInterfaces';

/**
 * @remarks - Funciton that mappes the response received from external api call to formatted
 * data that is to be sent to the client app
 *
 * @param connectionsResponse - Response from an external api call
 *
 * @returns - Promise<MappedConnectionInterface[]>
 */

const getMappedConnections = (
    connectionsResponse: ConnectionsResponseInterface
): MappedConnectionInterface[] => {
    const { connections } = connectionsResponse;

    return connections.map((connection) => {
        let { duration } = connection;
        const { transfers } = connection;

        duration = formatTotalDurationTime(duration);

        const sections = connection.sections.map((section) => {
            return mapSections(section);
        });

        const mappedConnection: MappedConnectionInterface = Object.assign(
            {},
            { duration, transfers, sections }
        );
        return mappedConnection;
    });
};

const mapSections = (section: Section) => {
    const { walk, journey, arrival } = section;
    const duration = getSectionDuration(section);
    const method = walk ? 'Walk' : 'Take';
    const name = journey && journey.name ? journey.name : undefined;
    const to = arrival.station.name;
    const type = walk ? 'walk' : mapTransportType(journey.category);
    const stations = journey ? getNumberOfStations(journey.passList) : undefined;
    const passList = type === 'train' ? mapPassList(journey.passList) : undefined;
    return { duration, method, name, to, type, stations, passList };
};

const mapTransportType = (category: string) => {
    const types: { [key: string]: string } = {
        T: 'tram',
        IC: 'train',
        S: 'train',
        B: 'bus'
    };
    return types[category];
};

const getNumberOfStations = (passList: PassStation[]) => {
    return passList.length - 1;
};

const mapPassList = (passList: PassStation[]) => {
    const [departureStation, ...remainingStations] = passList;
    return remainingStations.map((passStation) => {
        const {
            arrivalTimestamp: arrival,
            station: { name: stationName }
        } = passStation;
        return {
            arrival,
            stationName
        };
    });
};

export { getMappedConnections };
