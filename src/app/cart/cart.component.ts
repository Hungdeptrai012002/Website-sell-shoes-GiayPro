import {  HomeService } from '../Services/Home.service';
import { Component } from '@angular/core';
import { SanphamService } from 'src/app/Services/Sanpham.service';
import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts: any = [];
  totalsl: number=this.HomeService.getcartsl();
  totalprice: number=this.HomeService.getTotalPrice();
  constructor(private HomeService: HomeService,
    private router:Router)
   {}
  ngOnInit(): void {
    this.carts = this.HomeService.getcarts();
  }
  subtotal(cart: any) {
    return cart.soluong * cart.giaban;
  }
  updatesl(idx: number, ev: any) {
    let sl = ev.target.value;
    sl = sl > 0 ? sl : 1;
    ev.target.value = sl;
    this.carts[idx].soluong = sl;
    this.HomeService.savecart(this.carts);
    this.totalsl=this.HomeService.getcartsl();
    this.totalprice=this.HomeService.getTotalPrice();
  }
  xoa(idx: number) {
    if (confirm('bạn có chắc muốn xoá khỏi giỏ hàng không')) {
      this.carts.splice(idx, 1);
      this.HomeService.savecart(this.carts);
    }

  }
  xoaall() {
    if(confirm("bạn có chắc muốn xoá khỏi giỏ hàng không")){
      sessionStorage.clear();
    }


  }

}
