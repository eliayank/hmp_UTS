import { Component, OnInit } from '@angular/core';
import { ServiceberitaService } from '../../serviceberita.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.page.html',
    styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
    daftarBerita: any[] = [];
    pathImages = "https://ubaya.cloud/hybrid/160423191/project/";

    constructor(private router: Router, private serviceberita: ServiceberitaService) { }

    ngOnInit() {}

    ionViewWillEnter() {
        // Mengecek apakah user sudah login
        const userId = localStorage.getItem("app_user_id");
        if (!userId) {
            alert("Harap login terlebih dahulu");
            this.router.navigate(['/login']);
            return;
        }

        // Menampilkan data top view
        this.serviceberita.leaderboardTopView().subscribe(response => {
            console.log(response);
            this.daftarBerita = response.data;
            console.log(this.daftarBerita);
        });
    }

    // Method untuk menampilkan baca berita serta menambah jumlah view berita yang dipilih
    goToBacaBerita(id: number) {
        this.serviceberita.tambahJumView(id).subscribe(response => {
            if (response.result == "error") {
                alert("Berita tidak ada")
                return;
            }

            this.router.navigate(['/baca-berita', id]);
        });
    }
}
