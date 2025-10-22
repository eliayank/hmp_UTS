import { Component, OnInit } from '@angular/core';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-new-berita',
    templateUrl: './new-berita.page.html',
    styleUrls: ['./new-berita.page.scss'],
})
export class NewBeritaPage implements OnInit {
    public alertButtons = ["Ok"];
    kategori: any[] = [];

    berita:{
        id:number,
        title:string,
        category:string[],
        image:string[],
        rating:string[],
        description:string,
        publishedDate:Date,
        komentar:string[],
        jumlahView:string[],
    } = {
        id: 0,
        title: "",
        category: [],
        image: [],
        rating: [],
        description: '',
        publishedDate: new Date(),
        komentar: [],
        jumlahView: [],
    }

    constructor(private beritaService: ServiceberitaService) { }

    ngOnInit() {
        this.kategori = this.beritaService.getKategori();
    }

    submitBerita() {
        this.berita.id = +this.beritaService.berita.length-1;

        let year = this.berita.publishedDate.getFullYear();
        let month = this.berita.publishedDate.getMonth();
        let day = this.berita.publishedDate.getDay();
        this.berita.publishedDate = new Date(year +"-"+month+"-"+day);
        this.beritaService.tambahBerita(this.berita);
    }
}
