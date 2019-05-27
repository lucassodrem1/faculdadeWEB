import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	signinForm = new FormGroup({
		username: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
		confirmation: new FormControl('')
	});

	constructor(
		private usersService: UsersService,
		private router: Router
	) { }

	ngOnInit() {}

	public onSubmit(userData) {
		this.usersService.getUserByUsername(userData.username)
		.subscribe(exists => {
			if (!exists) {
				this.addUser(userData);
				alert('Conta criada com sucesso!');
				this.router.navigate(['/login']);
				return;
			}

			alert('Este usuário já existe!');
		});
	}

	private addUser(userData) {
		this.usersService.addUser(userData);
	}
}
