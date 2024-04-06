import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
// Import a service for sending the OTP (you'll create this later)
import { OtpService } from '../services/otp.service';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatInput,
    NgIf
  ],
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent {
  otpForm = this.fb.group({
    phone: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder, private otpService: OtpService) {}

  onSendOTP() {
    if (this.otpForm.valid) {
      this.otpService.sendOtp(this.otpForm.value.phone).subscribe({
        next: (response: any) => {
          console.log('OTP sent successfully', response);
          // Navigate to verify-otp component or show a message
        },
        error: (error: any) => {
          console.error('Error sending OTP', error);
        }
      });
    }
  }
}
