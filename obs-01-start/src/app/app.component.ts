import { Component, OnInit } from '@angular/core';
import { UsersService } from './user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public activated: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.activated.
      subscribe((displayActivated: boolean) => {
        this.activated = displayActivated;
      })
  }
}
