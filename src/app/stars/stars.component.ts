import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() n: Number;
  stars;

  constructor() { }

  ngOnInit() {
    this.stars = Array(5)
      .fill(0)
      .map((_, i) => i < this.n ? 'fa-star' : 'fa-star-o');
  }

}
