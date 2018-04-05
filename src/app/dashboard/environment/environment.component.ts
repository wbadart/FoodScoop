import { Component, OnInit } from '@angular/core';
import { mac } from '../mac';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {
  food = mac;

  constructor() { }

  ngOnInit() {
  }

}
