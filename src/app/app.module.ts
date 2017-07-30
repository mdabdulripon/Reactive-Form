import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CompanyData } from './company.data';

import { companyServiceService } from './company-service.service';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        InMemoryWebApiModule.forRoot(CompanyData),
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        companyServiceService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
