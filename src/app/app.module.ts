import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


import { TodolistComponent } from './todolist/todolist.component';
import { GetapiComponent } from './getapi/getapi.component';
import { DsLoaispComponent } from './loaisp/dsloaisp/dsloaisp.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './loaisp/create/create.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';
import { DssanphamComponent } from './sanpham/dssanpham/dssanpham.component';
import { EditComponent } from './loaisp/edit/edit.component';
import { CreateproComponent } from './sanpham/createpro/createpro.component';
import { EditproComponent } from './sanpham/editsp/editsp.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { SanphamdetailComponent } from './sanphamdetail/sanphamdetail.component';
import { CartComponent } from './cart/cart.component';
import { SanphamdmComponent } from './sanphamdm/sanphamdm.component';
import { CreatenccComponent } from './ncc/createncc/createncc.component';
import { DsnccComponent } from './ncc/dsncc/dsncc.component';
import { AboutComponent } from './home/about/about.component';
import { TintucComponent } from './home/tintuc/tintuc.component';
import { ContactComponent } from './home/contact/contact.component';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GetapiComponent,
    DsLoaispComponent,
    AdminComponent,
    CreateComponent,
    LayoutAdminComponent,
    LayoutHomeComponent,
    DssanphamComponent,
    EditComponent,
    CreateproComponent,
    EditproComponent,
    HomepageComponent,
    SanphamdetailComponent,
    CartComponent,
    SanphamdmComponent,
    CreatenccComponent,
    DsnccComponent,
    AboutComponent,
    TintucComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
