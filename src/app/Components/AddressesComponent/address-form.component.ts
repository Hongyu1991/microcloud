import { Component, EventEmitter, Output } from '@angular/core';

import { Address }    from './address';

import { AddressService } from '../../address.service';


@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html'
})


export class AddressFormComponent {
	constructor(private addressService: AddressService) { }

	address = new Address("0", "NY", 10025, "116 street", "USA");

	submitted = false;

	onSubmit() {
		this.submitted = true;
		this.addAddress();
	}

	get diagnostic() { return JSON.stringify(this.address); }

	@Output() childEvent = new EventEmitter();
	addAddress(){
		console.log("child test");
		this.childEvent.emit(this.address);
	}

}