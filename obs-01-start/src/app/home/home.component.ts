import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs'
import { errorObject } from 'rxjs/internal-compatibility';

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
        if(count == 2){
          observer.complete()
        }
        if(count > 3){
          observer.error(new Error('Number is greater than three'));
        }
      }, 1000)
    })
    this.firstObsSubscription = customIntervalObservable.subscribe((counter: number) => {
      console.log(counter);
    }, (error: Error) => {
      console.log(error);
      alert(error.message);
    }, ()=> {
      console.log('Status: completed')
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
