import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {

  daftarFavorit: any[] = [];
  constructor(
    private service: ServiceberitaService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.daftarFavorit = this.service.getFavorit();
  }

  goToDetail(id: number) {
    this.router.navigate(['/baca-berita', id]);
  }

  averageRating(rating: number[]) {
    return 1;
  }
  
}
