import { Component } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar, private router: Router) { }

  onSubmit() {
    this.insuranceService.loginUser(this.user).subscribe(response => {
      if (response) {
        this.snackBar.open('Login successful', 'Close', { duration: 3000 });
        // this.router.navigate(['./buy-insurance/buy-insurance.component']);
        this.router.navigate(['/buy-insurance']);
      } else {
        this.snackBar.open('Invalid credentials', 'Close', { duration: 3000 });
      }
    }, error => {
      this.snackBar.open('Error during login', 'Close', { duration: 3000 });
    });
  }
}
