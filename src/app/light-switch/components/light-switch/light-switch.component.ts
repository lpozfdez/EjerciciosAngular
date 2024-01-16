import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent {

  public isOn: boolean = false;
  public colorSelected: string = '';

  onIsOnChange(value: boolean) {
    this.isOn = value;
  }

  onChangeColour(event: AnimationEvent){
    this.colorSelected = (event.target as HTMLElement).classList[1];
    console.log(this.colorSelected)
  }

}
