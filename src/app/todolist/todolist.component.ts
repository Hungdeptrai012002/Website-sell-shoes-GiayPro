import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todo = ['nau com', 'quet nha', 'rua bat', 'di lam'];
  todoj = [{'id':'1','name':'hung','age':'21'},{'id':'1','name':'hung1','age':'21'},{'id':'1','name':'hung2','age':'21'}]
}
