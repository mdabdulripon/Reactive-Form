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
        if (id === 0) {
            // return Observable.of(this.initializeProduct());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getCompany: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // deleteCompany(id: number): Observable<Response> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.delete(url, options)
    //         .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // saveProduct(product: Passenger): Observable<Passenger> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     if (product.id === 0) {
    //         return this.createProduct(product, options);
    //     }
    //     return this.updateProduct(product, options);
    // }

    // private createProduct(product: Passenger, options: RequestOptions): Observable<Passenger> {
    //     product.id = undefined;
    //     return this.http.post(this.baseUrl, product, options)
    //         .map(this.extractData)
    //         .do(data => console.log('createProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // private updateProduct(product: Passenger, options: RequestOptions): Observable<Passenger> {
    //     const url = `${this.baseUrl}/${product.id}`;
    //     return this.http.put(url, product, options)
    //         .map(() => product)
    //         .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    // initializeProduct(): CompanyInfo {
    //     return {
    //         id: 0,
    //         companyName: null,
    //         companyUrl: null,
    //         companyBio: null,
    //         facebook: null,
    //         twitter: null,
    //         linkedin: null,
    //         cities: [''],
    //     };
    // }
}
