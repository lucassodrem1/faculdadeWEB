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

	getUserById(userId: number): Observable<any> {
		return this.http.get(`${this.usersUrl}/${userId}`);
	}
}
