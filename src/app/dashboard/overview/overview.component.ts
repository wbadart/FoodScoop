import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  food: object;

  constructor(app: DashboardComponent) {
    this.food = app.food;
  }

  ngOnInit() {
  }

}
