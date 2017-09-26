import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: 0,  firstname: 'Zero', address: {}},
      { id: 11, firstname: 'Mr. Nice', address: {}},
      { id: 12, firstname: 'Narco' , address: {}},
      { id: 13, firstname: 'Bombasto' , address: {}},
      { id: 14, firstname: 'Celeritas' , address: {}},
      { id: 15, firstname: 'Magneta' , address: {}},
      { id: 16, firstname: 'RubberMan' , address: {}},
      { id: 17, firstname: 'Dynama' , address: {}},
      { id: 18, firstname: 'Dr IQ' , address: {}},
      { id: 19, firstname: 'Magma' , address: {}},
      { id: 20, firstname: 'Tornado' , address: {}}
    ];
    return {persons};
  }
}