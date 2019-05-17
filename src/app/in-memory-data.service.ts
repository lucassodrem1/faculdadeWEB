import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const users = [
		  { id: 1, name: 'Lucas'},
		  { id: 2, name: 'Renê' },
		  { id: 3, name: 'Guilherme' },
		  { id: 4, name: 'Iago' },
		  { id: 5, name: 'Jonathan' },
		  { id: 5, name: 'Jonathan' }
		];

	    const workers = [
	    	{id: 1, userId: 1, work: 'Desenvolvedor', desc: 'Sou o Lucas', votes: '500'},
	    	{id: 2, userId: 2, work: 'Desenvolvedor', desc: 'Sou o Renê', votes: '100'},
	    	{id: 3, userId: 3, work: 'Suporte', desc: 'Sou o Guilherme', votes: '500'},
	    	{id: 4, userId: 4, work: 'Suporte', desc: 'Sou o Iago', votes: '100'}
	    ];

    	return {users, workers};
  	}
}