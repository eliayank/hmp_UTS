import { ServiceberitaService } from './../../serviceberita.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  name= '';
  disabled = true;

  checkLogin() {
    this.sbs
      .login(this.email, this.password)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('success');
          this.email = response.email;
          this.name = response.name;
          localStorage.setItem('app_email', this.email);
          localStorage.setItem('app_name', this.name);
          this.router.navigateByUrl('/home', { replaceUrl: true });
        } else {
          alert(response.message);
        }
      });
  }

  constructor(private router: Router, private sbs: ServiceberitaService) {
    this.email = localStorage.getItem('app_email') ?? '';
    this.name = localStorage.getItem('app_name') ?? '';
  }

  ngOnInit() {}
}
