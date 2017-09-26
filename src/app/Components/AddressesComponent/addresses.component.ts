import { Component} from '@angular/core';
import { Address} from './address';
import { AddressService } from '../../address.service';
import { HttpClient } from '@angular/common/http';
import { Headers, Http } from '@angular/http';


@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})


export class AddressesComponent {

	constructor(
		private addressService: AddressService, 
		private httpClient: HttpClient,
		private http: Http
	) {}

	
	private addressUrl = 'http://addresses-env.xmyup6ek3p.us-east-2.elasticbeanstalk.com/address';
	addresses: Address[] = [];
	results = [];
	profile = [];
	ngOnInit(): void {
		//this.addressService.test();
		console.log("add");
		//console.log(this.http.get(this.addressUrl));
		
		this.addressService
		.test()
		.subscribe((data) => {this.addresses = data
			console.log(this.addresses);
		},
			error => () => {console.log("err")}
		);

		//console.log(this.addresses);

		//this.addressService.getAllPersons();


        // this.addressService.getUsers()
        //     .subscribe(
        //         users => {
        //             this.addresses = users;
        //             //console.log('this.users=' + this.addresses);
        //         }, //Bind to view
        //         err => {
        //                 // Log errors if any
        //                 console.log("i am here" + err);
        //     	});

		//.subscribe(data => {
			// Read the result field from the JSON response.
			//this.results = data['results'];
			// console.log("data");
		//});
	}





}