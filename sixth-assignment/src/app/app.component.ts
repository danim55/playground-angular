import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSubscription: string = 'advanced';
  @ViewChild('form') someForm: NgForm;

  onSubmit(){
    console.log(this.someForm);
  }

}
