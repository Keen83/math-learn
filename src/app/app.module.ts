import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { ExamComponent } from './components/exam/exam.component';
import { SignComponent } from './components/sign/sign.component';

import {EquationGeneratorService} from './services/equation-generator.service';
import { Eq2strService } from './services/eq2str.service';
import { EquationComponent } from './components/equation/equation.component';
import { EquationSpecComponent } from './components/equation-spec/equation-spec.component';
import { AutofocusDirective } from './directives/autofocus.directive'


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    SignComponent,
    EquationComponent,
    EquationSpecComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [EquationGeneratorService, Eq2strService],
  bootstrap: [AppComponent]
})
export class AppModule { }
