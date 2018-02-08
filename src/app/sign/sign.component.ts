import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  @Input() num: string;
  
  constructor() { }

  ngOnInit() {
  }

}
