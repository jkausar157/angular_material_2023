import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { Blog2Component } from './blogs/blog2/blog2.component';
import { PostComponent } from './blogs/post/post.component';
import { AdminDatatableComponent } from './admin-datatable/admin-datatable.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"blog", component:BlogComponent},
  {path:"blog2", component:Blog2Component},
  {path:"blog/my-best-blog", component:PostComponent},
  {path:"admin/data-table", component:AdminDatatableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
