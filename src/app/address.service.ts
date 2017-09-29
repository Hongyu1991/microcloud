import { Injectable, OnInit }    from '@angular/core';
import { Headers, Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
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

	//private addressUrl = '13.59.69.184:8081/address';
	private addressUrl = 'http://addressesv2-env.us-east-2.elasticbeanstalk.com/address';
	//private headers = new Headers({'Access-Control-Allow-Origin': '*'});
	
	private headers = new Headers({'Content-Type': 'application/json'});
	options: RequestOptions;


	ngOnInit(): void {
		this.options = new RequestOptions({ headers: this.headers });
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
		//console.log(JSON.stringify(address));
		return this.http.post(this.addressUrl, JSON.stringify(address), this.options);
	}

	updateAddress(address: Address) : Observable <any> {
		//console.log(JSON.stringify(address));
		const url = this.addressUrl + '/' + address.a_id;
		//delete address.a_id;
		return this.http.put(url, JSON.stringify(address), this.options);
	}

	getAddressById(id: string) : Observable<any> {
		return this.http.get(this.addressUrl + '/' + id)
			.map((response: Response) => response.json());
	}

	getAddressByUrl(url: string) : Observable<any> {
		return this.http.get(url)
			.map((response: Response) => response.json());
	}

	deleteAddressById(id: string) : Observable<any> {
		const url = this.addressUrl + '/' + id;
		console.log(url);
		return this.http.delete(url, this.options)
			.map((res) => {res.json()});
			//.catch();
	}

	// deleteAddress(a_id: string) {
	// 	const url = `${this.personsUrl}/${id}`
	// 	return this.http.delete()
	// }





}