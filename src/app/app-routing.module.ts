import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/components/display/display.component';
import { LayoutComponent } from './comunication/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'display' ,
    component: DisplayComponent
  },
  {
    path: 'communication' ,
    //loadChildren: () => import('./comunication/comunication.module').then(m => m.ComunicationModule)
    component: LayoutComponent
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
