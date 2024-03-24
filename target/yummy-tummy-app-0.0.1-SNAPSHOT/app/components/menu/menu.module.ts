import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { CreateItemComponent } from './create-item/create-item.component';
import { MenuComponent } from './menu.component';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    MenuItemListComponent,
    CreateItemComponent,
    MenuDisplayComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
