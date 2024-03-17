
import { DsLoaispService } from './../../Services/Dsloaisp.service';

import { response } from 'express';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent {

  id!:number

  myResult: any = {
    tenloai: '',
    trangthai: 1,

  };
  constructor(private dsLoaispService: DsLoaispService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params['id'];

    });
    this.dsLoaispService.getLoaispById(this.id).subscribe(
      (data) => {
        this.myResult = data[0];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateLoaisp(): void {
    this.dsLoaispService.updateLoaisp(this.id,this.myResult).subscribe(
      (response) => {
        console.log(response );
        this.router.navigate(['loaisp/getall']);
      },
      (error) => {
        console.error('Error adding product:', error);
        // Handle error scenario
      }
    );
  }
}
