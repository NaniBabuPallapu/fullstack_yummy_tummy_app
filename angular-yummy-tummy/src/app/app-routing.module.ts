import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DisplayProfileComponent } from './components/users/display-profile/display-profile.component';
import { CreateProfileComponent } from './components/users/create-profile/create-profile.component';

const routes: Routes = [
  {
    path : 'dashboard', component : DashboardComponent
  },
  {
    path : 'menu', component : MenuComponent
  },
  {
    path : 'orders', component : OrdersComponent
  },
  {
    path : 'settings', component : SettingsComponent
  },
  {
    path : 'about', component : AboutComponent
  },
  {
    path : 'contactUs', component : ContactUsComponent
  },
  {
    path : 'users',component : DisplayProfileComponent
  },
  {
    path : 'create-user', component : CreateProfileComponent
  },
  {
     path: '', redirectTo: 'dashboard', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
