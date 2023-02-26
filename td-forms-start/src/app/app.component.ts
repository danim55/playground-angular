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
  someUser = {
    userName: '',
    mail: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitSelected :boolean = false;

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
    this.submitSelected = true;
    this.someUser.userName = this.signUpForm.value.userData.username;
    this.someUser.mail = this.signUpForm.value.userData.mail;
    this.someUser.secretQuestion = this.signUpForm.value.secret;
    this.someUser.answer = this.signUpForm.value.questionAnswer;
    this.someUser.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
