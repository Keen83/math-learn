import { Component, OnInit, HostListener } from '@angular/core';
import { Equation } from '../../models/Equation';
import { Action } from '../../models/Action'

import {EquationGeneratorService} from '../../services/equation-generator.service'

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  equation: Equation;
  result: string = "";
  equationSigns: string[];

  constructor(private equationGeneratorService: EquationGeneratorService) { }

  ngOnInit() {
    this.equation = this.getEquation();
    this.equationSigns = this.getEquationSigns(this.equation);
  }

  getEquation(): Equation {
    return this.equationGeneratorService.getEquation(10, Action.Mult);
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

  private checkResult() {
    console.log(this.equationSigns[4]);
    var res = parseInt(this.equationSigns[4]);
    this.result = res === this.equation.result
      ? "Правильно!"
      : "Неправильно!";
  }

  private addSymbol(symbol) {
    this.equationSigns[4] = this.equationSigns[4] + symbol;
  }

  private parseInput(e){
    if (e.keyCode === 13) {
      this.checkResult();
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
