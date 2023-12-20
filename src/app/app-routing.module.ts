import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/components/display/display.component';

const routes: Routes = [
  {
    path: 'display' ,
    component: DisplayComponent
  },
  {
    path: '' ,
    redirectTo: 'display',
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
