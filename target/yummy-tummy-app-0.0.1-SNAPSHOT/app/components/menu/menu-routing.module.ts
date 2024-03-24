import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';

const routes: Routes = [
  {
    path : '',
    component : MenuComponent,
    children : [
      {
        path : 'display',
        component : MenuDisplayComponent
      },
      {
        path : 'create-item',
        component : CreateItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
