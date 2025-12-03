import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from '../serviceberita.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  passwordConf: string = '';

  constructor(private router: Router, private sbs: ServiceberitaService) {}

  ngOnInit() {}

  register() {
    if (!this.name.trim()) {
      alert('Nama harus diisi.');
      return;
    }
    if (/\d/.test(this.name)) {
      alert('Nama tidak boleh mengandung angka.');
      return;
    }

    if (this.password.length < 8) {
      alert('Password minimal 8 karakter.');
      return;
    }

    if (this.password !== this.passwordConf) {
      alert('Konfirmasi password tidak cocok.');
      return;
    }

    this.sbs
      .register(this.email, this.password, this.name)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Account has been created!');
          this.router.navigateByUrl('/login', { replaceUrl: true });
        } else {
          alert(response.message);
        }
      });
  }
}
