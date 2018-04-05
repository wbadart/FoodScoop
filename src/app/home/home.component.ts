import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { users } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {username: '', password: ''};
  error = '';
  router: Router;

  login(u) {
      if (users[u.username] !== u.password) {
        this.error = 'Invalid credentials';
      } else {
        this.router.navigate(['dashboard', 'overview']);
      }
  }

  reset() {
    this.error = '';
  }

  constructor(_router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }
}
