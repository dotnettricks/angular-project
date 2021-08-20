import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [
  ]
})
export class CourseComponent implements OnInit {
  name: string | undefined;
  course: Course | undefined;
  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.catalogService.GetCourseWithLessons(this.name).subscribe(res => {
        if (res.status == 200)
          this.course = res.body;
      });
    });
  }
}
