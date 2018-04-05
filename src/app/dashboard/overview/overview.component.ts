import { Component, OnInit } from '@angular/core';
import { mac } from '../mac';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  food = mac;

  constructor() { }

  ngOnInit() {
  }

}
