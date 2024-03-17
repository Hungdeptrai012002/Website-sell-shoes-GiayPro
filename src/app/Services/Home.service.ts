import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = `http://localhost:3000/home`; // Thay đổi URL API tại đây
  constructor(private http: HttpClient) { }
  getSanpham(id: number): Observable<any> {
    const url = `${this.apiUrl}/spdm/${id}`;
    return this.http.get(url);
  }
  getLoaispById(id: number): Observable<any> {
    const url = `${this.apiUrl}/get-once/${id}`;
    return this.http.get(url);
  }
  getcarts() {
    let cartJson = sessionStorage.getItem('cart');
    if (cartJson) {
      return JSON.parse(cartJson);
    }
    else {
      return [];
    }
  }
  savecart(carts: any) {
    let cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }
  getTotalPrice(): number {
    let carts:any = this.getcarts();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.soluong * item.giaban;
    });
    return total ;
  }
  getcartsl() {
    let carts:any = this.getcarts();
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.soluong;
    });
    return total ;
  }

}
