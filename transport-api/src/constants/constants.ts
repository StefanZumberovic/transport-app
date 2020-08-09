export const constants = Object.freeze({
    TRANSPORT_API_URL: 'http://transport.opendata.ch/v1',
    DEFAULT_TIME: '17.15',
    DEFAULT_LIMIT: 4,
    IS_ARRIVAL_TIME: 1,
    ALLOWED_CONNECTIONS_PARAMS: ['from', 'to', 'time', 'limit', 'transportations'],
    REQUIRED_CONNECTIONS_PARAMS: ['from', 'to']
});
