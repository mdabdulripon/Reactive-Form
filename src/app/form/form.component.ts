import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Model
import { City } from '../model/city';
import { CompanyInfo } from '../model/company';

import { companyServiceService } from '../company-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


	title = 'REACTIVE FORM || MODEL DRIVEN FORM : UBER PASSANGER INFO';
	// passenger: Passenger;
	passengerForm: FormGroup;
	editingStatus: boolean = false;

	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		// private myservice: PassengerServiceService
	) {
		if('id' in this.activatedRoute.snapshot.params) {
			this.editingStatus = true;
		}
	 }

	ngOnInit() {
		// if (this.editingStatus) {
		// 	this.passenger = this.myservice.getPasserger()
		// 	this.initForm(this.passenger)
		// }else {
		// 	this.initForm()
		// }
	}

	// initForm(comapny?: CompanyInfo ):void {
		
	// 	let name: string;
	// 	if (passenger) {
	// 		name = passenger.name;
	// 	} else {
	// 		name = '';
	// 	}

	// 	let cities: FormArray = new FormArray([]);
	// 	let places: FormArray = new FormArray([]);

	// 	this.passengerForm = new FormGroup({
	// 		name: new FormControl('', Validators.required),
	// 		numberofPassenger: new FormControl('', Validators.required),
	// 		cities: cities
	// 	})

		// if(!passenger) {
		// 	this.addCity();
		// 	this.addPlace(0);
		// }else {
		// 	passenger.cities.forEach((city, cityIndex)=> {
		// 		this.addCity(city);
		// 		city.places.forEach((place, placeIndex)=> {
		// 			this.addPlace(cityIndex, place);
		// 		})
		// 	})
		// }
	// }

	// addCity(city?: City):void {
	// 	let places = new FormArray([]);
	// 	let name = city ? city.cityName: '';
	// 	(<FormArray>this.passengerForm.controls['cities']).push(
	// 		new FormGroup({
	// 			cityName: new FormControl(name, Validators.required),
	// 			places: places
	// 		})
	// 	)
	// }

	// addPlace(cityIndex: number, place?):void {
	// 	let name = place ? place.places: [''];

	// 	(<FormArray>(<FormGroup>(<FormArray>this.passengerForm.controls['cities'])
    //   		.controls[cityIndex]).controls['places']).push(
	// 		new FormGroup({
	// 			places: new FormControl(name, Validators.required),
	// 		})
	// 	)
	// }
}
