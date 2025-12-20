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
    daftarKomentar: string[] = [];
    ratingUser: number = 0;
    isFavorit: boolean = false;
    isSave: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: ServiceberitaService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = params['id'];
            this.berita = this.service.berita.find((b) => b.id == this.id);
            this.isFavorit = this.service.userData.favorit.some((b) => b.id == this.id);
            this.isSave = this.service.userData.save.some((b) => b.id == this.id);
            this.ratingUser = this.service.getRatingUser(this.id);
            this.daftarKomentar = this.service.getKomentar(this.id);
        });
    }

    kirimKomentar() {
        if (this.komentar.trim() != '') {
            this.service.tambahKomentar(this.id, this.komentar);
            this.daftarKomentar.push(this.komentar);
            this.komentar = '';
        }
    }

    beriRating(nilai: number) {
        this.service.beriRating(this.id, nilai, this.berita);
        this.ratingUser = this.service.getRatingUser(this.id);
    }

    toggleFavorit() {
        if (this.isFavorit) {
            this.service.hapusFavorit(this.berita.id);
            this.isFavorit = false;
        } else {
            this.service.tambahFavorit(this.berita);
            this.isFavorit = true;
        }
    }
    
    averageRating(ratingArray: number[]): number {
        return 3;
    }
    
    saveBerita() {
        console.log(1);
        if (this.isSave) {
            console.log(2);
            console.log(this.berita.id)
            console.log(this.service.userData.save)
            this.service.hapusSave(this.berita.id);
            console.log(this.service.userData.save)
            this.isSave = false;
        } else {
            console.log(3);
            this.service.tambahSave(this.berita);
            this.isSave = true;
        }
        console.log(4);
    }
}