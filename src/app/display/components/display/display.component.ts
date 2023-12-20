import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  title = 'traffic-light';

  button = 'Mostrar';

  openClosedAlert( elemento: HTMLElement ){
    if (elemento.hidden === false) {
      elemento.hidden = true;
      this.button = 'Mostrar';
    } else {
      elemento.hidden = false;
      this.button = 'Ocultar';
    }
  }
}
