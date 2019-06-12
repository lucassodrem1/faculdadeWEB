import { Component, OnInit } from '@angular/core';
import * as fullpage from '../../assets/fullpage/fullpage.js';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allUsers = [];
  public developerServices = [];
  public supportServices = [];
  public repairmanServices = [];
  public editorServices = [];

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit() {
 	  new fullpage('#fullpage', {
   		lockAnchors: false,
      anchors: ['home', 'desenvolvimento', 'suporte', 'conserto', 'edicao'],
      sectionsColor : ['#1bbc9b', '#0798ec', '#ff5f45', '#7e8f7c', '#fec401'],
      menu: '#menu',
      lazyLoad: true,
      navigation: true,
      showActiveTooltip: true,
      loopTop: true,
      loopBottom: true,
      scrollOverflow: true
    });

    this.getAllUsers();
  }

  public getAllUsers() {
    this.usersService.getAllUsers()
    .subscribe(users => {
      for(let user in users) {
        this.allUsers.push(users[user]);
      }

      this.developerServices = this.getAllOfferServiceByCategory(this.allUsers, 'developer');
      this.supportServices = this.getAllOfferServiceByCategory(this.allUsers, 'support');
      this.repairmanServices = this.getAllOfferServiceByCategory(this.allUsers, 'repairman');
      this.editorServices = this.getAllOfferServiceByCategory(this.allUsers, 'editor');
    });
  }

  public getAllOfferServiceByCategory(users, serviceCategory) {
    return this.usersService.getAllOfferServiceByCategory(users, serviceCategory);
  }
}
