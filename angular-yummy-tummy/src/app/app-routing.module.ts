import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DisplayProfileComponent } from './components/users/display-profile/display-profile.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UserRoutingModule } from './components/users/user-routing.module';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: DisplayProfileComponent,
    children: UserRoutingModule.routes,
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
