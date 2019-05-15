import { Component, OnInit } from '@angular/core';
import * as fullpage from '../../assets/fullpage/fullpage.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  developers: Object;

  constructor() {
    this.developers = [
      {name: 'test', desc: 'aaaaaaaaaaa', votes: '500'},
      {name: 'test', desc: 'aaaaaaaaaaa', votes: '500'},
      {name: 'test', desc: 'aaaaaaaaaaa', votes: '500'},
      {name: 'test', desc: 'aaaaaaaaaaa', votes: '500'},
      {name: 'test', desc: 'aaaaaaaaaaa', votes: '500'}, 
      {name: 'test', desc: 'aaaaaaaaaaa', votes: '500'}
   ];
  }

  ngOnInit() {
 	  new fullpage('#fullpage', {
   		lockAnchors: false,
      anchors: ['home', 'desenvolvimento', 'suporte'],
      sectionsColor : ['#1bbc9b', '#0798ec', '#ff5f45'],
      menu: '#menu',
      lazyLoad: true,
      navigation: true,
      showActiveTooltip: true,
      loopTop: true,
      loopBottom: true,
      scrollOverflow: true
    });
  }
}
