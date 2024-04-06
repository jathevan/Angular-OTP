import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
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
    MatCardContent,
    MatCardTitle,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatInput
  ],
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  verifyOtpForm = this.fb.group({
    otp: ['', [Validators.required, Validators.minLength(6)]]
  });



  constructor(private fb: FormBuilder) {}
  ngOnInit() {}


  onVerifyOTP() {
    if (this.verifyOtpForm.valid) {
      console.log('OTP to verify:', this.verifyOtpForm.value.otp);
      // Implement the logic to call your backend service here
    }
  }
}
