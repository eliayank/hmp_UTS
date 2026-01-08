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

    ngOnInit() {
        console.log(localStorage.getItem("app_is_admin"));
        let isAdmin = Number(localStorage.getItem("app_is_admin")) == 1? true: false;    
        console.log(isAdmin);
    }

    ionViewWillEnter() {
        const userId = localStorage.getItem("app_user_id");
        if (!userId) {
            alert("Harap login terlebih dahulu");
            this.router.navigate(['/login']);
            return;
        }

        this.serviceberita.leaderboardTopView().subscribe(response => {
            this.daftarBerita = response.data;
        });
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
}
