import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lightSwitch-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.css']
})
export class ControlerComponent {

  @Output() isOnChange = new EventEmitter<boolean>();
  public isOn:boolean = false;

  onCheckboxChange() {
    this.isOnChange.emit(this.isOn);
  }

}
