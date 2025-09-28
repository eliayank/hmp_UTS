import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ionViewWillEnter() {
    if (!this.checkLogin()) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  checkLogin(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

}
