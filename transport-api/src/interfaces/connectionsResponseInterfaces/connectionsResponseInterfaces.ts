export interface Timetable {
    station: Station;
    arrival: string | null;
    arrivalTimestamp: number | null;
    departure: string | null;
    departureTimestamp: number | null;
}

interface Coordinate {
    type: string | null;
    x: number | null;
    y: number | null;
}

interface From {
    id: string | null;
    name: string;
    score: number | null;
    coordinate: Coordinate;
    distance: number | null;
}

interface To {
    id: string | null;
    name: string;
    score: number | null;
    coordinate: Coordinate;
    distance: number | null;
}

interface Station {
    id: string | null;
    name: string | null;
    score: number | null;
    coordinate: Coordinate;
    distance: number | string | null;
}

export interface PassStation {
    station: Station;
    arrival: string | null;
    arrivalTimestamp: number | null;
    departure: string | null;
    departureTimestamp: number | null;
}

export interface Journey {
    name: string;
    category: string;
    number: string;
    operator: string;
    to: string;
    passList: PassStation[];
}

interface Walk {
    duration: number | null;
}

export interface Section {
    journey: Journey | null;
    walk: Walk | null;
    departure: Timetable;
    arrival: Timetable;
}

interface ConnectionInterface {
    duration: string | null;
    transfers: 3 | null;
    sections: Section[];
}

export interface ConnectionsResponseInterface {
    connections: ConnectionInterface[]
    from: From;
    to: To;
    stations: {
        from: From[];
        to: To[];
    }
}