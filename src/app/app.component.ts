import { Component, ViewChild } from '@angular/core';
 import { RouterOutlet } from '@angular/router';
import { NgForm,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-td';
  @ViewChild('f',{ static: false }) signupForm:NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male','female'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  submitted=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({userData:{
      username:suggestedName
    }});
  }

  onSubmit(){
    this.submitted=true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
