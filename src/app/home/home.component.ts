import { Component, OnInit } from '@angular/core';
import * as fullpage from '../../assets/fullpage/fullpage.js';
import { UsersService } from '../users.service';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public workers = [];
  public developers = [];
  public supports = [];

  constructor(
    private usersSerivce: UsersService,
    private workersService: WorkersService  
  ) {}

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

    this.getWorkers();
  }

  //Metodo para pegar todos os trabalhadores.
  private getWorkers () {
    this.workersService.getWorkers()
    .subscribe(workers => {
      this.workers = workers;

      // Pegando o nome do usuário da tabela users.
      this.workers.forEach(worker => {
        this.usersSerivce.getUserById(worker.userId)
        .subscribe(user => {
          worker.userName = user.name;
        })
      });

      //Separando por categoria.
      this.workers.forEach(worker => {
        if (worker.work == 'Desenvolvedor') {
          this.developers.push(worker);
        }
      });

      this.workers.forEach(worker => {
        if (worker.work == 'Suporte') {
          this.supports.push(worker);
        }
      });
      console.log(this.workers);
    });
  }
}
