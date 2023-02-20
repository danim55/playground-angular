import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from './user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public activated: boolean = false;
  private activatedSubscription: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.activatedSubscription = this.usersService.activated.
      subscribe((displayActivated: boolean) => {
        this.activated = displayActivated;
      })
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe();
  }
}
