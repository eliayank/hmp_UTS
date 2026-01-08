import { Component, OnInit } from '@angular/core';
import { ServiceberitaService } from 'src/app/serviceberita.service';

interface Berita {
    title: string,
    description: string,
    jumView: number,
    pembuatId?: number,
    image: string[],
    category: number[],
}

@Component({
    selector: 'app-new-berita',
    templateUrl: './new-berita.page.html',
    styleUrls: ['./new-berita.page.scss'],
})
export class NewBeritaPage implements OnInit {
    alertButtons: any[] = ["OK"]
    kategori: any[] = [];

    berita: Berita = {
        title: "",
        description: "",
        jumView: 0,
        pembuatId: Number(localStorage.getItem("app_user_id")),
        image: [],
        category: [],
    }

    constructor(private beritaService: ServiceberitaService) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.beritaService.getKategori().subscribe(data => {
            this.kategori = data;
        });
    }

    submitBerita() {
    }
}