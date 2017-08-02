import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { CompanyInfo } from './model/company';
import { CompanyData } from './company.data';

@Injectable()
export class companyServiceService {

    private baseUrl = 'api/companies';

	constructor(private http: Http) { }

	getCompanies(): Observable<CompanyInfo[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getCompanies: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCompany(id: number): Observable<CompanyInfo> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getCompany: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
