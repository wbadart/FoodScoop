import { Component, OnInit } from '@angular/core';
import { mac } from '../mac';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  food = mac;

  constructor() { }

  ngOnInit() {
  }

}
