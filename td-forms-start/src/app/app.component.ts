import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') signUpForm: NgForm;

  defaultSelectValue = "teacher";
  answer : string = '';
  genders = ['male','female','helicopter'];

  suggestUserName() {
    
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData : {
    //     username: suggestedName,
    //     mail: 't'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender : 'male'

    // })
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
