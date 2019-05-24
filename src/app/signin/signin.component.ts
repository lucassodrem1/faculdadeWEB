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
		.subscribe(user => {
			if(typeof user.docs[0] !== 'undefined') {
				alert('Este usuário já existe!');
				return;
			} else {
				delete userData.confirmation;
				this.addUser(userData);
				alert('Conta criada com sucesso!');
				this.router.navigate(['/login']);
			}
		});
	}

	private addUser(userData) {
		this.usersService.addUser(userData);
	}
}
