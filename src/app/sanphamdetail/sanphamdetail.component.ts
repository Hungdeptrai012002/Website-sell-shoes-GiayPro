import { HomeService } from './../Services/Home.service';

import { Component } from '@angular/core';
import { SanphamService } from 'src/app/Services/Sanpham.service';
import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';
import {ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-sanphamdetail',
  templateUrl: './sanphamdetail.component.html',
  styleUrls: ['./sanphamdetail.component.css']
})
export class SanphamdetailComponent {
  id!: number;
  selectedFile!: File;
  Sanpham: any;
  loaisp:any;
  carts: any = this.homeService.getcarts();

  constructor(
    private sanphamService: SanphamService,
    private router: Router,
    private route: ActivatedRoute,
    private dsloaispService: DsLoaispService,
    private homeService:HomeService,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadSanPhamById();
      this.loaddata();
    });
  }




  loaddata() {
    this.dsloaispService.getLoaisp().subscribe(
      (data) => {
        this.loaisp = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
loadSanPhamById() {
    this.sanphamService.getSanphamById(this.id).subscribe(data => {
      this.Sanpham = data;
    });
  }
  goToctsp(id: number) {
    this.router.navigate(['/ctsp', id]);
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
