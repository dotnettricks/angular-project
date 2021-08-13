import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetCourses(): Observable<HttpResponse<Course[]>> {
    return this.httpClient.get<Course[]>(environment.apiAddress + '/catalog/getcourses', { headers: this.httpHeaders, observe: 'response' });
  }
}
