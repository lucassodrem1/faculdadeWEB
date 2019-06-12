import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public userInfo = {
		id: null,
		username: null,
		email: null,
		password: null,
		offerServices: [],
		contractedServices: []
	};

	constructor(
		private router: Router,
		private usersService: UsersService
	) { }

	ngOnInit() {
		this.isLogged();
		this.getUserById(localStorage.getItem('userInfo'));
	}

	public isLogged() {
		if (localStorage.getItem('userInfo')) {
			return true;
		}

		return false;
	}

	public getUserById(id) {
		this.usersService.getUserById(id)
		.subscribe(user => this.userInfo = user);
	}
}
