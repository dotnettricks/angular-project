import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseLesson } from '../models/courseLesson';

@Injectable({ providedIn: 'root' })
export class CourseLessonService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetLessonsByTopic(topicId: number): Observable<HttpResponse<CourseLesson[]>> {
    return this.httpClient.get<CourseLesson[]>(environment.apiAddress + '/courselesson/getlessonsbytopic/' + topicId, { headers: this.httpHeaders, observe: 'response' });
  }
  AddLesson(lesson: CourseLesson): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/courselesson/add', JSON.stringify(lesson), { headers: this.httpHeaders, observe: 'response' });
  }
}
