import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';
import { Equation, EquationSpec } from '../../models/Equation';
import { Action } from '../../models/Action';
import {EquationGeneratorService} from '../../services/equation-generator.service';
import { Eq2strService } from '../../services/eq2str.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  equation: Equation;
  result = '';
  equationSigns: string[];
  handler: Function;
  @Input() spec: EquationSpec;
  @ViewChild('inp') inp: ElementRef;

  constructor(private renderer: Renderer,
    private equationGeneratorService: EquationGeneratorService,
    private eq2strService: Eq2strService
  ) { }

  ngOnInit() { }

  startExam(spec: EquationSpec) {
    this.spec = spec;
    this.startNewEquation();
  }

  startNewEquation(): void {
    this.result = '';
    this.equation = this.equationGeneratorService.getEquation(this.spec);
    this.handler = this.renderer.listen('document', 'keydown', event => { this.parseInput(event); });
    console.log('Subscribed on start');
    this.equationSigns = this.eq2strService.getEquationSigns(this.equation);
  }

  private checkResult() {
    console.log(this.equationSigns[4]);
    // tslint:disable-next-line:radix
    const res = parseInt(this.equationSigns[4]);
    this.result = res === this.equation.result
      ? 'Правильно!'
      : 'Неправильно!';
    this.handler();
    console.log('Unsubscribed on check');
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
      this.startNewEquation();
      console.log('Starting'); }, 1000);
  }

  private addSymbol(symbol) {
    this.equationSigns[4] = this.equationSigns[4] + symbol;
  }

  private remLastSymbol() {
    this.equationSigns[4] = this.equationSigns[4].slice(0, -1);
  }

  private parseInput(e) {
    const maxLength = this.eq2strService.getMaxEquationLength(this.spec);

    console.log('Pressed key', e.keyCode);
    if (e.keyCode === 13) {
      this.checkResult();
      return;
    }
    if (e.keyCode === 8) {
      this.remLastSymbol();
      return;
    }

    if (this.equationSigns[4].length >= maxLength) {
      return;
    }

    if ((e.keyCode >= 48 && e.keyCode <= 57)
      || (e.keyCode >= 96 && e.keyCode <= 105)) {
      this.addSymbol(e.key);
    }
  }
}
