import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DB } from '../db';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  food: object;
  private sub: any;

  queue: any;

  constructor(private route: ActivatedRoute) {
    this.queue = ['mac', 'kiwi'];
    this.sub = this.route.params.subscribe(params => {
      this.food = DB[params['food']];
    });
  }

  compare(f) {
    // this.queue.unshift(f);
    // console.log(this.queue);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
