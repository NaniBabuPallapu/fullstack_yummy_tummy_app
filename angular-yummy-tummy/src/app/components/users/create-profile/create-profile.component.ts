import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { DebugService } from 'src/app/services/debug.service';
import { UserService } from 'src/app/services/user.service';
import { PasswrodValidator } from 'src/app/validators/password-validator';
import { PhoneNumberValidator } from 'src/app/validators/phone-number-validator';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  userFormData!: FormGroup;

  // @Input() public createProfile! : boolean; // you can write below as well.

  @Input('createProfile') public signUp! : boolean;

  // sending this property to login component
@Output() public singInBack = new EventEmitter<boolean>();


  addUserProfile: User = {} as User;

  // userFormData: FormGroup = {} as FormGroup; // definedObject instead of undefined  userFormData!: FormGroup;

  constructor(private debugService: DebugService, private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.userFormData = new FormGroup({
      firstName_: new FormControl(''),
      lastName_: new FormControl(''),
      logInName_: new FormControl(''),
      password_: new FormControl('', [Validators.required, PasswrodValidator]), // customValidation for password
      email_: new FormControl(''),
      phone_: new FormControl('', [Validators.required, PhoneNumberValidator])  // customValidation for Phone number
    });

    console.log('signUpCheck value : '+this.signUp);

  }

  get passwordValue() {
    return this.userFormData.get('password_'); // only for required and custom validations.
  }

  get phoneValue() {
    return this.userFormData.get('phone_'); // only for  required and custom  validations.
  }



  userFormSubmit(submittedUserFormData: any) {

    this.debugService.info("SubmittedUserFormData : " + submittedUserFormData);

    this.addUserProfile.firstName = submittedUserFormData["firstName_"];
    this.addUserProfile.lastName = submittedUserFormData["lastName_"];
    this.addUserProfile.loginName = submittedUserFormData["logInName_"];
    this.addUserProfile.password = submittedUserFormData["password_"];
    this.addUserProfile.email = submittedUserFormData["email_"];
    this.addUserProfile.phone = submittedUserFormData["phone_"];

    this.debugService.info("adding user submiited data : " + this.addUserProfile);

    if (this.addUserProfile != null) {
      this.userService.createUser(this.addUserProfile).subscribe((data) => {
        console.log("fetched single user based on Id : " + JSON.stringify(this.addUserProfile));
        this.router.navigate(['/login']);
      });
    }

  }

  backToSignIn(){
    this.singInBack.emit(true);
  }


}
