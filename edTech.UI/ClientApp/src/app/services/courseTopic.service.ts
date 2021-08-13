import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { CourseTopic } from '../models/courseTopic';

@Injectable({ providedIn: 'root' })
export class CourseTopicService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient, private authService: AuthService) {
      this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetTopics(): Observable<HttpResponse<CourseTopic[]>> {
    return this.httpClient.get<CourseTopic[]>(environment.apiAddress + '/coursetopic/getall', { headers: this.httpHeaders, observe: 'response' });
  }
  AddTopic(course: CourseTopic): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/coursetopic/add', JSON.stringify(course), { headers: this.httpHeaders, observe: 'response' });
  }
}
