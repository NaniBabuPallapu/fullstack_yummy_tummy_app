import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from 'src/main/webapp/app/interfaces/menu';
import { MenuService } from 'src/main/webapp/app/services/menu.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  createItemForm! : FormGroup;
  saveMenuObject : Menu = {} as Menu
  constructor(private router : Router, private menuService : MenuService){

  }

  ngOnInit() {
    console.log('Create Item initialized');

    this.createItemForm = new FormGroup({
      itemName_ : new FormControl('',[Validators.required]),
      itemImage_ : new FormControl('',[Validators.required]),
      itemDescription_ : new FormControl('',[Validators.required]),
      itemFromRestaurant_ : new FormControl('',[Validators.required]),
      itemPrice_ : new FormControl('',[Validators.required]),
      nonVeg_ : new FormControl(''),
      itemType_ : new FormControl('',[Validators.required]),
      distance_ : new FormControl('',[Validators.required])
    })

  }


  submitCreateItemForm(formData : any){
    this.saveMenuObject.itemName = formData['itemName_'];
    this.saveMenuObject.itemImage = formData['itemImage_'];
    this.saveMenuObject.itemDescription = formData['itemDescription_'];
    this.saveMenuObject.itemFromRestaurant = formData['itemFromRestaurant_'];
    this.saveMenuObject.itemPrice = formData['itemPrice_'];
    this.saveMenuObject.nonVeg = formData['nonVeg_'];
    this.saveMenuObject.itemType = formData['itemType_'];
    this.saveMenuObject.distance = formData['distance_'];


    if(this.saveMenuObject !== null){
        this.menuService.saveMenuSingleItem(this.saveMenuObject).subscribe((data)=>
        {
          console.log("Sending item to service"+JSON.stringify(this.saveMenuObject)+"Data" +data);
          this.router.navigate(['menu/display'])
        })
    }
  }
  
}
