import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistorComponent } from './registor/registor.component';
import {MatButtonModule} from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';


const config = {
    apiKey: "AIzaSyCbA8e2X8GE8aFJZ_xUWbqV-yN2dTtkdSE",
    authDomain: "corona-app-91b66.firebaseapp.com",
    databaseURL: "https://corona-app-91b66.firebaseio.com",
    projectId: "corona-app-91b66",
    storageBucket: "corona-app-91b66.appspot.com",
    messagingSenderId: "461331158502",
    appId: "1:461331158502:web:b9162c85e4c771c6c8f227",
}

@NgModule({
  declarations: [LoginComponent, RegistorComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  
  ]
})
export class AuthModule { }
