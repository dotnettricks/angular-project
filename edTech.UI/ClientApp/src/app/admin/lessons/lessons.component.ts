import { Component, OnInit } from '@angular/core';
import { CourseLesson } from '../../models/courseLesson';
import { CourseLessonService } from '../../services/courseLesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styles: [
  ]
})
export class LessonsComponent implements OnInit {
  courseLessons: CourseLesson[] | undefined;
  constructor(private courseLessonService: CourseLessonService) {

  }

  ngOnInit() {
    this.courseLessonService.GetLessons().subscribe(res => {
      if (res.status == 200 && res.body != null) {
        this.courseLessons = res.body;
      }
    });
  }

  deleteLesson(id: number) {

  }
}
