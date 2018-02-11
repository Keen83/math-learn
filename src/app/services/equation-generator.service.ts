import { Injectable } from '@angular/core';
import { Equation, EquationSpec } from '../models/Equation';
import { Action } from '../models/Action';

@Injectable()
export class EquationGeneratorService {

  constructor() { }

  getRandomIntNumber(min, max) {
    var maxVal = max + 1; // include max value in scope
    return Math.floor(Math.random() * (maxVal - min)) + min;
  }

  getAddEquation(spec: EquationSpec): Equation {
    var number1 = this.getRandomIntNumber(0, spec.maxFirstNumber);
    var number2 = this.getRandomIntNumber(0, spec.maxFirstNumber - number1);
    return {
      number1: number1,
      number2: number2,
      result: number1 + number2,
      action: Action.Add
    }
  };

  getSubEquation(spec: EquationSpec) : Equation {
    var number1 = this.getRandomIntNumber(0, spec.maxFirstNumber);
    var number2 = this.getRandomIntNumber(0, spec.maxFirstNumber - number1);
    return {
      number1: number1 + number2,
      number2: number1,
      result: number2,
      action: Action.Sub
    }
  }

  getMultEquation(spec: EquationSpec) : Equation {
    var number1 = spec.strict 
      ? spec.maxFirstNumber 
      : this.getRandomIntNumber(0, spec.maxFirstNumber);
    var number2 = this.getRandomIntNumber(0,spec.maxSecondNumber);
    
    return {
      number1: number1,
      number2: number2,
      result:  number1 * number2,
      action: Action.Mult
    }
  }

  getDivEquation(spec: EquationSpec) : Equation {
    var number1 = spec.strict 
      ? spec.maxFirstNumber 
      : this.getRandomIntNumber(1, spec.maxFirstNumber);
    var number2 = this.getRandomIntNumber(0, spec.maxSecondNumber);
    
    return {
      number1: number1 * number2,
      number2: number1,
      result: number2,
      action: Action.Div
    }
  }

  getEquation(spec: EquationSpec):Equation {
    switch (spec.action)
    {
      case Action.Add:
        return this.getAddEquation(spec);
      case Action.Sub:
        return this.getSubEquation(spec);
      case Action.Mult:
        return this.getMultEquation(spec);
      case Action.Div:
        return this.getDivEquation(spec);
    }
    
  }
}
