import { Component, OnInit } from '@angular/core';
import { mac } from '../mac';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  food = mac;

  constructor() { }

  ngOnInit() {
  }

}
