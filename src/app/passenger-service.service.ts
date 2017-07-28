import { Injectable } from '@angular/core';

// import { Passenger } from './model/passenger';
import { Passenger } from './model/passenger';

@Injectable()
export class PassengerServiceService {
	// passengers: Passenger[] = [{
	// }]

	passengers: Passenger[] = [{
		name: 'JOHN DOO',
		numberOfPassenger: '4',
        cities: [{
            cityName: 'NYC',
            places: [{
                placeName: 'Queens',
            },{
                placeName: 'Quuens Village'
            }]
        },{
            cityName: 'New Jersey',
            places: [{
                placeName: 'Queens',
            },{
                placeName: 'Quuens Village'
            }]
        }]
    },{
		name: 'Ripon',
		numberOfPassenger: '4',
        cities: [{
            cityName: 'Salt lake city',
            places: [{
                placeName: 'The Grand America Hotel',
            }, {
                placeName: 'Great Salt lake'
            }]
        }]
    }]

	constructor() { }

	getPassengers(): Passenger[] {
		return this.passengers
	}

	getPasserger(): Passenger {
		let passengerIdArray = [0, 1]
		return this.passengers[Math.floor(Math.random() * passengerIdArray.length)];
	}
}
