import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab8';
  fibonacciForm = new FormGroup({
    number: new FormControl('', Validators.required),
  });

  result?: string = undefined;

  calculateFibonacci() {
    let value = Number(this.fibonacciForm.get('number')?.value);
    if (Number.isInteger(value) && value >= 0) {
      this.result = Math.round((Math.pow(1.618033988749895, value) - Math.pow(-0.6180339887498949, value)) / 2.23606797749979).toString();
    } else {
      this.result = "Złe dane wejściowe";
    }
  }
}
