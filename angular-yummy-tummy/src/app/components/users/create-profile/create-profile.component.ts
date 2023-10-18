import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { PasswrodValidator } from 'src/app/validators/password-validator';
import { PhoneNumberValidator } from 'src/app/validators/phone-number-validator';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit{

  user! : User;

  formData! : FormGroup;

  ngOnInit() {

    this.formData = new FormGroup({
      firstName_ : new FormControl(''),
      lastName_ : new FormControl(''),
      logInName_ : new FormControl(''),
      password_ : new FormControl('', [Validators.required, PasswrodValidator]),
      email_ : new FormControl(''),
      phone_ : new FormControl('', [Validators.required, PhoneNumberValidator ]) 
    });


  }

  



}
