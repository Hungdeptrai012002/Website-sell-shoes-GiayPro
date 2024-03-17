import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NccService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = `http://localhost:3000/ncc`; // Thay đổi URL API tại đây

  constructor(private http: HttpClient) { }

  getNcc(): Observable<any> {
    const url = `${this.apiUrl}/getall`;
    return this.http.get(url);
  }


  getNccById(id: number): Observable<any> {
    const url = `${this.apiUrl}/get-once/${id}`;
    return this.http.get(url);
  }

    postNcc(data:any): Observable<any> {
    const url = `${this.apiUrl}/create`;
    return this.http.post(url,data);
  }

   deleteNcc(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.get(url);
  }

  updateNcc(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/edit/${id}`;
    return this.http.post(url, data);
  }


}
