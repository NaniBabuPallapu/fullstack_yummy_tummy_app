import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/main/webapp/app/interfaces/user';
import { DebugService } from 'src/main/webapp/app/services/debug.service';
import { UserService } from 'src/main/webapp/app/services/user.service';
import { PasswrodValidator } from 'src/main/webapp/app/validators/password-validator';
import { PhoneNumberValidator } from 'src/main/webapp/app/validators/phone-number-validator';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  fetchedUser!: User | null;
  userFormData!: FormGroup;

  updatedUserSave: User = {} as User;



  // userFormData: FormGroup = {} as FormGroup; // definedObject instead of undefined  userFormData!: FormGroup;

  constructor(private debugService: DebugService, private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.fetchedUser  = this.userService.getUser();

  }

  ngOnInit() {

    this.userFormData = new FormGroup({
      id_: new FormControl(''),
      firstName_: new FormControl(''),
      lastName_: new FormControl(''),
      logInName_: new FormControl(''),
      password_: new FormControl('', [Validators.required, PasswrodValidator]), // customValidation for password
      email_: new FormControl(''),
      phone_: new FormControl('', [Validators.required, PhoneNumberValidator])  // customValidation for Phone number
    });

    // const idFromRoute = this.activatedRoute.snapshot.paramMap.get('id');
    // const defaultId = 1;
    // const selectedId = (idFromRoute !== null && !isNaN(Number(idFromRoute))) ? Number(idFromRoute) : defaultId;

    // this.fetchedUser  = this.userService.getUser();
    const selectedId = Number(this.fetchedUser?.id);
    if (selectedId !== null || selectedId !== 0) {

      this.userService.getUserById(selectedId).subscribe((data) => {

        this.fetchedUser = data;
        console.log('fetched by id user profile to update : '+JSON.stringify(this.fetchedUser));

        this.router.navigate(['/update-user', this.fetchedUser.id]);

        this.userFormData.controls['id_'].setValue(this.fetchedUser.id);
        this.userFormData.controls['firstName_'].setValue(this.fetchedUser.firstName);
        this.userFormData.controls['lastName_'].setValue(this.fetchedUser.lastName);
        this.userFormData.controls['logInName_'].setValue(this.fetchedUser.loginName);
        this.userFormData.controls['password_'].setValue(this.fetchedUser.password);
        this.userFormData.controls['email_'].setValue(this.fetchedUser.email);
        this.userFormData.controls['phone_'].setValue(this.fetchedUser.phone);

      });
    }

  }

  get passwordValue() {
    return this.userFormData.get('password_'); // only for required and custom validations.
  }

  get phoneValue() {
    return this.userFormData.get('phone_'); // only for  required and custom  validations.
  }

  userFormSubmit(submittedUserFormData: any) {



    this.updatedUserSave.id = submittedUserFormData['id_'];
    this.updatedUserSave.firstName = submittedUserFormData['firstName_'];
    this.updatedUserSave.lastName = submittedUserFormData['lastName_']
    this.updatedUserSave.loginName = submittedUserFormData['logInName_'];
    this.updatedUserSave.password = submittedUserFormData['password_'];
    this.updatedUserSave.email = submittedUserFormData['email_'];
    this.updatedUserSave.phone = submittedUserFormData['phone_'];

    this.debugService.info("updatedUserData : "+ JSON.stringify(this.updatedUserSave));

    if(this.updatedUserSave.id !==null && this.updatedUserSave.id !==0){
      this.userService.updateUserById(this.updatedUserSave.id, this.updatedUserSave).subscribe((data) => {
        console.log("user has been updated successfully : "+JSON.stringify(data));
        this.router.navigate(['/dashboard']);

      });
    }
  }

}
