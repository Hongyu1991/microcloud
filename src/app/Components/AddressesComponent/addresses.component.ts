import { Component} from '@angular/core';
import { Address} from './address';
import { AddressService } from '../../address.service';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, URLSearchParams } from '@angular/http';


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

	pages = [0];
	page_cursor : number;
	page_length : number;

	params: URLSearchParams = new URLSearchParams();
	// params.set('offset', offset.toString());

	ngOnInit(): void {

		this.getAddresses(0);
	}


	getAddresses(offset: number): void {
		if (offset < 0) {
			offset = 0;
		}
		this.page_cursor = offset;
		this.params.set('offset', offset.toString());
		this.addressService
		.getAddressesOffset(this.params)
		.subscribe((data) => {this.addresses = data;
			this.page_length = this.addresses.length;
			console.log(this.addresses);
			},
			error => () => {console.log("err")}
		);
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
		this.addressService
			.addAddress(address);
	}




}