import { GetapiComponent } from './getapi/getapi.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { TodolistComponent } from './todolist/todolist.component';
import { DsLoaispComponent } from './loaisp/dsloaisp/dsloaisp.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import { CreateComponent } from './loaisp/create/create.component';
import { DssanphamComponent } from './sanpham/dssanpham/dssanpham.component';
import { CreateproComponent } from './sanpham/createpro/createpro.component';
import { EditproComponent } from './sanpham/editsp/editsp.component';
import { EditComponent } from './loaisp/edit/edit.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SanphamdetailComponent } from './sanphamdetail/sanphamdetail.component';
import { CartComponent } from './cart/cart.component';
import { SanphamdmComponent } from './sanphamdm/sanphamdm.component';
import { DsnccComponent } from './ncc/dsncc/dsncc.component';
import { AboutComponent } from './home/about/about.component';
import { TintucComponent } from './home/tintuc/tintuc.component';
import { ContactComponent } from './home/contact/contact.component';
import { LoginComponent } from './home/login/login.component';
const routes: Routes = [
  {
    path: 'todo',
    component: TodolistComponent,
    title: 'todo',
  },
  {
    path: 'getapi',
    component: GetapiComponent,
    title: 'todo',
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [{ path: 'loaisp/getall', component: DsLoaispComponent },
    {path:'loaisp/create',component:CreateComponent},
    {path:'loaisp/edit/:id',component:EditComponent},
    {path:'sanpham/getall',component:DssanphamComponent},
    {path:'sanpham/create',component:CreateproComponent},
    {path:'sanpham/edit/:id',component:EditproComponent},
    {path:'ncc/getall',component:DsnccComponent},
    ],
  },
  {
    path: 'home',
    component: LayoutHomeComponent,
    children:[{path:'homepage',component: HomepageComponent},
              {path:'ctsp/:id',component:SanphamdetailComponent},
              {path:'cart',component:CartComponent},
              {path:'spdm/:id',component:SanphamdmComponent},
              {path:'about',component:AboutComponent},
              {path:'tintuc',component:TintucComponent},
              {path:'contact',component:ContactComponent},


  ]

  },
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
