import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { InputBackgroundDirective } from './directives/input-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    InputBackgroundDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }