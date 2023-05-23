import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';


const declare:any=[
  MatButtonModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatChipsModule,
  MatBadgeModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatDialogModule
 
  
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    declare
  ],
  exports:[
    declare
  ]
})
export class MaterialModule { 

}
