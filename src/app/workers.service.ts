import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
	private workersUrl = 'api/workers';

	constructor(
		private http: HttpClient
	) { }

	getWorkers(): Observable<any> {
		return this.http.get(this.workersUrl);
	}
}
