import { HomeService } from './../../Services/Home.service';
import { SanphamService } from 'src/app/Services/Sanpham.service';



import { HttpClient } from '@angular/common/http';
import { DsLoaispService } from 'src/app/Services/Dsloaisp.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';



@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.css',
]
})
export class LayoutHomeComponent implements OnInit{


  constructor(private dsloaispService: DsLoaispService,private sanphamService:SanphamService, httpClient:HttpClient,private HomeService:HomeService) {}
  lsp:any=[];
  sanpham: any;
  totalsl: number=this.HomeService.getcartsl();
  totalprice: number=this.HomeService.getTotalPrice();
  loadloaisp(){
    this.dsloaispService.getLoaisp().subscribe(
      (data) => {
        this.lsp = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  loadsanpham() {
    this.sanphamService.getSanpham().subscribe(
      (data) => {
        this.sanpham = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(){
    this.loadloaisp();
    this.loadsanpham();
  }


  ngAfterViewInit(): void {

    const mainscript = document.createElement('script');
    mainscript.src = "assets/home/js/main.js";
    document.body.appendChild(mainscript);
  }
}
