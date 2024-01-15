import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent {

  public isOn: boolean = false;

  onIsOnChange(value: boolean) {
    this.isOn = value;
  }

}
