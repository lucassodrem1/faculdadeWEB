import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	constructor(
		private firestore: AngularFirestore
	) { }

	public getUserByUsername(username): Observable<any> {
		return this.firestore.collection('users', ref => ref.where('username', '==', username)).get();
	}

	public addUser(userData): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.firestore
			.collection('users')
			.add(userData)
			.then(res => {}, err => reject(err));
		});
	}
}
