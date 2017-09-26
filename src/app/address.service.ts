import { Injectable, OnInit }    from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
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
	//private headers = new Headers({'Access-Control-Allow-Origin': '*'});
	private headers = new Headers({'Content-Type': 'application/json'});
	ngOnInit(): void {
	// Make the HTTP request:
		// this.http.get(this.addressUrl).subscribe(data => {
		// 	// Read the result field from the JSON response.
		// 	this.results = data['results'];
		// 	console.log(data);
		// });
	}

	// getAddresses(): Observable <any> {
	// 	console.log("in service test function");
	// 	return this.http.get(this.addressUrl)
	// 		.map((response:Response) => response.json());
	// }

	getAddressesOffset(params: URLSearchParams) : Observable <any> {
		//let params: URLSearchParams = new URLSearchParams();
		//params.set('offset', offset.toString());
		return this.http.get(this.addressUrl, { search: params })
			.map((response: Response) => response.json());
	}

	addAddress(address: Address) : Observable <any> {
		console.log(JSON.stringify(address));
		return this.http.post(this.addressUrl, JSON.stringify(address), {headers: this.headers});
	}







}