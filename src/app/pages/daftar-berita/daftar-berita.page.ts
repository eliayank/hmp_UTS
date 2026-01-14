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
    kategori_name !: string;
    daftarBerita: any[] = [];

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.kategori = +params['kategori']; // Ambil ID kategori dari URL

            this.serviceberita.getCategoryName(this.kategori)
                .subscribe((res: any) => { 
                    if (res.result === 'success') {
                        this.kategori_name = res.data[0].nama.charAt(0).toUpperCase() +
  res.data[0].nama.slice(1).toLowerCase();
                    }
                });

            // Panggil service
            this.serviceberita.getBeritaByKategori(this.kategori)
                .subscribe((res: any) => { // Tambahkan :any untuk fix error kodingan kamu
                    if (res.result === 'success') {
                        this.daftarBerita = res.data;
                    }
                });
        });
    }

    ionViewWillEnter() {
        const userId = localStorage.getItem("app_user_id");
        if (!userId) {
            alert("Harap login terlebih dahulu");
            this.router.navigate(['/login']);
            return;
        }
    }

    goToBacaBerita(id: number) {
        this.serviceberita.tambahJumView(id).subscribe(response => {
            if (response.result == "error") {
                alert("Berita tidak ada")
                return;
            }

            this.router.navigate(['/baca-berita', id]);
        });
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