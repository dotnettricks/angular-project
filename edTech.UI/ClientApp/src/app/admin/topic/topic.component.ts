import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseTopicService } from 'src/app/services/courseTopic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styles: [
  ]
})
export class TopicComponent implements OnInit {
  topicForm: FormGroup;
  constructor(private fb: FormBuilder, private topicService: CourseTopicService, private router: Router,) {
    this.topicForm = this.fb.group({
      id: [0],
      topicName: [null, Validators.required],
      isActive: [null, [Validators.required]],
      sequence: [null, [Validators.required]],
      courseId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    
  }
  saveData() {
    if (this.topicForm.valid) {
      console.log(this.topicForm.value);
      this.topicService.AddTopic(this.topicForm.value).subscribe(res => {
        if (res.status == 201) {
          this.router.navigate(['/admin/topics']);
        }
      });
    }
   }
}