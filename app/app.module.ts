import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { EstimateInsuranceComponent } from './estimate-insurance/estimate-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyInsuranceComponent,
    RenewInsuranceComponent,
    EstimateInsuranceComponent,
    ClaimInsuranceComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }