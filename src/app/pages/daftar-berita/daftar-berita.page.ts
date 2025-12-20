import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-daftar-berita',
    templateUrl: './daftar-berita.page.html',
    styleUrls: ['./daftar-berita.page.scss'],
    standalone: false
})
export class DaftarBeritaPage implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute,
        private serviceberita: ServiceberitaService) { }

    ngOnInit() {
        this.serviceberita.beritaList().subscribe((data) => {
      this.daftarBerita = data;
      //this.filteredPastas = this.pastas;
    });

        this.route.params.subscribe((params) => {
            this.kategori = params['kategori'];

            if (this.kategori) {
                this.daftarBerita = this.serviceberita.berita.filter((item) =>
                    item.category.some((k: string) => k === this.kategori)
                );
            } else {
                this.daftarBerita = this.serviceberita.berita;
            }
        });
    }

    kategori: string = '';
    daftarBerita: any[] = [];


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
        return 4;
    }

    limitWords(text: string, limit: number) {
        let arrKata = text.split(" ");
        if (arrKata.length <= limit) return text;

        let tmp = "";
        for (let i = 0; i < limit; i++) {
            if (i != limit - 1) {
                tmp += arrKata[i] + " ";
            } else {
                tmp += arrKata[i];
            }
        }
        tmp += "...";

        return tmp;
    }
}
