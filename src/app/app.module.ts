import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { PassengerServiceService } from './passenger-service.service';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        PassengerServiceService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
