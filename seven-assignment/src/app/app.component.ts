import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  states = ['Stable', 'Critical', 'Finished']
  projectForm: FormGroup;
  forbiddenEmails = ['test@test.com', 'ash@pok.com'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'mail': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      'status': new FormControl(null),
    })
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  forbiddenEmail(control: FormControl): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    const promise = new Promise<{ [s: string]: boolean }>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenEmails.indexOf(control.value) !== -1) {
          resolve({ 'isForbiddenMail': true })
        }
        resolve(null);
      }, 1500)
    })
    return promise;
  }

}
