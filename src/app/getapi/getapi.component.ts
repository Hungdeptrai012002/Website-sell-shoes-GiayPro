import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent {
  khoilop:any;
  constructor (private httpClient:HttpClient){}
  ngOnInit(){
    this.httpClient.get('http://localhost:808/data.json').subscribe(response=>{
      this.khoilop = response;
    });
  }
}
