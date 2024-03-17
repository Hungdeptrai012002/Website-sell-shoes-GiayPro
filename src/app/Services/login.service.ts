import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:3000'; // Thay đổi URL API tại đây
    constructor(private http: HttpClient) {}

    login(user_email: string, user_password: string): Observable<any> {
      const url = `${this.apiUrl}/user/login`;
      const body = { user_email, user_password };
      return this.http.post(url, body);
    }

    register(data: any): Observable<any> {
      const url = `${this.apiUrl}/user/user/register`;
      return this.http.post(url, data);
    }

}
