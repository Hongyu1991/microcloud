import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: 0,  firstname: 'Zero' },
      { id: 11, firstname: 'Mr. Nice' },
      { id: 12, firstname: 'Narco' },
      { id: 13, firstname: 'Bombasto' },
      { id: 14, firstname: 'Celeritas' },
      { id: 15, firstname: 'Magneta' },
      { id: 16, firstname: 'RubberMan' },
      { id: 17, firstname: 'Dynama' },
      { id: 18, firstname: 'Dr IQ' },
      { id: 19, firstname: 'Magma' },
      { id: 20, firstname: 'Tornado' }
    ];
    return {persons};
  }
}