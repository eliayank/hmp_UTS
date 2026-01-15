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
    name = '';
    disabled = true;
    id = "";

    checkLogin() {
        this.sbs
            .login(this.email, this.password)
            .subscribe((response: any) => {
                if (response.result === 'success') {
                    this.email = response.email;
                    this.name = response.name;
                    localStorage.setItem('app_user_id', response.id);
                    localStorage.setItem('app_email', this.email);
                    localStorage.setItem('app_name', this.name);
                    localStorage.setItem('app_is_admin', response.isAdmin);
                    this.router.navigateByUrl('/home', { replaceUrl: true });
                } else {
                    alert(response.message);
                }
            });
    }

    constructor(private router: Router, private sbs: ServiceberitaService) {
        this.email = '';
        this.name = '';
        this.id = '';
    }

    ngOnInit() { }
}
