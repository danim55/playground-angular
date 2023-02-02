import { Component, OnInit } from '@angular/core';
import { CounterService } from './shared/counter.service';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  counter: number;

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit() {
    // this.counter = this.counterService.counter;
  }

}
