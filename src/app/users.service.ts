import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	constructor(
		private firestore: AngularFirestore,
		private router: Router
	) { }

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
		userData.services = [];
		userData.id = Math.random().toString(16).substr(2, 16);
		//todo verificar se id já existe.

		return new Promise<any>((resolve, reject) => {
			this.firestore.collection('users')
			.add(userData)
			.then(res => {}, err => reject(err));
		});
	}

	private handleError(result?) {
		return (error: any) => {
			return of(result);
		};
	}
}
