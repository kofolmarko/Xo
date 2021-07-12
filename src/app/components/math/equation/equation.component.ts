import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent implements OnInit {

  a: number;
  b: number;
  ans: number;

  ansClass: string = "empty";

  constructor() { }

  ngOnInit(): void {
    this.a = Math.floor(Math.random() * 11);
    this.b = Math.floor(Math.random() * 11);
  }

  checkResults() {
    if(this.ans != undefined && 
      this.ans != null 
      && this.ans == this.a * this.b) {
      this.ansClass = "correct";
    } else if(this.ansClass != undefined &&
      this.ans != null) {
      this.ansClass = "wrong";
      console.log(this.a*this.b, this.ans);
    } else {
      this.ansClass = "unanswered";
    }
  }

}
