import { HomeService } from '../../Services/Home.service';
import { HttpClient } from '@angular/common/http';

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SanphamService } from 'src/app/Services/Sanpham.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor( httpClient:HttpClient, private sanphamService:SanphamService, private homeService:HomeService) {}
  pro:any=[];
  limit = 12;
  carts: any = this.homeService.getcarts();

  loadsp(){
    this.sanphamService.getSanpham().subscribe(
      (data) => {
        this.pro = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  ngOnInit(){

    this.loadsp();

  }
  addcart(Sanpham: any) {
    let idx = this.carts.findIndex((pro: any) => {
      return pro.id == Sanpham.id
    });
    if (idx >= 0) {
      this.carts[idx].soluong += 1;
    }
    else {
      let cartItem: any = {
        id: Sanpham.id,
        anh: Sanpham.anh,
        ten: Sanpham.ten,
        giaban: Sanpham.giaban ,
        soluong: 1,
        subtotal: function () {
          return Sanpham.giaban * this.soluong;
        }
      }
      this.carts.push(cartItem);
    }

    // lưu vào stroread
    this.homeService.savecart(this.carts);
    confirm('thêm thành công')

  }
}
