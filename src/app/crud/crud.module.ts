import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrudLayoutComponent } from './layout/crud-layout.component';
import { RegisterComponent } from './register/register.component';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    CrudLayoutComponent,
    RegisterComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CrudModule { }
