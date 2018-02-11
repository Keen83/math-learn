import {Action} from './Action';

export interface Equation {
    number1: number;
    number2: number;
    result: number;
    action: Action;
}

export interface EquationSpec {
    action: Action,
    maxFirstNumber: number,
    maxSecondNumber?: number,
    strict?: boolean
}