
import { CART_ID } from '../app.constant';
import { UtilService } from '../services/util.service';

export class Cart {
  id: string;
  items: any;
  total: number;
  tax: number;
  grandTotal: number;
  userId: number;
  createdDate: string;
  constructor() {
    this.id = this.getCartId();
    this.items = [];
    this.total = 0;
    this.grandTotal = 0;
    this.tax = 0;
  }
  getCartId() {
    let id = undefined;
    let cid = localStorage.getItem(CART_ID);
    if (cid == undefined) {
      id = UtilService.GenerateGUID();
      localStorage.setItem(CART_ID, id);
    }
    else {
      id = cid;
    }
    return id;
  }
}
