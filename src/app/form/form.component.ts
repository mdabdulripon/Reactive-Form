import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Model
import { Place } from '../model/place';
import { City } from '../model/city';
import { Passenger } from '../model/passenger';

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

	) {
		if('id' in this.activatedRoute.snapshot.params) {
			this.editingStatus = true;
		}
	 }

	ngOnInit() {
		if (this.editingStatus) {
			// this.passenger = this.
		}
	}

}
