import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { User } from './models/user';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';


import {APP_ROUTING} from './app.routes';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
