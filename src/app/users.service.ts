import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	private usersUrl = 'api/users';

	constructor(
		private http: HttpClient
	) { }

	// Pegar todos os usuários.
	getUsers(): Observable<any> {
		return this.http.get(this.usersUrl);
	}

	/*
	* Filtrar o tipo de serviço desejado.
	* Adicionar o usuário do serviço em cada objeto.
	* Ordenar por número de votos em ordem descrecente.
	*/
	getServicesByName(serviceName) {
		let allServices = [];

		this.getUsers()
		.subscribe(users => {
			users.forEach(user => {
				user.services.forEach(service => {
					if (service.name == serviceName) {
						service.username = user.username;
						allServices.push(service);
					}
				});
			});
			allServices.sort(this.sortServicesByVotes);
		});

		return allServices;
	}

	// Comparar votos de cada serviço.
	private sortServicesByVotes (a, b) {
		return b.votes - a.votes;
	}
}
