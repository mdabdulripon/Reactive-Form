import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { CompanyInfo } from './model/company';
import { City } from './model/city';

@Injectable()
export class companyServiceService {

    private baseUrl = 'api/company'

	constructor(private http: Http) { }

	getProducts(): Observable<CompanyInfo[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getProducts: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    // getProduct(id: number): Observable<Passenger> {
    //     if (id === 0) {
    //     return Observable.of(this.initializeProduct());
    //     // return Observable.create((observer: any) => {
    //     //     observer.next(this.initializeProduct());
    //     //     observer.complete();
    //     // });
    //     };
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.get(url)
    //         .map(this.extractData)
    //         .do(data => console.log('getProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // deleteProduct(id: number): Observable<Response> {
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

    // initializeProduct(): Passenger {
    //     return {
    //         id: 0,
    //         productName: null,
    //         productCode: null,
    //         tags: [''],
    //         releaseDate: null,
    //         price: null,
    //         description: null,
    //         starRating: null,
    //         imageUrl: null
    //     };
    // }
}
