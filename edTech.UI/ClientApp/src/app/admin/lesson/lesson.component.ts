import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseLesson } from 'src/app/models/courseLesson';
import { CourseLessonService } from '../../services/courseLesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styles: [
  ]
})
export class LessonComponent implements OnInit {
  lessonForm: FormGroup;
  topicId: number | undefined;
  constructor(private fb: FormBuilder, private lessonService: CourseLessonService, private route: ActivatedRoute, private router: Router) {
    this.lessonForm = this.fb.group({
      id: [0],
      lessonName: [null, Validators.required],
      contentPath: [null],
      videoPath: [null, Validators.required],
      duration: [null, Validators.required],
      isActive: [true, [Validators.required]],
      isPreview: [false, [Validators.required]],
      sequence: [null, [Validators.required]],
      courseTopicId: [this.topicId]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topicId = params.topicid;
    })
  }
  saveData() {
    var lesson: CourseLesson = this.lessonForm.value;
    lesson.courseTopicId = this.topicId;
    if (this.lessonForm.valid) {
      this.lessonService.AddLesson(lesson).subscribe(res => {
        if (res.status == 201) {
          this.router.navigate(['/admin/topic', this.topicId, 'lessons']);
        }
      });
    }
  }
}
