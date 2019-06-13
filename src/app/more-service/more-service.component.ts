import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-more-service',
  templateUrl: './more-service.component.html',
  styleUrls: ['./more-service.component.css']
})
export class MoreServiceComponent implements OnInit {
	private allUsers = [];
	public services = [];
	private serviceCategory;

	constructor(
		private activatedRoute: ActivatedRoute,
		private usersService: UsersService
	) { 
		this.activatedRoute.params
		.subscribe(params => this.serviceCategory = params.serviceCategory)
	}

	ngOnInit() {
		this.getAllUsers();
	}

	public getAllUsers() {
		this.usersService.getAllUsers()
	    .subscribe(users => {
	      for(let user in users) {
	        this.allUsers.push(users[user]);
	      }

	      this.services = this.getAllOfferServiceByCategory(this.allUsers, this.serviceCategory);
	    });
	}

	public getAllOfferServiceByCategory(users, serviceCategory) {
		return this.usersService.getAllOfferServiceByCategory(users, serviceCategory);
	}
}
