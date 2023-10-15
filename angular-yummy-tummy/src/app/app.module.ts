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
