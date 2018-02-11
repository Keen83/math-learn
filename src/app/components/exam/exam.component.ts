import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';
import { Equation, EquationSpec } from '../../models/Equation';
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
  spec: EquationSpec;
  @ViewChild('inp') inp:ElementRef;

  constructor(private renderer : Renderer, 
    private equationGeneratorService: EquationGeneratorService,
    private eq2strService: Eq2strService
  ) { }

  ngOnInit() {
    this.startNewEquation();
    this.setInitialFocus();
  }

  setInitialFocus() {
    this.renderer.invokeElementMethod(this.inp.nativeElement, 'focus');
  }

  onBlurMethod() {
    this.setInitialFocus();
  }

  startNewEquation() : void {
    this.result = "";
    this.spec = {
      action: Action.Mult,
      maxFirstNumber: 3,
      maxSecondNumber: 10,
      strict: false
    }
    this.equation = this.equationGeneratorService.getEquation(this.spec);
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
    var maxLength = this.eq2strService.getMaxEquationLength(this.spec);
    
    console.log("Pressed key", e.keyCode);
    if (e.keyCode === 13) {
      this.checkResult();
      return;
    }
    if (e.keyCode === 8)
    {
      this.remLastSymbol();
      return;
    }

    if (this.equationSigns[4].length >= maxLength)
    {
      return;
    }

    if ((e.keyCode >= 48 && e.keyCode <= 57) 
      || (e.keyCode >= 96 && e.keyCode <= 105)) {
      this.addSymbol(e.key);
    }
  }
}
