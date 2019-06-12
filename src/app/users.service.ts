import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	constructor(
		private firestore: AngularFirestore,
		private router: Router
	) { }

	public getAllUsers() {
		return this.firestore.collection('users')
			.snapshotChanges()
			.pipe(
				map(users => users),
				catchError(this.handleError())
			);
	}

	public getUserById(userId): Observable<any> {
		return this.firestore.collection('users', ref => ref.where('id', '==', userId))
			.snapshotChanges()
			.pipe(
				map(user => user[0].payload.doc.data()),
				catchError(this.handleError())
			);

	}

	public getUserByUsername(username): Observable<any> {
		return this.firestore.collection('users', ref => ref.where('username', '==', username))
			.snapshotChanges()
			.pipe(
				map(user => user[0].payload.doc.data()),
				catchError(this.handleError())
			);
	}

	// Checar se existe um usuário com esse username.
	public checkUserByUsername(username): Observable<any> {
		return this.firestore.collection('users', ref => ref.where('username', '==', username))
			.get()
			.pipe(
				map(user => user.docs[0].exists),
				catchError(this.handleError())
			);
	}

	// Checar se existe um um usuário com esse username e senha.
	private checkUserByUsernameAndPassword(username, password): Observable<any> {
		return this.firestore.collection('users', ref => 
				ref.where('username', '==', username)
				.where('password', '==', password)
			)
			.get()
			.pipe(
				map(user => user.docs[0].exists),
				catchError(this.handleError())
			);
	}

	public login(userData) {
		let id = userData.id;
		let username = userData.username;
		let password = userData.password;
		this.checkUserByUsernameAndPassword(username, password)
		.subscribe(exists => {
			if (exists) {
				this.getUserByUsername(username)
				.subscribe(user => {
					localStorage.setItem('userInfo', user.id);
					this.router.navigate(['']);
				})

				return;
			} 

			alert('Usuário ou senha incorreta.');
			return;
		});
	}

	// Adicionar usuário no banco de dados.
	public addUser(userData): Promise<any> {
		delete userData.confirmation;
		userData.offerServices = [];
		userData.contractServices = [];
		userData.id = Math.random().toString(16).substr(2, 16);

		return new Promise<any>((resolve, reject) => {
			this.firestore.collection('users')
			.add(userData)
			.then(res => {}, err => reject(err));
		});
	}

	//----------Serviços do usuário --------------//

	/**
	 *	Adiciona um novo serviço ao array offerServices.
	 *
	 * 	Gera um id aleatório para o serviço.
	 *  Seta a quantidade de hearts em 0.
	 * 	Encontra o usuário pelo id e com isso pega a referência do doc
	 *	em que ele está.
	 *	No final, adiciona o novo objeto ao array.
	 */
	public addOfferService(serviceData) {
		let userId = localStorage.getItem('userInfo');
		serviceData.serviceId = Math.random().toString(16).substr(2, 16);
		serviceData.hearts = 0;

		this.firestore.collection('users', ref => ref.where('id', '==', userId))
		.snapshotChanges()
		.pipe(
			catchError(this.handleError())
		)
		.subscribe(user => {
			this.firestore
			.collection('users')
			.doc(user[0].payload.doc.id)
			.update({
				offerServices: firebase.firestore.FieldValue.arrayUnion(serviceData)
			});
		});
	}

	//Pega todos os offerServices de todos os usuarios filtrado pela categoria.
	public getAllOfferServiceByCategory(users, serviceCategory) {
		let allOfferServices = [];
		for (let user in users) {
			for(let offerService in users[user].payload.doc.data().offerServices) {
				let service = users[user].payload.doc.data().offerServices[offerService];
				// Só será pego os serviços com a categoria igual ao nome passado no paramatro.
				if(service.category == serviceCategory) {
	        		allOfferServices.push(service);
	        	}
	        }
	    }

	    let ordenedOfferServices = this.orderOfferServicesByBenefit(allOfferServices);

	    return ordenedOfferServices;
	}

	// Ordena o array de serviços por número de hearts.
	private orderOfferServicesByBenefit(offerServices) {
		offerServices.sort((a, b) => {
			return (a.hearts / a.price) < (b.hearts / b.price) ? 1 : -1;
		})

		return offerServices;
	}

	// Método para tratamento de erros.
	private handleError(result?) {
		return (error: any) => {
			return of(result);
		};
	}
}
