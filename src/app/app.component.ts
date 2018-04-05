import { Component, OnInit } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user = {username: '', password: ''};
  error = '';

  login(u) {
      if (users[u.username] !== u.password) {
        this.error = 'Invalid credentials';
      } else {
        this.reset();
      }
  }

  reset() {
    this.error = '';
  }

  constructor() {
  }

  ngOnInit() {
  }
}
