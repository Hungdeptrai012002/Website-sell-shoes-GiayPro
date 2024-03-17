import { Component } from '@angular/core';
import { response } from 'express';
import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  loaisp: any[] = [];
  myResult: any = {
    tenloai: '',
    trangthai: 1,
  };
  constructor(private dsloaispService: DsLoaispService, private router: Router) {}

  ngOnInit(): void {
    this.dsloaispService.getLoaisp().subscribe(
      (data) => {
        this.loaisp = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addLoaisp(): void {
    this.dsloaispService.postLoaisp(this.myResult).subscribe(
      (response) => {
        console.log(alert('Thêm thành công'),'Product added successfully',response );
        this.router.navigate(['loaisp/getall']);
      },
      (error) => {
        console.error('Error adding product:', error);
        // Handle error scenario
      }
    );
  }

}
