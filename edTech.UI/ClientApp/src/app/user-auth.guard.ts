import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean {
    console.log(this.authService.user);
    if (this.authService.user == undefined) {
      this.router.navigate(['login']);
      return true;
    }
    else if (this.authService.user.roles?.indexOf('User') != -1) {
      return true;
    }
    else {
      this.router.navigate(['unauthorize']);
      return true;
    }
  }
}
