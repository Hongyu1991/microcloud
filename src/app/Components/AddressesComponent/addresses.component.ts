import { Component} from '@angular/core';
import { Address} from './address';
import { AddressService } from '../../address.service';
import { HttpClient } from '@angular/common/http';
import { Headers, Http } from '@angular/http';


@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})


export class AddressesComponent {

	constructor(
		private addressService: AddressService, 
		private http: HttpClient
	) {}

	private addressUrl = 'http://addresses-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/address';
	addresses: Address[] = [];
	results = [];
	ngOnInit(): void {
		//this.addressService.test();
		console.log("add")
		console.log(this.http.get(this.addressUrl).subscribe(val => console.log(val)));
		//.subscribe(data => {
			// Read the result field from the JSON response.
			//this.results = data['results'];
			// console.log("data");
		//});
	}





}