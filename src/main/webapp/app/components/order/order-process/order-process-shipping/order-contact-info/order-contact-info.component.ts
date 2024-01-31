import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInfo } from 'src/main/webapp/app/interfaces/contact-info';

@Component({
  selector: 'app-order-contact-info',
  templateUrl: './order-contact-info.component.html',
  styleUrls: ['./order-contact-info.component.scss']
})
export class OrderContactInfoComponent implements OnInit {

  contactFormGroup! : FormGroup;

  contactInfo : ContactInfo = {} as ContactInfo;

  constructor(private formBuilder : FormBuilder){

  }

  ngOnInit() {


    this.contactFormGroup = this.formBuilder.group({
      name_ : ['', [Validators.required]],
      email_ : ['', [Validators.required, Validators.email]],
      phone_ : ['', [Validators.required, Validators.maxLength(10)]]
    })
  }


  saveContactInfo(){
    
    this.contactInfo.name = this.contactFormGroup.controls['name_'].value;
    this.contactInfo.email = this.contactFormGroup.controls['email_'].value;
    this.contactInfo.phone = this.contactFormGroup.controls['phone_'].value;
  }


}
