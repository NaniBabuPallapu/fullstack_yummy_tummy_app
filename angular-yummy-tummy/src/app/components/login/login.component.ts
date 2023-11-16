import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PasswrodValidator } from 'src/app/validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup;

  logInFailed: boolean = false;
  signIn: boolean = true;
  signUp: boolean = false;

  signInUserBack!: boolean;
  buttonDisabled!: boolean;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.logInForm = this.formBuilder.group({

      logInName_: new FormControl('', [Validators.required]),
      password_: new FormControl('', [Validators.required, PasswrodValidator])
    });
  }
  ngOnInit() {

    // this.logInForm = new FormGroup({

    //   logInName_: new FormControl('', [Validators.required]),
    //   password_: new FormControl('', [Validators.required, PasswrodValidator])
    // });

    console.log('singInBack value : ' + this.signInUserBack);
  }

  get logInNameValue() {
    return this.logInForm.get('logInName_');
  }

  get passwordValue() {
    return this.logInForm.get('password_')
  }

  logIn(submittedLogInData: any) {

    // const enteredUserName = this.logInForm.value.logInName_;
    // const enteredPassword = this.logInForm.value.password_;

    const enteredUserName = submittedLogInData['logInName_'];

    const enteredPassword = submittedLogInData['password_'];

    this.authService.logIn(enteredUserName, enteredPassword).subscribe((data) => {

      if (data) {
        console.log("User has been logged In : " + data)
        this.router.navigate(['/dashboard']);
      } else {
        console.log('log in failed, please try again');
        this.logInFailed = true;
        this.passwordValue?.clearValidators;
        this.passwordValue?.updateValueAndValidity;
      }
    })

  }

  createProfile() {
    // Disable the button to prevent double-click

    this.signInUserBack = !this.signIn;
    this.signIn = !this.signIn;
    this.signUp = !this.signUp;
  }

}
