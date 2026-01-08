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
        this.beritaservice.getKategori().subscribe(res => {
            this.kategori = res.data;
        });
    }
}