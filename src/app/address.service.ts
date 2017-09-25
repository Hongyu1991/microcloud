import { Injectable, OnInit }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import {Address} from './Components/AddressesComponent/address';


@Injectable()
export class AddressService implements OnInit {

	constructor(private http: HttpClient) {}

	results: string[];

	private addressUrl = 'http://addresses-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/address';

	ngOnInit(): void {
	// Make the HTTP request:
		// this.http.get(this.addressUrl).subscribe(data => {
		// 	// Read the result field from the JSON response.
		// 	this.results = data['results'];
		// 	console.log(data);
		// });
	}

	test(): void {
		// this.http.get(this.addressUrl).subscribe(data => {
		// 	// Read the result field from the JSON response.
		// 	//this.results = data['results'];
		// 	console.log(data);
		// });
	}



}