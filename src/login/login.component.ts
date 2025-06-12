import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { finalize } from 'rxjs/operators';

interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
  };
}

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
  isLoading = false;
  errorMessage: string | null = null;
  passwordVisible = false;

  // ✅ Added to fix template error
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = null;

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;

    const credentials = {
      email: this.loginForm.value.usernameOrEmail,
      password: this.loginForm.value.password
    };

    this.authService.login(credentials)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (response: LoginResponse) => this.handleLoginSuccess(response),
        error: (err: any) => this.handleLoginError(err)
      });
  }

  private handleLoginSuccess(response: LoginResponse): void {
    if (this.loginForm.value.rememberMe) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('rememberMe', 'true');
      if (response.user) {
        localStorage.setItem('userData', JSON.stringify(response.user));
      }
    } else {
      sessionStorage.setItem('authToken', response.token);
    }
    this.router.navigate(['/home']);
  }

  private handleLoginError(err: any): void {
    console.error('Login error:', err);
    this.errorMessage = this.getErrorMessage(err);
  }

  private getErrorMessage(err: any): string {
    if (err.error?.message) {
      return err.error.message;
    }
    switch (err.status) {
      case 0: return 'Network error. Please check your internet connection.';
      case 400: return 'Invalid request. Please check your input.';
      case 401: return 'Invalid credentials. Please try again.';
      case 500: return 'Server error. Please try again later.';
      default: return 'Login failed. Please try again.';
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  get passwordControl(): AbstractControl {
    return this.loginForm.get('password') as AbstractControl;
  }
}
