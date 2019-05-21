import { Component, OnInit } from '@angular/core';
import * as fullpage from '../../assets/fullpage/fullpage.js';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: Object;
  public developers = [];
  public supports = [];
  public repairmen = [];
  public editors = [];

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

    this.developers = this.getServicesByName('Desenvolvedor');
    this.supports = this.getServicesByName('Suporte');
    this.repairmen = this.getServicesByName('Conserto');
    this.editors = this.getServicesByName('Edicao');
  }

  private getServicesByName(serviceName) {
    return this.usersService.getServicesByName(serviceName);
  }
}
