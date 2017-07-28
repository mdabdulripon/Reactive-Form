import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'passenger/create', pathMatch: 'full' },
    { path: 'passenger/create', component: FormComponent },
    { path: 'passenger/:id/edit', component: FormComponent }
];
