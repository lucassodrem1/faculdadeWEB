import { Component, OnInit } from '@angular/core';
import * as fullpage from '../../assets/fullpage/fullpage.js';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	public userInfo = {
		id: null,
		username: null,
		email: null,
		password: null,
		offerServices: [],
		contractedServices: []
	};

	offerService = new FormGroup({
		title: new FormControl(''),
		desc: new FormControl(''),
		category: new FormControl(''),
		price: new FormControl('')
	});

	constructor(
		private usersService: UsersService
	) { }

	ngOnInit() {
		new fullpage('#fullpage', {
			lockAnchors: false,
			sectionsColor : ['#1bbc9b', '#0798ec', '#ff5f45', '#7e8f7c', '#fec401'],
			menu: '#menu',
			lazyLoad: true,
			navigation: true,
			showActiveTooltip: true,
			loopTop: true,
			loopBottom: true,
			scrollOverflow: true,
		});

  		let userId = localStorage.getItem('userInfo');
 		this.getUserById(userId);
  }

  public getUserById(userId) {
  	this.usersService.getUserById(userId)
  	.subscribe(user => {
  		this.userInfo = user;
  	});
  }

  public addOfferService(serviceData) { 
  	this.usersService.addOfferService(serviceData);
  	this.offerService.reset();
  	$('.show-alert').show();
  }
}
