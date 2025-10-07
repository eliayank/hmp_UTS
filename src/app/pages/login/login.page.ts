import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users = [
    {
      username: 'admin',
      password: 'admin',
      active: false,
    },
  ];
  username = '';
  password = '';
  disabled = true;

  checkLogin() {
    var valid = false;
    for (var user of this.users) {
      if (this.username == user.username && this.password == user.password) {
        valid = true;
        user.active = true;
        localStorage.setItem('username', this.username);
        localStorage.setItem('loggedIn', 'true');
        break;
      }
    }
    if (valid) {
      this.router.navigate(['/daftar-berita'], {
        state: { username: this.username },
      });
      this.username = '';
      this.password = '';
    } else {
      alert('Invalid username or password');
    }
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
