import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Model
import { Place } from '../model/place';
import { City } from '../model/city';
import { Passenger } from '../model/passenger';

import { PassengerServiceService } from '../passenger-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	passenger: Passenger;
	passengerForm: FormGroup;
	editingStatus: boolean = false;

	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private myservice: PassengerServiceService
	) {
		if('id' in this.activatedRoute.snapshot.params) {
			this.editingStatus = true;
		}
	 }

	ngOnInit() {
		if (this.editingStatus) {
			// this.passenger = this.
			this.passenger = this.myservice.getPasserger()
			this.initForm(this.passenger)
		}else {
			this.initForm()
		}
	}

	initForm(passenger?: Passenger ):void {
		
		let name: string;

		if (passenger) {
			name = passenger.name;
		} else {
			name = ''
		}



	}



}
