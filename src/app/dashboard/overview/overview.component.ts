import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

import { DB } from '../../db';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  food: any;
  db: any;
  sub: any;

  constructor(app: DashboardComponent) {
    this.food = app.food;
    this.db = [];
    for (let id in DB) {
      if (id !== this.food.id) {
        this.db.push(DB[id]);
      }
    }
    this.sub = app.params.subscribe(params => {
      this.food = DB[params['food']];
    });
  }

  ngOnInit() {
  }

}
