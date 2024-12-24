import { Component } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-renew-insurance',
  standalone:false,
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent {
  policyNumber = '';

  constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.insuranceService.renewInsurance(this.policyNumber).subscribe(response => {
      this.snackBar.open('Renew successful', 'Close', { duration: 3000 });
    });
  }
}