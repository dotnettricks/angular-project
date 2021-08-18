import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class CourseService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
      this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetCourses(): Observable<HttpResponse<Course[]>> {
    return this.httpClient.get<Course[]>(environment.apiAddress + '/course/getall', { headers: this.httpHeaders, observe: 'response' });
  }
  AddCourse(course: Course): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/course/add', JSON.stringify(course), { headers: this.httpHeaders, observe: 'response' });
  }
}
