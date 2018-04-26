import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-comprow]',
  templateUrl: './comprow.component.html',
  styleUrls: ['./comprow.component.css']
})
export class ComprowComponent implements OnInit {

  @Input()
  a: any = 0;
  @Input()
  b: any = 0;

  @Input()
  name: any = '';
  @Input()
  unit: any = '';

  @Input()
  higherbetter = false;

  constructor() { }

  ngOnInit() {
  }

  compare(a, b) {
    const res = a > b;
    return this.higherbetter ? !res : res;
  }

}
