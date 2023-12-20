import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './components/hijo/hijo.component';
import { PadreComponent } from './components/padre/padre.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    HijoComponent,
    PadreComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComunicationModule { }
