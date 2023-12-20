import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/components/display/display.component';
import { LayoutComponent } from './comunication/components/layout/layout.component';
import { CrudLayoutComponent } from './crud/layout/crud-layout.component';

const routes: Routes = [
  {
    path: 'display' ,
    component: DisplayComponent
  },
  {
    path: 'communication' ,
    component: LayoutComponent
  },
  {
    path: 'crud' ,
    component: CrudLayoutComponent
  },
  {
    path: '**',
    redirectTo: 'display',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
