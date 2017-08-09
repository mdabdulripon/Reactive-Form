import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription'
// Model
import { City } from '../model/city';
import { CompanyInfo } from '../model/company';
// Service
import { companyServiceService } from '../company-service.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

	title: string = 'Create Company';
	companyForm: FormGroup;
	errorMessage: string;

	companies: CompanyInfo;
	private sub: Subscription;

	displayMessage: { [key: string]: string } = {};
	private validationMessage: {
		[key: string]: { [key: string]: string }
	};
	show = false;
	get cities(): FormArray {
		return <FormArray>this.companyForm.get('cities');
	}

	get places(): FormArray {
		return <FormArray>this.companyForm.get('places');
	}

	get categories(): FormArray {
		return <FormArray>this.companyForm.get('categories');
	}

	constructor(
		private _fb: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private _httpService: companyServiceService,
	) {
		this.validationMessage = {

		}
	}
	onSubmit(form){
		form.cities = form.cities.map(city=>{
			city.places = city.places.split(/(?:,| )+/);
			return city
		})
		console.log(form);
	}
	ngOnInit(): void {
		this.companyForm = this._fb.group({
			companyName: [''],
			companyUrl: [''],
			companyBio: [''],
			facebook: [''],
			twitter: [''],
			linkedin: [''],
			categories: this._fb.array([]),
			cities: this._fb.array([
				this.initCities()
			]),
		});
		this.sub = this.route.params.subscribe(
			params => {
				let id = +params['id'];
				this.getCompany(id);
			}
		);
	}
	setCities(cities: City[]) {
		// const city = cities.map(cities => this._fb.control(cities));
		// const citiesFormArray = this._fb.array(city);
		// this.companyForm.setControl('cities', citiesFormArray);
		let formCities = this._fb.array([]);
		for (let city of cities) {
			let CITY = this._fb.group({
				cityName: this._fb.control(city.cityName),
				state: this._fb.control(city.state),
				places: this._fb.control(city.places.join(", "))
			})
			formCities.push(CITY);
		}
		this.companyForm.setControl('cities', formCities);
		this.show = true;
	}
	setPlace(places: any[]) {
		const place = places.map(places => this._fb.array(places));
		const placeFormArray = this._fb.array(place);
		this.companyForm.setControl('places', placeFormArray);
	}

	initCities() {
		return this._fb.group({
			cityName: [''],
			state: [''],
			places: [''],
		})
	}

	initPlaces() {
		return this._fb.array([''])
	}

	addCity() {
		// alert('Adding');
		const control = <FormArray>this.companyForm.controls['cities'];
		control.push(this.initCities());
	}

	removeCity(j: number) {
		// alert('removing');
		const control = <FormArray>this.companyForm.controls['cities'];
		control.removeAt(j);
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	addPlace(): void {
		this.places.push(new FormControl());
	}

	addCategories(): void {
		this.places.push(new FormControl());
	}

	getCompany(id: number): void {
		this._httpService.getCompany(id).subscribe(
			(companies: CompanyInfo) => {
				this.onCompanyRetrive(companies)
			},
			(error: any) => this.errorMessage = <any>error
		);
	}

	onCompanyRetrive(companies: CompanyInfo): void {
		if (this.companyForm) {
			this.companyForm.reset();
		}
		this.companies = companies;

		if (this.companies.id === 0) {
			this.title = 'Add Company Profile'
		}
		else {
			this.title = 'Edit Company Profile'
		}
		this.companyForm.patchValue({
			companyName: this.companies.companyName,
			companyUrl: this.companies.companyUrl,
			companyBio: this.companies.companyBio,
			facebook: this.companies.facebook,
			twitter: this.companies.twitter,
			linkedin: this.companies.linkedin,
		});
		this.companyForm.setControl('categories', this._fb.array(this.companies.categories));
		this.setCities(companies.cities);
	}
}
