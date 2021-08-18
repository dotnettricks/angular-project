import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseTopic } from 'src/app/models/courseTopic';
import { CourseTopicService } from 'src/app/services/courseTopic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styles: [
  ]
})
export class TopicsComponent implements OnInit {
  courseId: number | undefined;
  topics: CourseTopic[] | undefined;
  constructor(private topicService: CourseTopicService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.topicService.GetAllTopics().subscribe(res => {
      if (res.status == 200 && res.body != null) {
        this.topics = res.body;
      }
    });
  }
  deleteTopic(id:number){

  }
}
