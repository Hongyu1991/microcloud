import { Component} from '@angular/core';
import { Address} from './address';
import { AddressService } from '../../address.service';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, URLSearchParams } from '@angular/http';
import * as angular from "angular";

@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})


export class AddressesComponent {

	constructor(
		private addressService: AddressService
	) {}

	addresses: Address[] = [];

	searchterm = {
		'address':'',
		'state':'',
		'zip':'',
		'country':'',
	};

	//let var angular: any;
	//pages = [0];
	page_cursor : number;
	page_length : number;

	params = new URLSearchParams();
	// params.set('offset', offset.toString());

	//params.set('zip', '99999');

	ngOnInit(): void {
		//this.params.set('zip', '99999');
		// this.params.set('address', '123 2nd Avenue');
		this.getAddresses(0);
	}



	searchByTerm():void {
		// angular.forEach(this.searchterm, function(value, key) {
		// });
		if (this.searchterm.address) {
			this.params.set('address', this.searchterm.address);
		} else {
			this.params.delete('address');
		}
		if (this.searchterm.state) {
			this.params.set('state', this.searchterm.state);
		} else {
			this.params.delete('state');
		}
		if (this.searchterm.zip) {
			this.params.set('zip', this.searchterm.zip.toString());
		} else {
			this.params.delete('zip');
		}
		if (this.searchterm.country) {
			this.params.set('country', this.searchterm.country);
		} else {
			this.params.delete('country');
		}

		this.getAddresses(0);
	}

	getAddresses(offset: number): void {
		if (offset < 0) {
			offset = 0;
		}
		this.page_cursor = offset;
		this.params.set('offset', offset.toString());
		//this.params.delete('dasdfas');
		//this.params.set('zip', '777777');
		this.addressService
		.getAddressesOffset(this.params)
		.subscribe((data) => {this.addresses = data;
			this.page_length = this.addresses.length;
			console.log(this.addresses);
			},
			error => () => {console.log("err")}
		);
	}

	getAddressById(a_id: number): void {

	}

	nextPage() : void {
		if (this.page_length < 10) {
			return;
		} else {
			this.getAddresses(this.page_cursor + 10);
		}
	}

	prevPage() : void {
		if (this.page_cursor <= 0) {
			return;
		} else {
			this.getAddresses(this.page_cursor - 10);
		}
	}

	addAddress(address) {
		//call service function
		delete address.a_id;
		console.log(address);
		this.addressService
			.addAddress(address)
			.subscribe((data) => {console.log(data)});
	}

	delete(address: Address) {
		if(address.a_id) {
			console.log("delete id: " + address.a_id);
			this.addressService
			.deleteAddressById(address.a_id)
			//.deleteAddressById('5')
			.subscribe((res) => {});
			this.addresses = this.addresses.filter(h => h !== address);
		}
		
			// .toPromise(){
			// 	this.addresses = this.addresses.filter(h => h !== address)
			// };
	}


}