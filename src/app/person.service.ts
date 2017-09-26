import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Person } from './Components/PersonsComponent/person';
import {Address} from './Components/AddressesComponent/address'

@Injectable()
export class PersonService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private personsUrl = 'api/persons';  // URL to web api
  private personsEndpoint = 'http://persons-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/person';

  private addressUrl = 'http://addresses-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/address';

  constructor(private http: Http) { }

  getPersons(): Promise<Person[]> {
    return this.http.get(this.personsUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json().data as Person[])
               .catch(this.handleError);
  }

  getAddresses(): Observable<Address[]> {
    // return this.http.get(this.addressUrl)
    //   .toPromise()
    //   .then(response => response.json().data as Address[])
    //   .catch(this.handleError);
    return this.http.get(this.addressUrl)
      .map((res:Response) => res.json().data as Address[]);
  }

  getPerson(id: number): Promise<Person> {
  	const url = `${this.personsUrl}/${id}`;
  	return this.http.get(url)
  			.toPromise()
  			.then(response => response.json().data as Person)
  			.catch(this.handleError);
  }

  addPerson(person: Person): Promise<Person> {
    console.log("inside addPerson");
    return this.http.post(this.personsUrl, JSON.stringify(person), {headers: this.headers})
        .toPromise()
        .then((response) => {
          console.log("in person service");
          console.log(response);
          //response.json() as Person
        })
        .catch(this.handleError);
  }


  delete(id: number): Promise<void> {
    const url = `${this.personsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}