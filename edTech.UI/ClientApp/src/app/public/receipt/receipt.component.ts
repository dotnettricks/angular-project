import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RECEIPT_ID } from 'src/app/app.constant';
import { Receipt } from 'src/app/models/receipt';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styles: []
})
export class ReceiptComponent implements OnDestroy {
  receipt: Receipt;
  constructor(private router: Router, private utilService: UtilService) {
    let encdata = localStorage.getItem(RECEIPT_ID);
    if (encdata != undefined) {
      this.receipt = this.utilService.Decrypt(encdata);
    }
    else
      this.router.navigate(['/notfound']);
  }
  ngOnDestroy() {
    localStorage.removeItem(RECEIPT_ID);
  }
}
