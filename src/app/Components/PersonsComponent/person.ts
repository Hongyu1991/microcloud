import { Address } from '../AddressesComponent/Address';

export class Person {
	// id: string;
	// firstname: string;
	// LastName: string;
	// Address: Address;

	constructor(
	    public id: number,
	    public firstname: string,
	    public lastname: string,
	    public address: Address
  	) {  }
}
