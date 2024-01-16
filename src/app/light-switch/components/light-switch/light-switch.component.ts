import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, from, interval, map, of, sampleTime, takeUntil, takeWhile, tap, timeInterval, timer } from 'rxjs';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css']
})
export class LightSwitchComponent {

  public isOn: boolean = false;
  public colorSelected: string = '';
  public colors: string[]= ['rojo', 'amarillo', 'verde'];
  public colors$ = interval(3000).pipe(
    map(val => this.colors[val % this.colors.length])
  );

  onIsOnChange(value: boolean) {
    this.isOn = value;
    if(this.isOn){
      this.changeColor()
    }
  }

  changeColor(){
    this.colors$.pipe(
      takeWhile(()=>this.isOn)
    ).subscribe(value => {
      this.colorSelected = value
      console.log(value);
    });
  }

  onChangeColour(event: AnimationEvent){
    this.colorSelected = (event.target as HTMLElement).classList[1];
    console.log(this.colorSelected)
  }

}
