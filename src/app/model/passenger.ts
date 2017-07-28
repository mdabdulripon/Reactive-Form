import { City } from '../model/city';

export interface Passenger {
    name: string;
    numberOfPassenger: string;
    cities: City[];
}
