import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: ['body {margin-bottom: 0 !important; }']
})
export class PlayerComponent implements OnInit {
  videoUrl: string;
  constructor() { }

  ngOnInit(): void {
    this.videoUrl = 'https://www.youtube.com/embed/1lhUlBvEGvs';
  }
  playVideo(url) {
    this.videoUrl = url;
  }

}
