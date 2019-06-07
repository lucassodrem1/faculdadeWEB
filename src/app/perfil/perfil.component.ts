import { Component, OnInit } from '@angular/core';
import * as fullpage from '../../assets/fullpage/fullpage.js';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
	offerService = new FormGroup({
		title: new FormControl(''),
		desc: new FormControl(''),
		category: new FormControl(''),
		price: new FormControl('')
	});

	constructor() { }

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
		scrollOverflow: true
    });
  }

}
