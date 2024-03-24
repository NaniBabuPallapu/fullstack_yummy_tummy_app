import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from 'src/main/webapp/app/interfaces/location';
import { LocationService } from 'src/main/webapp/app/services/location.service';

@Component({
  selector: 'app-order-shipping',
  templateUrl: './order-shipping.component.html',
  styleUrls: ['./order-shipping.component.scss']
})
export class OrderShippingComponent {

  states : string[] = ['Andhra Pradesh', 'Telengana', 'Bihar', 'Kerala', 'Karnataka', 'Tamilnadu']
  shippingFormGroupObject! : FormGroup;

  locationData : Location = {} as Location;

  constructor(private formBuilder:FormBuilder, private locationService : LocationService ){

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

    this.locationData.doorNumber = this.shippingFormGroupObject.controls['doorNumber_'].value;
    this.locationData.addressLine1 = this.shippingFormGroupObject.controls['addressLine1_'].value;
    this.locationData.addressLine2 = this.shippingFormGroupObject.controls['addressLine2_'].value;
    this.locationData.city = this.shippingFormGroupObject.controls['city_'].value;
    this.locationData.state = this.shippingFormGroupObject.controls['state_'].value;
    this.locationData.country = this.shippingFormGroupObject.controls['country_'].value;
    this.locationData.pinCode = this.shippingFormGroupObject.controls['pincode_'].value;

    console.log('printing object : '+JSON.stringify(this.locationData));

    this.locationService.saveLocation(this.locationData).subscribe( (data) => {
      console.log('location data : '+data);
    })


  }
}
