import { Component, ViewChild, ContentChildren } from '@angular/core';
import { EquationSpec } from '../models/Equation';
import { ExamComponent } from './exam/exam.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Рахуємо швидко!';
  equationSpec: EquationSpec;
  @ViewChild(ExamComponent) exam: ExamComponent;

  isInExamMode = false;

  onSpecCreated(equationSpec: EquationSpec) {
    this.isInExamMode = true;
    console.log('isInExamMode: ' + this.isInExamMode);
    this.exam.startExam(equationSpec);
  }
}
