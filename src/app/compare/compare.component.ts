import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DB } from '../db';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  a: any;
  b: any;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.a = DB[params['a']];
      this.b = DB[params['b']];
    });
  }

  ngOnInit() {
  }

}
