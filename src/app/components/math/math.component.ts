import { Component, OnInit, ViewChild } from '@angular/core';
import { EquationComponent } from './equation/equation.component';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
