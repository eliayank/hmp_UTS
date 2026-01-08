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
    ) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        if (!this.checkLogin()) {
            this.router.navigateByUrl('/login', { replaceUrl: true });
        }

        this.serviceberita.beritaList().subscribe((data) => {
            this.daftarBerita = data.data;
            this.daftarBerita.forEach((berita: any) => {
                this.serviceberita.averageRating(berita.id).subscribe((r: any) => {
                    berita.avg_rating = r.result === 'success' ? r.avg_rating : null;
                });
            });
        });
    }

    checkLogin(): boolean {
        return localStorage.getItem('app_name') !== null;
    }

    goToBacaBerita(id: number) {
        this.serviceberita.tambahJumView(id).subscribe(response => {
            if (response.result == "error") {
                alert("Berita tidak ada")
                return;
            }

            this.router.navigate(['/baca-berita', id]);
        });
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
