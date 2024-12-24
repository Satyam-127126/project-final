import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { EstimateInsuranceComponent } from './estimate-insurance/estimate-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'buy-insurance', component: BuyInsuranceComponent },
  { path: 'renew-insurance', component: RenewInsuranceComponent },
  { path: 'estimate-insurance', component: EstimateInsuranceComponent },
  { path: 'claim-insurance', component: ClaimInsuranceComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
