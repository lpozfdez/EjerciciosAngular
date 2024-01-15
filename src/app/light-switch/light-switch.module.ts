import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlerComponent } from './components/controler/controler.component';
import { LightSwitchComponent } from './components/light-switch/light-switch.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LightSwitchComponent,
    ControlerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LightSwitchModule { }
