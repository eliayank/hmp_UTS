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
    daftarBerita: any[] = [];

    constructor(
        private router: Router,
        private serviceberita: ServiceberitaService
    ) { }

    ngOnInit() {
        this.daftarBerita = this.serviceberita.berita;
    }

    ionViewWillEnter() {
        if (!this.checkLogin()) {
            this.router.navigateByUrl('/login', { replaceUrl: true });
        }
    }

    checkLogin(): boolean {
        return localStorage.getItem('loggedIn') === 'true';
    }

    goToBacaBerita(id: number) {
        if (localStorage.getItem("username") != null || localStorage.getItem("username") != "") {
            let username = localStorage.getItem("username")!;
            let hasil = this.serviceberita.tambahJumView(id, username);
            if (hasil == "Not Found") {
                alert("Berita tidak ada")
            }

            this.router.navigate(['/baca-berita', id]);
        } else {
            alert("Harap login terlebih dahulu");
        }
    }

    averageRating(ratingArray: number[]): number {
        return this.serviceberita.averageRating(ratingArray);
    }
}
