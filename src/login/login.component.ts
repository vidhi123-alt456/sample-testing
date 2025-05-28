import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z](?=(?:.*[a-z]){3,})(?=.*[!@#$%^&*])/)
        ]
      ],
      rememberMe: [false]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {

      this.router.navigate(['/home']);
    }
  }
}
