import { Component } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-claim-insurance',
  standalone:false,
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent {
  claim = {
    policyNumber: '',
    reason: '',
    claimAmount: 0
  };
  approvalStatus: string | null = null;

  constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.insuranceService.claimInsurance(this.claim).subscribe(response => {
      console.log('API Response:', response); // Debugging line
      if (response.approved) { // Check the 'approved' field
        this.approvalStatus = 'Claim approved';
        this.snackBar.open('Claim successful', 'Close', { duration: 3000 });
      } else {
        this.approvalStatus = 'Claim not approved';
        this.snackBar.open('Claim denied', 'Close', { duration: 3000 });
      }
    }, error => {
      console.error('Error:', error); // Debugging line
      this.snackBar.open('Error processing claim', 'Close', { duration: 3000 });
    });
  }
}