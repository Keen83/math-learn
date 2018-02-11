import { Injectable } from '@angular/core';
import { Equation } from '../models/Equation';
import { Action } from '../models/Action';

@Injectable()
export class EquationGeneratorService {

  constructor() { }

  getRandomIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getAddEquation(maxValue): Equation {
    var number1 = this.getRandomIntNumber(0, maxValue);
    var number2 = this.getRandomIntNumber(0, maxValue - number1);
    return {
      number1: number1,
      number2: number2,
      result: number1 + number2,
      action: Action.Add
    }
  };

  getSubEquation(maxValue) : Equation {
    throw Error("Операція віднімання в розробці");
  }

  getMultEquation(maxValue) : Equation {
    throw Error("Операція множення в розробці");
  }

  getDivEquation(maxValue) : Equation {
    throw Error("Операція множення в розробці");
  }

  getEquation(maxValue: number, action: Action):Equation {
    switch (action)
    {
      case Action.Add:
        return this.getAddEquation(maxValue);
      case Action.Sub:
        return this.getSubEquation(maxValue);
      case Action.Mult:
        return this.getMultEquation(maxValue);
      case Action.Div:
        return this.getDivEquation(maxValue);
    }
    
  }
}
