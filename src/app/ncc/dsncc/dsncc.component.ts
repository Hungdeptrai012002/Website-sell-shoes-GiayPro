import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NccService } from 'src/app/Services/Nhacc.service';

@Component({
  selector: 'app-dsncc',
  templateUrl: './dsncc.component.html',
  styleUrls: ['./dsncc.component.css']
})
export class DsnccComponent {
  constructor(
    private nccService: NccService,
    httpClient: HttpClient
  ) {}
  ncc: any = [];

  loadncc() {
    this.nccService.getNcc().subscribe(
      (data) => {
        this.ncc = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnInit() {
    this.loadncc();
  }
  getonce(id: number) {
    this.nccService.getNccById(id).subscribe(
      (data: any) => {
        console.log(data);
        this.loadncc();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteNcc(id: number) {
    if (confirm('ban co chac la muon xoa k')) {
      this.nccService.deleteNcc(id).subscribe(
        (data: any) => {
          console.log('Xóa loại sản phẩm thành công:', data);
          this.loadncc();
        },
        (error: any) => {
          console.error('Lỗi khi xóa loại sản phẩm:', error);
        }
      );
    }
  }
}
