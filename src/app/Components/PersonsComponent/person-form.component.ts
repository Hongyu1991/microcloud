import { Component, EventEmitter, Output } from '@angular/core';

import { Person }    from './person';

import { PersonService } from '../../person.service';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html'
})

export class PersonFormComponent {

	constructor(private personService: PersonService) { }


	powers = ['Really Smart', 'Super Flexible',
	        'Super Hot', 'Weather Changer'];

	model = new Person(0, 'Dr IQ', 'En', 'Chuck Overstreet');

	submitted = false;

	onSubmit() { 
		this.submitted = true;
		console.log("submit here");
		//TODO: submit the data to the backend

		// this.personService.addPerson(this.model)
		// 	.then(() => null);
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