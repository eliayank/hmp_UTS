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

    baseUrl = 'http://103.16.116.155/hybrid/160423191/project/images/';

    kategori!: number;
    daftarBerita: any[] = [];

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.kategori = +params['kategori']; // Ambil ID kategori dari URL

            // Panggil service
            this.serviceberita.getBeritaByKategori(this.kategori)
                .subscribe((res: any) => { // Tambahkan :any untuk fix error kodingan kamu
                    if (res.result === 'success') {
                        this.daftarBerita = res.data;
                    }
                });
        });
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
