import { Component } from '@angular/core';
import { SanphamService } from 'src/app/Services/Sanpham.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dssanpham',
  templateUrl: './dssanpham.component.html',
  styleUrls: ['./dssanpham.component.css']
})
export class DssanphamComponent {
  constructor(private sanphamService: SanphamService, httpClient:HttpClient) {}
  sanp:any=[];


  loadsanpham(){
    this.sanphamService.getSanpham().subscribe(
      (data) => {
        this.sanp = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit(){
    this.loadsanpham();
  }
  getonce(id: number) {
    this.sanphamService.getSanphamById(id).subscribe(
      (data: any) => {
        console.log(data);
        this.loadsanpham();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

   deleteSanpham(id: number) {
    if(confirm("ban co chac la muon xoa k")){
      this.sanphamService.deleteSanpham(id).subscribe(
        (data: any) => {
          console.log('Xóa sản phẩm thành công:', data);
          this.loadsanpham();
        },
        (error: any) => {
          console.error('Lỗi khi xóa sản phẩm:', error);
        }
      );
    }
  }
}
