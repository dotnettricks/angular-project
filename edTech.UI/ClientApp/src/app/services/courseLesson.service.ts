import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { CourseLesson } from '../models/courseLesson';

@Injectable({ providedIn: 'root' })
export class CourseLessonService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
      this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetLessons(): Observable<HttpResponse<CourseLesson[]>> {
    return this.httpClient.get<CourseLesson[]>(environment.apiAddress + '/courselesson/getall', { headers: this.httpHeaders, observe: 'response' });
  }
  AddLesson(course: CourseLesson): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/courselesson/add', JSON.stringify(course), { headers: this.httpHeaders, observe: 'response' });
  }
}
