import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    if (credentials.email === 'test@example.com' && credentials.password === 'Password@123') {
      return of({
        token: 'dummy-jwt-token',
        user: {
          id: '1',
          email: credentials.email
        }
      });
    } else {
      return throwError(() => ({
        status: 401,
        error: { message: 'Invalid credentials' }
      }));
    }
  }

  // ✅ Added to support AuthGuard
  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    // Dummy token verification logic — replace with real backend call if needed
    return of(!!token);
  }

  // ✅ Added to support logout on failed verification
  logout(): void {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('rememberMe');
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('authToken') || sessionStorage.getItem('authToken'));
  }
}

