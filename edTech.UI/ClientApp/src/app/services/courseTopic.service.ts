import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { CourseTopic } from '../models/courseTopic';

@Injectable({ providedIn: 'root' })
export class CourseTopicService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetTopicsByCourse(id: number): Observable<HttpResponse<CourseTopic[]>> {
    return this.httpClient.get<CourseTopic[]>(environment.apiAddress + '/coursetopic/gettopicsbycourse/' + id, { headers: this.httpHeaders, observe: 'response' });
  }
  AddTopic(topic: CourseTopic): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/coursetopic/add', JSON.stringify(topic), { headers: this.httpHeaders, observe: 'response' });
  }
}
