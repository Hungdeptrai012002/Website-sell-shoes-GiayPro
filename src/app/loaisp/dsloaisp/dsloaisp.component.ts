import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dsloaisp',
  templateUrl: './dsloaisp.component.html',
  styleUrls: ['./dsloaisp.component.css'],
})
export class DsLoaispComponent {
  constructor(
    private dsloaispService: DsLoaispService,
    httpClient: HttpClient
  ) {}
  sps: any = [];

  loadloaisp() {
    this.dsloaispService.getLoaisp().subscribe(
      (data) => {
        this.sps = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
    this.loadloaisp();
  }
  getonce(id: number) {
    this.dsloaispService.getLoaispById(id).subscribe(
      (data: any) => {
        console.log(data);
        this.loadloaisp();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteLoaisp(id: number) {
    if (confirm('ban co chac la muon xoa k')) {
      this.dsloaispService.deleteLoaisp(id).subscribe(
        (data: any) => {
          console.log('Xóa loại sản phẩm thành công:', data);
          this.loadloaisp();
        },
        (error: any) => {
          console.error('Lỗi khi xóa loại sản phẩm:', error);
        }
      );
    }
  }
}
