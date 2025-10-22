import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-save',
    templateUrl: './save.page.html',
    styleUrls: ['./save.page.scss'],
})
export class SavePage implements OnInit {

    daftarSave: any[] = [];

    constructor(
        private service: ServiceberitaService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.daftarSave = this.service.userData.save;

    }

    goToDetail(id: number) {
        this.router.navigate(['/baca-berita', id]);
    }

    averageRating(rating: number[]) {
        return this.service.averageRating(rating);
    }
}