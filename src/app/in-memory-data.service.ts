import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const users = [
		  { 
		  	id: 1, 
		  	username: 'Lucas', 
		  	password: 'test',
		  	services: [
		  		{
		  			id: 1,
		  			name: 'Desenvolvedor',
		  			desc: 'Sou o Lucas Desenvolvedor',
		  			votes: 500
		  		},
		  		{
		  			id: 2,
		  			name: 'Desenvolvedor',
		  			desc: 'Sou o Lucas Desenvolvedor1',
		  			votes: 300
		  		},
		  		{
		  			id: 5,
		  			name: 'Suporte',
		  			desc: 'Sou o Lucas Suporte',
		  			votes: 100
		  		}
		  	]
		  },
		  { 
		  	id: 2, 
		  	username: 'Renê', 
		  	password: 'test',
		  	services: [
		  		{
		  			id: 3,
		  			name: 'Desenvolvedor',
		  			desc: 'Sou o Renê Desenvolvedor',
		  			votes: 900
		  		},
		  		{
		  			id: 4,
		  			name: 'Desenvolvedor',
		  			desc: 'Sou o Renê Desenvolvedor1',
		  			votes: 300
		  		}
		  	]
		  }
		];

	   

    	return {users};
  	}
}