import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

const routes: Routes = [
  {
    path: 'update-user/:id', component: UpdateProfileComponent
  },
  {
    path: 'delete-user/:id', component: DeleteProfileComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],

})
export class UserRoutingModule {
  static routes: Routes | undefined;

}
