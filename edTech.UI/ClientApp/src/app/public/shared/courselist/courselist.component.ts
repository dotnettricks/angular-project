import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CartService } from 'src/app/services/cart.service';
import { CatalogService } from 'src/app/services/catalog.service';
import { environment } from 'src/environments/environment';
declare const $: any;

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styles: [
  ]
})
export class CourselistComponent implements OnInit {
  courses: Course[];
  imageServer: string;
  message: string;
  constructor(private catalogService: CatalogService, private cartService: CartService) {
    this.imageServer = environment.imageServer;
  }

  ngOnInit(): void {
    this.catalogService.GetCourses().subscribe(res => {
      if (res.status == 200 && res.body != null) {
        console.log(res.body);
        this.courses = res.body;
      }
    });
  }
  AddToCart(id: number, name: string, unitPrice: number, quantity: number, image: string) {
    this.cartService.addToCart(id, name, image, unitPrice, quantity);
    this.message = `<strong>${name}</strong> Added to Cart Successfully!`;

    $('#toastCart').toast('show');
    setTimeout(function () {
      $('#toastCart').toast('hide');
    }, 4000);
  }
}
