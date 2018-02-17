import { Component, OnInit, Input } from '@angular/core';
import { Equation } from '../../models/Equation';
import { Eq2strService } from '../../services/eq2str.service';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  @Input() equationSigns: string[];

  constructor(private eq2strService: Eq2strService) { }

  ngOnInit() { }

}
