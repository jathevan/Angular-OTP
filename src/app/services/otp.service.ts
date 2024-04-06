import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AbstractControl, ValidationErrors, ValidatorFn, ɵElement, ɵValue} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http: HttpClient) { }

  sendOtp(phone: ɵValue<ɵElement<(string | (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[])[], null>> | undefined) {
    // Replace the URL with your backend endpoint for sending OTP
    return this.http.post('/api/send-otp', { phone });
  }

  verifyOtp(otp: string) {
    // Replace the URL with your backend endpoint for verifying OTP
    return this.http.post('/api/verify-otp', { otp });
  }
}
