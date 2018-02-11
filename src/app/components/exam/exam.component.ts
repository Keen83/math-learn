import { Component, OnInit, HostListener } from '@angular/core';
import { Renderer } from '@angular/core';
import { Equation } from '../../models/Equation';
import { Action } from '../../models/Action';
import {EquationGeneratorService} from '../../services/equation-generator.service'
import { Eq2strService } from '../../services/eq2str.service';

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

  constructor(private renderer : Renderer, 
    private equationGeneratorService: EquationGeneratorService,
    private eq2strService: Eq2strService
  ) { }

  ngOnInit() {
    this.startNewEquation();
  }

  startNewEquation() : void {
    this.result = "";
    this.equation = this.equationGeneratorService.getEquation(3, Action.Div);
    this.handler = this.renderer.listen('document', "keydown", event =>{ this.parseInput(event); });
    this.equationSigns = this.eq2strService.getEquationSigns(this.equation);
  }

  private checkResult() {
    console.log(this.equationSigns[4]);
    var res = parseInt(this.equationSigns[4]);
    this.result = res === this.equation.result
      ? "Правильно!"
      : "Неправильно!";
    this.handler();
    var timeoutId = setTimeout(() => { 
      clearTimeout(timeoutId); 
      this.startNewEquation(); }, 1000);
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
}
