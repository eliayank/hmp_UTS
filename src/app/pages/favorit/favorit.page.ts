import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-favorit',
    templateUrl: './favorit.page.html',
    styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {

    daftarFavorit: any[] = [];
    userId: number = 0;

    constructor(
        private service: ServiceberitaService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userId = Number(localStorage.getItem('app_user_id'));
    }

    ionViewWillEnter() {
        this.service.getListFavorit(this.userId).subscribe((res: any) => {
            if (res.result === 'success') {
                this.daftarFavorit = res.data;
            } else {
                this.daftarFavorit = [];
            }
        });
    }

    goToDetail(id: number) {
        this.service.tambahJumView(id).subscribe(response => {
            if (response.result == "error") {
                alert("Berita tidak ada")
                return;
            }

            this.router.navigate(['/baca-berita', id]);
        });
    }
}