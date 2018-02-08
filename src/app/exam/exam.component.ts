import { Component, OnInit, HostListener } from '@angular/core';
import { Equation } from '../Equation';
import { Action } from '../Action'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  equation: Equation = {
    number1: 122,
    number2: 33,
    result: 155,
    action: Action.Add
  }
  res: string = "";

  equationSigns = this.getEquationSigns(this.equation);

  constructor() { }

  ngOnInit() {
  }

  private getActionSign(act: Action) : string {

    switch (act) {
      case Action.Add:
        return "+";
      case Action.Sub:
        return "-";
      case Action.Mult:
        return "*";
      case Action.Div:
        return ":";
      default:
        throw Error("Not supported action");
    }
  }

  private getEqualSign() : string {
    return "=";
  }

  private getEquationSigns(eq: Equation) : string[] {
    var arr = Array(5);
    arr[0] = eq.number1;
    arr[1] = this.getActionSign(eq.action);
    arr[2] = eq.number2;
    arr[3] = this.getEqualSign();
    arr[4] = "";

    return arr;
  }

  private checkResult(res) {
    console.log(this.equationSigns[4]1);
  }

  private addSymbol(symbol) {
    this.equationSigns[4] = this.equationSigns[4] + symbol;
  }

  private parseInput(e){
    if (e.keyCode === 13) {
      this.checkResult(this.res);
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      this.addSymbol(e.key);
    }
  }

  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    console.log("Pressed key", event.keyCode);
    this.parseInput(event);
  }

}
