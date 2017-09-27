import { Address } from '../AddressesComponent/Address';

export class Person {
	// id: string;
	// firstname: string;
	// LastName: string;
	// Address: Address;

	constructor(
	    public p_id: string,
	    public first_name: string,
	    public last_name: string,
	    public address: Address,
	    public address_url: string
  	) {  }
}
