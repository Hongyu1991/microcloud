import { Injectable, OnInit }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Address} from './Components/AddressesComponent/address';


@Injectable()
export class AddressService implements OnInit {

	constructor(
		private httpClient: HttpClient,
		private http: Http
		) {}

	results: string[];

	private addressUrl = 'http://addresses-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/address';
	private headers = new Headers({'Access-Control-Allow-Origin': '*'});
	ngOnInit(): void {
	// Make the HTTP request:
		// this.http.get(this.addressUrl).subscribe(data => {
		// 	// Read the result field from the JSON response.
		// 	this.results = data['results'];
		// 	console.log(data);
		// });
	}

	test(): Observable <any> {
		console.log("in service test function");
		return this.http.get(this.addressUrl, {headers: this.headers});
	}

	// getAllPersons():Observable<any>{
 //    	console.log("Here");
 //       return this.http.get(this.addressUrl).map((response:Response) => {
 //        console.log(response.json());
 //        response.json();
 //    });
 //    }
 	getAllPersons(): Promise<Address[]> {
		console.log("Here");
		return this.http.get(this.addressUrl)
			.toPromise()
			.then(response => response.json().data as Address[]);
    }

   //  getUsers(): Observable<Address[]> {
   //      return this.http.get(this.addressUrl)
			// .map((response:Response) => response.json());
   //          //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   //  }

			//.map((res:Response) => res.json());
		//.subscribe(data => {
			// Read the result field from the JSON response.
			//this.results = data['results'];
			//console.log(data);

}