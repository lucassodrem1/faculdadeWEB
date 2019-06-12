import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-perfil-service',
  templateUrl: './perfil-service.component.html',
  styleUrls: ['./perfil-service.component.css']
})
export class PerfilServiceComponent implements OnInit {
	private onwerId;
	private serviceId;
	public userInfo = {
		id: null,
		username: null,
		email: null,
		password: null,
		offerServices: [],
		contractedServices: []
	};
	public serviceInfo = {
		title: null,
		desc: null,
		price: null,
		hearts: null
	};

	constructor(
		private route: ActivatedRoute,
		private usersService: UsersService
	) { 
		this.route.params
		.subscribe(params => {
			this.onwerId = params.ownerId;
			this.serviceId = params.serviceId;
		});
	}

	ngOnInit() {
		this.getUserById(this.onwerId);
	}

	public getUserById(id) {
		this.usersService.getUserById(id)
		.subscribe(user => {
			this.userInfo = user;

			this.getServiceById(this.userInfo.offerServices, this.serviceId);
		});
	}

	public getServiceById(services, serviceId) {
		this.serviceInfo = this.usersService.getServiceById(services, serviceId);
	}
}
