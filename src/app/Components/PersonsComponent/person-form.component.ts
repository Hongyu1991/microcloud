import { Component, EventEmitter, Output } from '@angular/core';

import { Person }    from './person';

import { PersonService } from '../../person.service';

import { Address } from '../AddressesComponent/address';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html'
})

export class PersonFormComponent {

	constructor(private personService: PersonService) { }



	// "city": "Seattle", 
	// "state": "WA", 
	// "country": "USA", 
	// "zip": "99999", 
	// "address": "123 1st Avenue"
	address = new Address("1", "NY", 10025, "116 street", "USA");

	model = new Person(0, 'Chester', 'Yang', this.address);

	submitted = false;

	onSubmit() { 
		this.submitted = true;
		console.log("submit here");
		//TODO: submit the data to the backend
		this.addPerson();
	}

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }


	@Output() childEvent = new EventEmitter();
	addPerson(){
		console.log("child test");
		this.childEvent.emit(this.model);

	}




}