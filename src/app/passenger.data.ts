import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Passenger } from './model/passenger';

export class PassengerData implements InMemoryDbService {
    createDb() {
        let passengers: Passenger[] = [
            {
                name: 'JOHN DOO',
                numberOfPassenger: '4',
                cities: [{
                    cityName: 'NYC',
                    places: ['Bronx', 'Quuens', 'Staten Island' ]
                },{
                    cityName: 'New Jersey',
                    places: ['Queens Village', 'Jamaica']
                }]
            },{
                name: 'Ripon',
                numberOfPassenger: '4',
                cities: [{
                    cityName: 'Salt lake city',
                    places: ['New Jersey', 'Garden State']
                }]
            }
        ]
        return {passengers};
    }
}
