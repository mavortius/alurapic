import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { environment } from '../../../environments/environment';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) {
  }

  checkUserNameTaken(userName: string) {
    return this.http.get(`${environment.apiUrl}/user/exists/${userName}`);
  }

  signup(newUser: NewUser) {
    return this.http.post(`${environment.apiUrl}/user/signup`, newUser);
  }
}
