import { Component } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buy-insurance',
  standalone:false,
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
// export class BuyInsuranceComponent {
  // policy = {
    // type: '',
    // vehicleModel: '',
    // registrationNumber: '',
    // premiumAmount: 0
  // };

  // constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar) { }

  // onSubmit() {
    // this.insuranceService.buyInsurance(this.policy).subscribe(response => {
      // this.snackBar.open('Buying successful', 'Close', { duration: 3000 });
    // });
  // }
// }


export class BuyInsuranceComponent {
  policy = {
    type: '',
    vehicleModel: '',
    registrationNumber: '',
    premiumAmount: 0
  };

  policyNumber: string | null = null;

  constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.insuranceService.buyInsurance(this.policy).subscribe(response => {
      this.snackBar.open('Buying successful', 'Close', { duration: 3000 });
      this.policyNumber = response.policyNumber; // Store the policy number
    }, error => {
      this.snackBar.open('Error during buying insurance', 'Close', { duration: 3000 });
    });
  }
}