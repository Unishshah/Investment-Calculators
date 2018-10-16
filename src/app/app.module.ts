import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GpaComponent } from './gpa/gpa.component';
import { SavingrateComponent } from './savingrate/savingrate.component';
import { CarloanCalculatorComponent } from './carloan-calculator/carloan-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    GpaComponent,
    SavingrateComponent,
    CarloanCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
