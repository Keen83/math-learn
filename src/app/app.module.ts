import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { ExamComponent } from './components/exam/exam.component';
import { SignComponent } from './components/sign/sign.component';

import {EquationGeneratorService} from './services/equation-generator.service'


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    SignComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EquationGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
