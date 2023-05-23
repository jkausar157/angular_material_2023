import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


export interface PeriodicElement {
  id: number;
  title:string;
  body: string;
  image: string;
  published: any;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, title:'My Best Blog' , body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image:"https://material.angular.io/assets/img/examples/shiba2.jpg" , published: new Date()},
  {id: 2, title:'My Best Blog' , body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',image: "https://material.angular.io/assets/img/examples/shiba2.jpg", published: new Date()},
  {id: 3, title:'My Best Blog' , body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image:"https://material.angular.io/assets/img/examples/shiba2.jpg" , published:new Date()},
  {id: 4, title:'My Best Blog' , body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image:"https://material.angular.io/assets/img/examples/shiba2.jpg" , published: new Date()},
  {id: 5, title:'My Best Blog' , body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', image:"https://material.angular.io/assets/img/examples/shiba2.jpg" , published: new Date()},
 
];

@Component({
  selector: 'app-admin-datatable',
  templateUrl: './admin-datatable.component.html',
  styleUrls: ['./admin-datatable.component.css']
})



export class AdminDatatableComponent {

  constructor(public dialog:MatDialog){}




  displayedColumns: string[] = ['id', 'title', 'body', 'image', 'published','actions'];
  dataSource = ELEMENT_DATA;

  delete(id:any){
    
   const dialogRef = this.dialog.open(DeleteDialogComponent);
   dialogRef.afterClosed().subscribe(result=>{
    // alert(result);
    if(result=='true'){
      // alert('Yes blog is deleted')
      this.dataSource=this.dataSource.filter(data=>data.id !=id);
    }
   })
  }

}

