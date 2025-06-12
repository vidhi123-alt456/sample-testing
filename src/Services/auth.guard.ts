import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.verifyToken().pipe(
      map(isValid => {
        if (!isValid) {
          this.authService.logout();
          return this.router.createUrlTree(['/login']);
        }
        return true;
      }),
      catchError(() => {
        this.authService.logout();
        return of(this.router.createUrlTree(['/login']));
      })
    );
  }
}
