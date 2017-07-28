import { Component, EventEmitter, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Passenger } from './model/passenger';





// import { Passenger } from './model/passenger';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title = 'REACTIVE FORM || MODEL DRIVEN FORM';

    // public userForm: FormGroup;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        // this.userForm = this.fb.group({
        //     name: ['', [Validators.required, Validators.minLength(5)]],
        //     email: [''],
        //     phone: [''],
        //     addresses: this.fb.array([
        //         this.initAddress(),
        //     ])
        // });
    }

    // initAddress() {
        // return this.fb.group({
        //     street: [''],
        //     city: [''],
        //     state: [''],
        //     zipcode: [''],
        //     numberOfChildren: [''],
        //     children: this.fb.array([]),
        // });
    // }

    // get children(): FormArray {
    //     return this.userForm.get('children') as FormArray;
    // }


    // initChildren() {
    //     return this.fb.group({
    //         children: [''],
    //     });
    // }

    // addAddress() {
    //     const control = <FormArray>this.userForm.controls['addresses'];
    //     control.push(this.initAddress());
    // }
    // removeAddress(i: number) {
    //     const control = <FormArray>this.userForm.controls['addresses'];
    //     control.removeAt(i);
    // }


    // onSubmit() {
    //     alert('submiting');
    //     console.log(this.userForm.value);
    // }
}
