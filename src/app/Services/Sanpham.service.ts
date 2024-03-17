import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SanphamService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = `http://localhost:3000/sanpham`; //



  constructor(private http: HttpClient) { }

  getSanpham(): Observable<any> {
    const url = `${this.apiUrl}/getall`;
    return this.http.get(url);
  }
  getLimitedProducts(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?limit=${limit}`);
  }

  getSanphamById(id: number): Observable<any> {
    const url = `${this.apiUrl}/get-once/${id}`;
    return this.http.get(url);
  }

  postSanpham(data:any): Observable<any> {
    const url = `${this.apiUrl}/create`;
    return this.http.post(url,data);
  }

   deleteSanpham(id: number): Observable<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.get(url);
  }

  updateSanpham(data: any): Observable<any> {
    const url = `${this.apiUrl}/edit`;
    return this.http.post(url, data);
  }
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const url = `${this.apiUrl}/upload`;
    return this.http.post<any>(url, formData);
  }



}
