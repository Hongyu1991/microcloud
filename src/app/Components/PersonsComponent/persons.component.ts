import { Component, OnInit} from '@angular/core';

import { Person } from './person';
import { PersonService } from '../../person.service';
import {Address} from '../AddressesComponent/address';

@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit{

	constructor(private personService: PersonService) { }

	persons: Person[] = [];

	addresses: Address[] = [];

	searchterm = {
		'firstname':'Chester',
		'lastname':'Yang'
	};

	ngOnInit(): void {
		this.personService.getPersons()
	  	.then(persons => this.persons = persons);
		//console.log(this.personService.getAddresses());
	  	// this.personService.getAddresses()
	  	// .subscribe(
	  	// 	addresses => this.addresses = addresses
	  	// );

	}

	delete(person: Person): void {
		this.personService
			.delete(person.id)
			.then(() => {
				this.persons = this.persons.filter(h => h !== person);
			});
	}

	searchByTerm(): void {
		console.log(this.searchterm);
	}

	addPerson(person){
		console.log("inside parent test");
		console.log(person);
		this.personService
			.addPerson(person)
			.then(() => {
				this.persons.push(person);
			});
	}




}