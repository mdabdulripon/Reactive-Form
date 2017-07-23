import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'REACTIVE FORM || MODEL DRIVEN FORM';

    userForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            // zipcode: new FormArray({
            //     // zipcode: new FormControl(),
            // })
        })
    });
}
