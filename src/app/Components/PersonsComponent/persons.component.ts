import { Component, OnInit} from '@angular/core';

import { Person } from './person';
import { PersonService } from '../../person.service';
import {AddressService} from '../../address.service';
import {Address} from '../AddressesComponent/address';
import { Headers, Http, URLSearchParams } from '@angular/http';
import * as angular from "angular";


@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit{

	constructor(
		private personService: PersonService,
		private addressService: AddressService) { }

	persons: Person[] = [];

	// addresses: Address[] = [];

	searchterm = {
		'first_name':'',
		'last_name':''
	};

	page_cursor : number;
	page_length : number;

	params = new URLSearchParams();
	sampleAddress = new Address("", "", "", "", "", "");
	ngOnInit(): void {
		// this.personService.getPersons()
	 //  	.then(persons => this.persons = persons);
		//console.log(this.personService.getAddresses());
	  	// this.personService.getAddresses()
	  	// .subscribe(
	  	// 	addresses => this.addresses = addresses
	  	// );
	  	this.getPersons(0);

	}


	getPersons(offset: number): void {
		if (offset < 0) {
			offset = 0;
		}
		this.page_cursor = offset;
		this.params.set('offset', offset.toString());
		//this.params.delete('dasdfas');
		//this.params.set('zip', '777777');
		this.personService
		.getPersonsParams(this.params)
		.subscribe((data) => {
			this.persons = data;
			this.getPersonAddress();
			this.page_length = this.persons.length;
			//console.log(this.persons);
			},
			error => () => {console.log("err")}
		);
	}

	getPersonAddress() : void {
		for (var i = 0; i < this.persons.length; i++) {
			//console.log(this.persons[i].first_name);
			//persons[i].address = 
			const index = i;
			this.addressService
				.getAddressByUrl(this.persons[i].address_url)
				.subscribe((data) => {
					//console.log(data.a_id);
					//console.log(this.persons[index]);
					this.persons[index].address = data;
					//this.persons[i].address.a_id = data.a_id;
					// this.persons[i].address.state = data.state;
					// this.persons[i].address.zip = data.zip;
					// this.persons[i].address.address = data.address;
					// this.persons[i].address.country = data.country;
					// this.persons[i].address.city = data.city;
					});
		this.persons[i].address = this.sampleAddress;
		}
	}

	nextPage() : void {
		if (this.page_length < 10) {
			return;
		} else {
			this.getPersons(this.page_cursor + 10);
		}
	}

	prevPage() : void {
		if (this.page_cursor <= 0) {
			return;
		} else {
			this.getPersons(this.page_cursor - 10);
		}
	}



	delete(person: Person): void {
		this.personService
			.delete(person.p_id)
			.then(() => {
				this.persons = this.persons.filter(h => h !== person);
			});
	}

	searchByTerm(): void {
		if (this.searchterm.first_name) {
			this.params.set('first_name', this.searchterm.first_name);
		} else {
			this.params.delete('first_name');
		}

		if (this.searchterm.last_name) {
			this.params.set('last_name', this.searchterm.last_name);
		} else {
			this.params.delete('last_name');
		}
		this.getPersons(0);
	}



	addPerson(person){
		console.log("inside parent test");
		console.log(person);
		this.personService
			.addPerson(person);
	}

	update(person: Person) {
		this.personService
		.updatePerson(person);
		//.subscribe();
	}




}