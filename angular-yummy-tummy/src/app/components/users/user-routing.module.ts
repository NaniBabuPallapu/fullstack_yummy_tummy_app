import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

const routes: Routes = [
  {
    path: 'create-user', component: CreateProfileComponent
  },
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
