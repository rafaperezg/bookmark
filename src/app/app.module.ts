import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './public/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    //Core
    BrowserModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    //Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule
    //Custom
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
