import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from '../serviceberita.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  daftarBerita: any[] = [];

  constructor(
    private router: Router,
    private serviceberita: ServiceberitaService
  ) {}

  ngOnInit() {
    this.serviceberita.beritaList().subscribe((data) => {
      this.daftarBerita = data.data;
      this.daftarBerita.forEach((berita: any) => {
        this.serviceberita.averageRating(berita.id).subscribe((r: any) => {
          berita.avg_rating = r.result === 'success' ? r.avg_rating : null;
        });
      });
    });
  }

  ionViewWillEnter() {
    if (!this.checkLogin()) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
    }
  }

  checkLogin(): boolean {
    return localStorage.getItem('app_name') !== null;
  }

  goToBacaBerita(id: number) {
    if (
      localStorage.getItem('username') != null ||
      localStorage.getItem('username') != ''
    ) {
      let username = localStorage.getItem('username')!;
      let hasil = this.serviceberita.tambahJumView(id, username);
      if (hasil == 'Not Found') {
        alert('Berita tidak ada');
      }

      this.router.navigate(['/baca-berita', id]);
    } else {
      alert('Harap login terlebih dahulu');
    }
  }

  limitWords(text: string, limit: number) {
    let arrKata = text.split(' ');
    if (arrKata.length <= limit) return text;

    let tmp = '';
    for (let i = 0; i < limit; i++) {
      if (i != limit - 1) {
        tmp += arrKata[i] + ' ';
      } else {
        tmp += arrKata[i];
      }
    }
    tmp += '...';

    return tmp;
  }
}
