import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-kategori',
    templateUrl: './kategori.page.html',
    styleUrls: ['./kategori.page.scss'],
    standalone: false
})
export class KategoriPage implements OnInit {

    constructor(private router: Router, private beritaservice: ServiceberitaService) { }

    goToNewsList(kategori_id: number) {
        this.router.navigate(['/daftar-berita', kategori_id]);
    }

    kategori: any[] = [];

    ngOnInit() {
        this.beritaservice.getKategoris().subscribe(res => {
            this.kategori = res.data;
            for (let kat of this.kategori) {
                kat.nama = kat.nama.charAt(0).toUpperCase() +
  kat.nama.slice(1).toLowerCase();
            }
        });
    }
}