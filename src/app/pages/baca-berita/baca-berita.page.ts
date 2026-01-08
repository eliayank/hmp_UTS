import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-baca-berita',
    templateUrl: './baca-berita.page.html',
    styleUrls: ['./baca-berita.page.scss'],
})
export class BacaBeritaPage implements OnInit {
    id: number = 0;
    berita: any;
    komentar: string = '';
    daftarKomentar: any[] = [];
    ratingUser: number = 0;
    isFavorit: boolean = false;
    isSave: boolean = false;
    userId: number = 0;
    avgRating: number = 0;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: ServiceberitaService
    ) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.route.params.subscribe((params) => {
            this.id = params['id'];
            this.userId = Number(localStorage.getItem('app_user_id'));
            this.service.beritaDetail(this.id).subscribe((res: any) => {
                if (res.result === 'success') {
                    this.berita = res;

                    this.service
                        .getFavorit(this.userId, this.id)
                        .subscribe((fav: any) => {
                            this.isFavorit = fav.isFav == 1;
                        });

                    this.service
                        .getRatingUser(this.userId, this.id)
                        .subscribe((r: any) => {
                            this.ratingUser = r.rating;
                        });

                    this.service.getKomentar(this.id).subscribe((k: any) => {
                        this.daftarKomentar = k.data;
                    });

                    this.service.averageRating(this.id).subscribe((r: any) => {
                        this.avgRating = Number(r.avg_rating) || 0;
                    });
                }
            });
        });
    }

    kirimKomentar() {
        if (this.komentar.trim() != '') {
            this.service
                .tambahKomentar(this.userId, this.id, this.komentar)
                .subscribe(() => {
                    // refresh komentar
                    this.service.getKomentar(this.id).subscribe((k: any) => {
                        this.daftarKomentar = k.data;
                    });

                    this.komentar = '';
                });
        }
    }

    beriRating(nilai: number) {
        // PERUBAHAN (UAS): simpan rating ke DATABASE
        this.service.beriRating(this.userId, this.id, nilai).subscribe(() => {
            this.ratingUser = nilai;

            // refresh avg rating
            this.service.averageRating(this.id).subscribe((r: any) => {
                this.avgRating = Number(r.avg_rating) || 0;
            });
        });
    }

    toggleFavorit() {
        if (this.isFavorit) {
            this.service.hapusFavorit(this.userId, this.id).subscribe(() => {
                this.isFavorit = false;
            });
        } else {
            this.service.tambahFavorit(this.userId, this.id).subscribe(() => {
                this.isFavorit = true;
            });
        }
    }

    isPemilik(): boolean {
        return this.berita?.pembuat == this.userId;
    }

    hapusBerita() {
        if (confirm('Yakin ingin menghapus berita ini?')) {
            this.service.hapusBerita(this.id, this.userId).subscribe((res: any) => {
                if (res.result === 'success') {
                    alert('Berita berhasil dihapus');
                    this.router.navigateByUrl('/home');
                } else {
                    alert(res.message);
                }
            });
        }
    }
}