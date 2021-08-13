import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cart: Cart;
  user: User;
  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.user = this.authService.user;
  }
  checkOut() {
    if (this.user.id > 0) {
      this.cart.userId=this.user.id;
      this.cartService.saveCartToDB(this.cart).subscribe(res=>{
        if (res.status == 200 && res.body == true) {
          this.router.navigate(['payment']);
        }
      });
    }
    else {
      this.router.navigate(['/login']);
    }
  }
  DeleteItem(itemId: number) {
    this.cartService.deleteFromCart(itemId);
  }
}
