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

    goToNewsList(namaKategori: string) {
        this.router.navigate(['/daftar-berita', namaKategori]);
    }

    kategori: any[] = [];

    ngOnInit() {
        this.kategori = this.beritaservice.getKategori();        
    }

}
