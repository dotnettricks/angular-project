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
  //user: User;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
   // this.user = this.authService.user;
    // if (this.user != null)
    //   this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json', 'Authorization': 'Bearer ' + this.user.token });
    // else
      this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetCourses(): Observable<HttpResponse<Course[]>> {
    return this.httpClient.get<Course[]>(environment.apiAddress + '/course/getcourses', { headers: this.httpHeaders, observe: 'response' });
  }
  AddCourse(course: Course): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/course/addcourse', JSON.stringify(course), { headers: this.httpHeaders, observe: 'response' });
  }
}
