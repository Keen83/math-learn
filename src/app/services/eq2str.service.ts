import { Injectable } from '@angular/core';

import { Action } from '../models/Action'
import { Equation, EquationSpec } from '../models/Equation'

@Injectable()
export class Eq2strService {

  constructor() { }

  private getActionSign(act: Action) : string {
    switch (act) {
      case Action.Add:
        return "+";
      case Action.Sub:
        return "-";
      case Action.Mult:
        return "·";
      case Action.Div:
        return ":";
      default:
        throw Error("Not supported action");
    }
  }

  private getEqualSign() : string {
    return "=";
  }

  getEquationSigns(eq: Equation) : string[] {
    var arr = Array(5);
    arr[0] = eq.number1;
    arr[1] = this.getActionSign(eq.action);
    arr[2] = eq.number2;
    arr[3] = this.getEqualSign();
    arr[4] = "";

    return arr;
  }

  getMaxEquationLength(spec: EquationSpec): number {
    if (!spec) return 0;

    switch(spec.action) {
      case Action.Add:
        return spec.maxFirstNumber.toString().length;
      case Action.Sub:
        return spec.maxFirstNumber.toString().length;
      case Action.Mult:
        return (spec.maxFirstNumber * spec.maxSecondNumber).toString().length;
      case Action.Div:
        return (spec.maxFirstNumber * spec.maxSecondNumber).toString().length;
    }
  }

}
