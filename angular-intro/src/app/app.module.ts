import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from '../greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { CalculatorService } from './calculator/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CalculatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
