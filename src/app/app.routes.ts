import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'company', pathMatch: 'full' },
    { path: 'company', component: ListComponent },
    { path: 'company/create', component: FormComponent },
    { path: 'company/:id/edit', component: FormComponent }
];
