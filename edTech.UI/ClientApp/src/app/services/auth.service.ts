import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserSignup } from '../models/usersignup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { User } from '../models/user';
import { UtilService } from './util.service';
import { AUTH_ID } from '../app.constant';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user: User | undefined;
    httpHeaders: HttpHeaders;
    constructor(private httpClient: HttpClient, private utilService: UtilService) {
        this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
        this.LoadAuthUser();
    }
    private LoadAuthUser() {
        const encData = localStorage.getItem(AUTH_ID);
        if (encData !== undefined && encData !== null) {
            this.user = this.utilService.Decrypt(encData);
        } else {
            this.user = undefined;
        }
    }

    UserSignUp(model: UserSignup): Observable<HttpResponse<any>> {
        return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + "/auth/CreateUser", JSON.stringify(model), { headers: this.httpHeaders, observe: 'response' });
    }

    ValidateUser(model: Login): Observable<HttpResponse<User>> {
        return this.httpClient.post<User>(environment.apiAddress + "/auth/ValidateUser", JSON.stringify(model), { headers: this.httpHeaders, observe: 'response' });
    }

    SetAuthUser(user: User) {
        let encData = this.utilService.Encrypt(user);
        localStorage.setItem(AUTH_ID, encData);
        this.LoadAuthUser();
    }

    RemoveAuthUser() {
        const data = localStorage.getItem(AUTH_ID);
        if (data !== undefined && data !== null) {
            localStorage.removeItem(AUTH_ID);
            this.user = undefined;
        } else {
            this.user = undefined;
        }
        this.LoadAuthUser();
    }
}