import {
    Section,
    Timetable
} from '../interfaces/connectionsResponseInterfaces/connectionsResponseInterfaces';

export const getSectionDuration = (section: Section) => {
    const { departure, arrival }: { departure: Timetable; arrival: Timetable } = section;
    const { departureTimestamp } = departure;
    const { arrivalTimestamp } = arrival;
    if (!arrival || !departure) {
        return '?';
    }
    const durationInSeconds = arrivalTimestamp - departureTimestamp;
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds - hours * 3600) / 60);
    return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const formatTotalDurationTime = (time: string) => {
    const [hours, minutes] = time
        .slice(3)
        .split(':')
        .map((number: string) => parseInt(number));
    return `${hours}h ${minutes}m`;
};
