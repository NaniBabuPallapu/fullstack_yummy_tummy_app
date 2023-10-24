import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CreateProfileComponent } from './components/users/create-profile/create-profile.component';
import { DisplayProfileComponent } from './components/users/display-profile/display-profile.component';
import { DeleteProfileComponent } from './components/users/delete-profile/delete-profile.component';
import { UpdateProfileComponent } from './components/users/update-profile/update-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserRoutingModule } from './components/users/user-routing.module';
@NgModule({
  declarations: [
    AppComponent,
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
    CreateProfileComponent,
    DisplayProfileComponent,
    DeleteProfileComponent,
    UpdateProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
