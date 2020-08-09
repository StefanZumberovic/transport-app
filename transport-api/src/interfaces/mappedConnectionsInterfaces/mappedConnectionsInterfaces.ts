// interface Timetable {
//     arrivalTimestamp: number | null;
//     departureTimestamp: number | null;
// }

// interface Coordinate {
//     type: string | null;
//     x: number | null;
//     y: number | null;
// }

// interface Station {
//     id: string | null;
//     name: string | null;
//     score: number | null;
//     coordinate: Coordinate;
//     distance: number | string | null;
// }

// interface PassList {
//     station: Station;
//     arrival: string | null;
//     arrivalTimestamp: number | null;
//     departure: string | null;
//     departureTimestamp: number | null;
// }

// interface Journey {
//     name: string;
//     category: string;
//     number: string;
//     operator: string;
//     to: string;
//     passList: PassList[];
// }

// interface Walk {
//     duration: number | null;
// }

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