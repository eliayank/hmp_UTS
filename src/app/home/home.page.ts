import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from '../serviceberita.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  daftarBerita: any[] = this.serviceberita.berita;

  constructor(
    private router: Router,
    private serviceberita: ServiceberitaService
  ) {}

  ionViewWillEnter() {
    if (!this.checkLogin()) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  checkLogin(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  goToBacaBerita(id: number) {
    this.router.navigate(['/baca-berita', id]);
  }

  averageRating(ratingArray: number[]): number {
    return this.serviceberita.averageRating(ratingArray);
  }
}
