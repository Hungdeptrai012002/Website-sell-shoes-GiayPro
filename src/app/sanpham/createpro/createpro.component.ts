import { DsLoaispService } from './../../Services/Dsloaisp.service';
import { Component } from '@angular/core';
import { response } from 'express';

import { Router } from '@angular/router';
import { SanphamService } from 'src/app/Services/Sanpham.service';

@Component({
  selector: 'app-createpro',
  templateUrl: './createpro.component.html',
  styleUrls: ['./createpro.component.css']
})
export class CreateproComponent {
  sanpham: any[] = [];
  loaisp: any[]=[];
  ncc:any[]=[];
  myResult: any = {
    id_loai: '',
    id_ncc:'',
    anh:'',
    ten: '',
    mota:'',
    giaban:'',
    giakm:'',
    soluong: '',
    ghichu:'',
    trangthai:'',
  };
  constructor(private sanphamService: SanphamService, private router: Router, private DsloaispService:DsLoaispService) { }
  ngOnInit(): void {

    this.DsloaispService.getLoaisp().subscribe(
      (data) => {
        this.loaisp = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // addSanpham(): void {
  //   this.sanphamService.postSanpham(this.myResult).subscribe(
  //     (response) => {
  //       console.log(alert('Thêm thành công'), 'Product added successfully', response);
  //       this.router.navigate(['/admin/sanpham']);
  //     },
  //     (error) => {
  //       console.error('Error adding product:', error);
  //       // Handle error scenario
  //     }
  //   );
  // }

  selectedFile!: File; onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addsanpham() {
    this.sanphamService.uploadFile(this.selectedFile).subscribe(
      response => {
        console.log(response);
        this.myResult.anh = response.name;
        this.sanphamService.postSanpham(this.myResult).subscribe(Response => {
          alert("thêm sản phẩm thành công !");
          this.router.navigate(['sanpham/getall']);
        })
      },
    );
  }

}



// import { response } from 'express';
// import { Component, OnInit } from '@angular/core';
// import { SanphamService } from 'src/app/Services/Sanpham.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-createpro',
//   templateUrl: './createpro.component.html',
//   styleUrls: ['./createpro.component.css']
// })
// export class CreateproComponent implements OnInit{
//   sanpham: any[] = [];
//   selectedFile!: File;
//   myResult: any = {
//     ten: '',
//     anh: '',
//     mota: '',
//     giaban: '',
//     soluong: '',
//     id_loai: '',
//     id_ncc: '',

//   };
//   constructor(private sanphamService: SanphamService, private router: Router) {}

//   ngOnInit(): void {
//     this.sanphamService.getSanpham().subscribe(
//       (data) => {
//         this.sanpham = data;
//         console.log(data);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }

//   addSanpham(): void {
//     this.sanphamService.postSanpham(this.myResult).subscribe(
//       (response) => {
//         console.log('Product added successfully',response );
//         this.router.navigate(['sanpham/getall']);
//       },
//       (error) => {
//         console.error('Error adding product:', error);
//         // Handle error scenario
//       }
//     );
//   }

//   onFileChanged(event: Event) {
//     const inputElement = event.target as HTMLInputElement;
//     if (inputElement.files && inputElement.files.length > 0) {
//       this.selectedFile = inputElement.files[0];
//     }
//   }
// }
