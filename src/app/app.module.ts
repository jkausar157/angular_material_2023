import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { Blog2Component } from './blogs/blog2/blog2.component';
import { PostComponent } from './blogs/post/post.component';
import { AdminDatatableComponent } from './admin-datatable/admin-datatable.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    Blog2Component,
    PostComponent,
    AdminDatatableComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
