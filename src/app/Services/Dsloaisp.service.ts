import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DsLoaispService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = `http://localhost:3000/loaisp`; // Thay đổi URL API tại đây

  constructor(private http: HttpClient) { }

  getLoaisp(): Observable<any> {
    const url = `${this.apiUrl}/getall`;
    return this.http.get(url);
  }


  getLoaispById(id: number): Observable<any> {
    const url = `${this.apiUrl}/get-once/${id}`;
    return this.http.get(url);
  }

    postLoaisp(data:any): Observable<any> {
    const url = `${this.apiUrl}/create`;
    return this.http.post(url,data);
  }

   deleteLoaisp(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.get(url);
  }

  updateLoaisp(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/edit/${id}`;
    return this.http.post(url, data);
  }


}
