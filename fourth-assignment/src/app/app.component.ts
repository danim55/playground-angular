import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4assignment-angular';
  oddNumber: boolean = false;
  evenNumber: boolean = false;

  counter:number = 0;

  onStartPressed(counter:number){
    this.counter=counter;
    if(this.counter % 2 == 0   ){
      this.oddNumber = false;
      this.evenNumber = true;
    }
    else{
      this.oddNumber = true;
      this.evenNumber = false;
    }
  }

}
