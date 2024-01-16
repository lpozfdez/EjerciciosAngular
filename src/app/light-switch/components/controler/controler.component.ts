import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lightSwitch-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.css']
})
export class ControlerComponent {

  @Output() isOnChange = new EventEmitter<boolean>();
  public isOn:boolean = false;

  @Input() selectedColor?: string;

  public opcionesColores: string[]= ['rojo', 'amarillo', 'verde'];

  onCheckboxChange() {
    this.isOnChange.emit(this.isOn);
  }








}
