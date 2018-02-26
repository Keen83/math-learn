import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { ExamComponent } from './components/exam/exam.component';
import { SignComponent } from './components/equation/sign/sign.component';

import { EquationGeneratorService } from './services/equation-generator.service';
import { Eq2strService } from './services/eq2str.service';
import { EquationComponent } from './components/equation/equation.component';
import { EquationSpecComponent } from './components/equation-spec/equation-spec.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    SignComponent,
    EquationComponent,
    EquationSpecComponent,
    AutofocusDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EquationGeneratorService, Eq2strService],
  bootstrap: [AppComponent]
})
export class AppModule { }
