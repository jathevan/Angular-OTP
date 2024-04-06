import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatButton,
    MatInput
  ],
  styleUrls: ['./verify-otp.component.css']
})

export class VerifyOtpComponent implements OnInit {
  verifyOtpForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.verifyOtpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onVerifyOTP() {
    if (this.verifyOtpForm.valid) {
      // Assuming you have a service method to verify the OTP
      // this.otpService.verifyOtp(this.verifyOtpForm.value).subscribe(...);
      console.log('OTP to verify:', this.verifyOtpForm.value.otp);
      // Implement the logic to call your backend service here
    }
  }
}
