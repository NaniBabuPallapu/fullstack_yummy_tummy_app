import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarSideComponent } from './layouts/navbar-side/navbar-side.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CaptilizePipe } from './custom_pipes/captilize.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { DeleteOrderComponent } from './components/order/delete-order/delete-order.component';
@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserListComponent,
    UserDetailsComponent,
    MainComponent,
    NavbarSideComponent,
    FooterComponent,
    HeaderComponent,
    CaptilizePipe,
    DashboardComponent,
    MenuComponent,
    OrdersComponent,
    SettingsComponent,
    AboutComponent,
    ContactUsComponent,
    CreateOrderComponent,
    DeleteOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
