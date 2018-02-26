import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EquationSpec } from '../../models/Equation';
import { Action } from '../../models/Action';


@Component({
  selector: 'app-equation-spec',
  templateUrl: './equation-spec.component.html',
  styleUrls: ['./equation-spec.component.css']
})
export class EquationSpecComponent implements OnInit {
  spec: EquationSpec;

  @Output()
  created: EventEmitter<EquationSpec> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.spec = {
      action: Action.Add,
      maxFirstNumber: 3,
      maxSecondNumber: 10,
      strict: true
    };
  }

  onChange(opt) {
    this.spec.action = parseInt(opt, 10);
    console.log('Action: ' + this.spec.action);
  }

  onFirstNumChange(e: any) {
    this.spec.maxFirstNumber = parseInt(e.srcElement.value, 10);
  }

  onStrictChange(e: any) {
    this.spec.strict = e.srcElement.value;
  }

  specCreated() {
    this.created.emit(this.spec);
  }
}
