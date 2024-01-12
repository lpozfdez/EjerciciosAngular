import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlerComponent } from './components/controler/controler.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';



@NgModule({
  declarations: [
    LightSwitchComponent,
    ControlerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LightSwitchModule { }
