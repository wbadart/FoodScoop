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
  params: any;

  queue: any;

  constructor(private route: ActivatedRoute) {
    this.queue = [];
    this.sub = this.route.params.subscribe(params => {
      this.food = DB[params['food']];
    });
    this.params = this.route.params;
  }

  compare(f) {
    if (this.queue.includes(f)) {
      this.queue.splice(this.queue.indexOf(f), 1);
    } else {
      this.queue.push(f);
    }
    document.cookie = JSON.stringify(this.queue);
  }

  ngOnInit() {
    console.log(document.cookie);
    try {
    this.queue = JSON.parse(document.cookie);
    } catch {
      this.queue = [];
    }
  }

  ngOnDestroy() {
  }

}
