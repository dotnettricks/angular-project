import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: ['body {margin-bottom: 0 !important; }']
})
export class PlayerComponent implements OnInit {
  videoUrl: string;
  name: string | undefined;
  course: Course | undefined;
  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit(): void {
    // this.videoUrl = 'https://www.youtube.com/embed/1lhUlBvEGvs';
    this.route.params.subscribe(params => {
      this.name = params.name;
      this.catalogService.GetCourseWithLessons(this.name).subscribe(res => {
        if (res.status == 200) {
          this.course = res.body;
          this.videoUrl = this.course.demoUrl;
        }
      });
    });
  }
  playVideo(url) {
    this.videoUrl = url;
  }
}
