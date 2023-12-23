import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-process-shipping',
  templateUrl: './order-process-shipping.component.html',
  styleUrls: ['./order-process-shipping.component.scss']
})
export class OrderProcessShippingComponent implements OnInit{

  states : string[] = ['Andhra Pradesh', 'Telengana', 'Bihar', 'Kerala', 'Karnataka', 'Tamilnadu']
  shippingFormGroupObject! : FormGroup;

  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit() {

    this.shippingFormGroupObject = this.formBuilder.group({
      doorNumber_ : ['something', [Validators.required]],
      addressLine1_ : ['', Validators.required],
      addressLine2_ : ['',],
      city_ : ['', Validators.required],
      state_: ['', Validators.required],
      country_: ['', Validators.required],
      pincode_ : ['', [Validators.required, Validators.maxLength(10)]]

    });
  }



  saveLocationData(){
    console.log('printing shipping info'+JSON.stringify(this.shippingFormGroupObject.value));

  }

}
