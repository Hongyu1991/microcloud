import { Component, OnInit} from '@angular/core';

import { Person } from './person';
import { PersonService } from '../../person.service';


@Component({
  selector: 'persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit{

	constructor(private personService: PersonService) { }

	persons: Person[] = [];

	ngOnInit(): void {
		this.personService.getPersons()
	  	.then(persons => this.persons = persons);
	  	//.then(en => console.log(this.persons[0].ID));
		//.then(persons => this.persons = persons.slice(0, 5));
	  	this.personService.getPerson(12)
	  	.then(person => console.log(person.id));
	}


	  delete(person: Person): void {
	    this.personService
	        .delete(person.id)
	        .then(() => {
	          this.persons = this.persons.filter(h => h !== person);
	        });
	  }


	getPersons() {

	}

	getPersonById() {

	}

	insertPerson() {

	}

}