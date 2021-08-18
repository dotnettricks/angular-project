import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  user: User | undefined;
  cart: Cart;
  constructor(private authService: AuthService, private router: Router, private cartService: CartService) {
    this.user = this.authService.user;
    console.log(this.user);
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }
  logOut() {
    this.authService.RemoveAuthUser();
    this.user = this.authService.user;
    return this.router.navigate(['/login']);
  }
}
