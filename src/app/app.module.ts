import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { ExamComponent } from './components/exam/exam.component';
import { SignComponent } from './components/sign/sign.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    SignComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
