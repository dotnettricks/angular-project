import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { CourseTopicService } from 'src/app/services/courseTopic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styles: [
  ]
})
export class TopicComponent implements OnInit {
  topicForm: FormGroup;
  courses: Course[];
  constructor(private fb: FormBuilder, private topicService: CourseTopicService, private router: Router, private courseService: CourseService) {
    this.topicForm = this.fb.group({
      id: [0],
      topicName: [null, Validators.required],
      isActive: [true, [Validators.required]],
      sequence: [null, [Validators.required]],
      courseId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.courseService.GetCourses().subscribe(res => {
      if (res.status == 200 && res.body != null) {
        this.courses = res.body;
      }
    });
  }
  saveData() {
    if (this.topicForm.valid) {
      this.topicService.AddTopic(this.topicForm.value).subscribe(res => {
      console.log(res);
        if (res.status == 201) {
          this.router.navigate(['/admin/topics']);
        }
      });
    }
  }
}