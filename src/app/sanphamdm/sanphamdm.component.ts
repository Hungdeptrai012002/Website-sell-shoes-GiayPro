import { HomeService } from '../Services/Home.service';
import { Component } from '@angular/core';
import { SanphamService } from 'src/app/Services/Sanpham.service';
import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sanphamdm',
  templateUrl: './sanphamdm.component.html',
  styleUrls: ['./sanphamdm.component.css']
})
export class SanphamdmComponent {

id!: number;
Sanpham:any=[];
Loaisp:any=[];
p: number = 1; // Trang hiện tại

constructor(private router: Router, private ActivatedRoute:ActivatedRoute, private HomeService:HomeService){
}
carts: any = this.HomeService.getcarts();
ngOnInit(): void {
  this.ActivatedRoute.params.subscribe(params => {
    this.id = +params['id'];
    this.loadSanPhamdm();

  });
}



loadSanPhamdm() {
  this.HomeService.getSanpham(this.id).subscribe(data => {
    this.Sanpham = data;
  });
  this.HomeService.getLoaispById(this.id).subscribe(data => {
    this.Loaisp = data;
  });
}

goTosanphamdm(id: number) {
  this.router.navigate(['/spdm', id]);
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
  this.HomeService.savecart(this.carts);
confirm('thêm thành công')

}

}
