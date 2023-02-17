import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    let count = 0;
    const customIntervalObservable = Observable.create(observer => {
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    })
    this.firstObsSubscription = customIntervalObservable.subscribe((counter: number) => {
      console.log(counter);
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
