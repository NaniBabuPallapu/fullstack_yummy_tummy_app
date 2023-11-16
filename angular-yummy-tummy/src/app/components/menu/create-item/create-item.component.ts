import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  createItemForm! : FormGroup;
  saveMenuObject : Menu = {} as Menu
  constructor(private router : Router){

  }

  ngOnInit() {
    console.log('Create Item initialized');

    this.createItemForm = new FormGroup({
      itemName_ : new FormControl('',[Validators.required]),
      itemImage_ : new FormControl('',[Validators.required]),
      itemDescription_ : new FormControl('',[Validators.required]),
      itemFromRestaurant_ : new FormControl('',[Validators.required]),
      itemPrice_ : new FormControl('',[Validators.required]),
      itemType_ : new FormControl('',[Validators.required]),
      distance_ : new FormControl('',[Validators.required])
    })

  }


  submitCreateItemForm(formData : any){
    this.saveMenuObject.itemName = formData["itemName_"];
  }
  
}
