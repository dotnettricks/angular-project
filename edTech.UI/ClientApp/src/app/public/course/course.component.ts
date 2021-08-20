import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CartService } from 'src/app/services/cart.service';
import { CatalogService } from 'src/app/services/catalog.service';
declare const $: any;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {
  name: string | undefined;
  course: Course | undefined;
  message: string;
  constructor(private route: ActivatedRoute, private catalogService: CatalogService,private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.catalogService.GetCourseWithLessons(this.name).subscribe(res => {
        if (res.status == 200)
          this.course = res.body;
          console.log(this.course);
      });
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

  BuyNow(id: number, name: string, unitPrice: number, quantity: number, image: string) {
    this.cartService.addToCart(id, name, image, unitPrice, quantity);
    this.router.navigate(['/cart']);
  }
}
