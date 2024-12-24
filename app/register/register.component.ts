import { Component } from '@angular/core';
import { InsuranceService } from '../insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private insuranceService: InsuranceService, private snackBar: MatSnackBar, private router: Router) { }

  onSubmit() {
    this.insuranceService.registerUser(this.user).subscribe(response => {
      this.snackBar.open('Registration successful', 'Close', { duration: 3000 });
      this.router.navigate(['/login']);
    }, error => {
      this.snackBar.open('Error during registration', 'Close', { duration: 3000 });
    });
  }
}



  