import { Component, OnInit } from '@angular/core';
import { ServiceberitaService } from '../../serviceberita.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.page.html',
    styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
    daftarBerita: any[] = [];

    constructor(private router: Router, private serviceberita: ServiceberitaService) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.daftarBerita = [];
        let tmpDaftarBerita = this.serviceberita.berita;
        // for (let i = 0; i < tmpDaftarBerita.length; i++) {
        //     let tmp = tmpDaftarBerita[i];
        //     for (let j = i + 1; j < tmpDaftarBerita.length; j++) {
        //         if (tmp.jumlahView.length < tmpDaftarBerita[j].jumlahView.length) {
        //             let tmpTop = tmpDaftarBerita[j];
        //             tmpDaftarBerita[j] = tmp;
        //             tmp = tmpTop;

        //         }
        //     }
        //     this.daftarBerita.push(tmp);
        // }


        this.daftarBerita = tmpDaftarBerita.sort((a, b) =>
            b.jumlahView.length - a.jumlahView.length
        );
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
}
