import { Component } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-estimate-insurance',
  standalone:false,
  templateUrl: './estimate-insurance.component.html',
  styleUrls: ['./estimate-insurance.component.css']
})
export class EstimateInsuranceComponent {
  type = '';
  vehicleModel = '';
  estimate: number | null = null;

  constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.insuranceService.estimateInsurance(this.type, this.vehicleModel).subscribe(response => {
      this.estimate = response;
      this.snackBar.open(`Estimated Premium: ${this.estimate}`, 'Close', { duration: 3000 });
    }, error => {
      this.snackBar.open('Error estimating insurance', 'Close', { duration: 3000 });
    });
  }
}
