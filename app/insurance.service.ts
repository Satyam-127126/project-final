import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private apiUrl = 'http://localhost:2024/api/insurance';
  private userUrl = 'http://localhost:2024/api/user';

  constructor(private http: HttpClient) { }

  buyInsurance(policy: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/buy`, policy);
  }

  renewInsurance(policyNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/renew`, null, { params: { policyNumber } });
  }

  estimateInsurance(type: string, vehicleModel: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/estimate`, { params: { type, vehicleModel } });
  }

  claimInsurance(claim: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/claim`, claim);
  }

  getClaimStatus(policyNumber: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/claim/status`, { params: { policyNumber } });
  }

  approveClaim(claimId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/claim/approve`, null, { params: { claimId: claimId.toString() } });
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.userUrl}/register`, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.userUrl}/login`, user);
  }
}