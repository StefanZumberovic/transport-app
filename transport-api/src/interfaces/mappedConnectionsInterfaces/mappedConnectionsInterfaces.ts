interface PassStation {
    arrival: number;
    stationName: string;
}

interface Section {
    duration: string;
    method: string;
    name: string | undefined;
    to: string;
    type: string;
    stations: number | undefined;
    passList: PassStation[] | undefined;
}

interface MappedConnectionInterface {
    sections: Section[];
    duration: string;
    transfers: number;
}

export { MappedConnectionInterface };
