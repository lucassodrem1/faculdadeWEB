import { Component, OnInit } from '@angular/core';
import { UsersService } from  '../users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl('')
	});

	constructor(
		private usersService: UsersService,
		private router: Router
	) { }

	ngOnInit() {
		this.isLogged();
	}

	public isLogged() {
		if (localStorage.getItem('userInfo')) {
			this.router.navigate(['']);
		}
	}

	public onSubmit(userData) {
		this.usersService.login(userData);
	}
}
