

import { response } from 'express';
import { Component } from '@angular/core';
import { SanphamService } from 'src/app/Services/Sanpham.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';


@Component({
  selector: 'app-editpro',
  templateUrl: './editsp.component.html'
})
export class EditproComponent {

  data: any[] = [];
  id: number = 0;

  loaisp: any;
  // selectedFile: any;

  imageSrc: any;
  myResult: any = {

  };
  constructor(
    private sanphamService: SanphamService,
    private route: ActivatedRoute,
    private router: Router,
    private loaispService: DsLoaispService,


  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getonceSanpham(this.id);
    this.getloaisp();

  }
  getonceSanpham(id: any) {
    this.sanphamService.getSanphamById(id).subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getloaisp() {
    this.loaispService.getLoaisp().subscribe(
      (data) => {
        this.loaisp = data;
        console.log(this.loaisp);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // selectedFile!: File; onFileChanged(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.sanphamService.uploadFile(this.selectedFile).subscribe(
        (response) => {
          this.myResult.anh = response.url;
          console.log('Upload successful', response);
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
    }
  }

  upfile(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  updateSanpham() {
    this.sanphamService.uploadFile(this.selectedFile).subscribe(
      response => {
        if (response.name)
          this.data[0].anh = response.name;
        this.sanphamService.updateSanpham(this.data[0]).subscribe(
          (response) => {
            console.log(alert('sửa thành công'), 'Update successful:', response);
            // Xử lý kết quả thành công ở đây
            this.router.navigate(['sanpham/getall']);
          },
          (error) => {
            console.error(alert('Có lỗi sảy ra !'), 'Update failed:', error);
          }
        );
      },
    );
  }

  selectedFile!: File; onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
