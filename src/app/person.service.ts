import { Injectable , OnInit }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Person } from './Components/PersonsComponent/person';
import {Address} from './Components/AddressesComponent/address';
import {AddressService} from './address.service';
@Injectable()
export class PersonService implements OnInit {
  private headers = new Headers({'Content-Type': 'application/json'});
  private personsUrl = 'http://persons2-env.us-east-2.elasticbeanstalk.com/person';
  //private personsUrl = '13.59.69.184:8080/person';
  //private addressUrl = 'http://addresses-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/address';
  options: RequestOptions;
  constructor(private http: Http,
    private addressService : AddressService
    ) { }

  ngOnInit(): void {
    this.options = new RequestOptions({ headers: this.headers });
  }
  getPersonsParams(params: URLSearchParams): Observable <any> {
    //let params: URLSearchParams = new URLSearchParams();
    //params.set('offset', offset.toString());
    return this.http.get(this.personsUrl, { search: params })
      .map((response: Response) => response.json());
  }


  getPersons(): Promise<Person[]> {
    return this.http.get(this.personsUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json().data as Person[])
               .catch(this.handleError);
  }


  getPerson(id: number): Promise<Person> {
  	const url = `${this.personsUrl}/${id}`;
  	return this.http.get(url)
  			.toPromise()
  			.then(response => response.json().data as Person)
  			.catch(this.handleError);
  }

  addPerson(person: Person): void {
    console.log("inside addPerson");

    //first we should add the address. 
    const curadd = person.address;
    this.addressService
    .addAddress(curadd)
    .subscribe( (data) => {person.address_url = data._body;
      console.log("recorde the url: " + person.address_url);
    // delete person.p_id;
    // delete person.address;
    let newP = new Person('', '', '', null, '');
    newP.first_name = person.first_name;
    newP.last_name = person.last_name;
    newP.address_url = person.address_url;
    delete newP.p_id;
    delete newP.address;
    //console.log(newP);
    this.http.post(this.personsUrl, JSON.stringify(newP), {headers: this.headers})
        .toPromise()
        .then((response) => {
          console.log("in person service");
          console.log(response);
          //response.json() as Person
        })
        .catch(this.handleError);

    });
  }

  updatePerson(person: Person){
    const url = this.personsUrl + '/' + person.p_id;
    console.log(url);
    //person.address_url = 
    this.addressService
    .updateAddress(person.address)
    .subscribe((data) => {
      person.address_url = data.url;
      console.log(person);
      console.log(data.url);
      let newP = new Person('','','',null,'');
      newP.first_name = person.first_name;
      newP.last_name = person.last_name;
      newP.address_url = data.url;
      console.log(JSON.stringify(newP));
      delete newP.address;
      delete newP.p_id;
      this.http.put(url, JSON.stringify(newP), this.options)
      .subscribe(() => {});
    });
    //return null;
  }


  delete(id: string): Promise<void> {
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