import { Component, OnInit, HostListener } from '@angular/core';
import { Renderer } from '@angular/core';
import { Equation } from '../../models/Equation';
import { Action } from '../../models/Action';
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
  handler: Function;

  constructor(private renderer : Renderer, private equationGeneratorService: EquationGeneratorService) { }

  ngOnInit() {
    this.startNewEquation();
  }

  startNewEquation() : void {
    this.equation = this.equationGeneratorService.getEquation(100, Action.Add);
    this.handler = this.renderer.listen('document', "keydown", event =>{ this.parseInput(event); });
    this.equationSigns = this.getEquationSigns(this.equation);
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
    this.handler();
    var timeoutId = setTimeout(() => { clearTimeout(timeoutId); this.startNewEquation(); }, 1000);
  }

  private addSymbol(symbol) {
    this.equationSigns[4] = this.equationSigns[4] + symbol;
  }

  private remLastSymbol() {
    this.equationSigns[4] = this.equationSigns[4].slice(0,-1);
  }

  private parseInput(e){
    console.log("Pressed key", e.keyCode);
    if (e.keyCode === 13) {
      this.checkResult();
    }
    if (e.keyCode === 8)
    {
      this.remLastSymbol();
    }
    if ((e.keyCode >= 48 && e.keyCode <= 57) 
      || (e.keyCode >= 96 && e.keyCode <= 105)) {
      this.addSymbol(e.key);
    }
  }

  // @HostListener('document:keypress', ['$event'])
  // onKeyPress(event: KeyboardEvent) {
  //   console.log("Pressed key", event.keyCode);
  //   this.parseInput(event);
  // }

  //handler = this.renderer.listen('document', "keydown", event =>{ this.parseInput(event); });

  // @HostListener('document:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   console.log("Pressed key", event.keyCode);
  //   this.parseInput(event);
  // }

}
