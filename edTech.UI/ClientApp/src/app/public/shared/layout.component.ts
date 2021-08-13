import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {
  route: string = '';
  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = '';
      }
    });
  }

  ngOnInit(): void {
  }

}
