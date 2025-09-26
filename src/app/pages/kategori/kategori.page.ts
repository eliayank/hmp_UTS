import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {

  constructor(private router: Router) {}

  goToNewsList(categoryName: string) {
    this.router.navigate(['/news-list', categoryName]);
  }
  categories = [
    { id: 1, name: 'Ekonomi', icon: 'cash-outline' },
    { id: 2, name: 'Olahraga', icon: 'football-outline' },
    { id: 3, name: 'Teknologi', icon: 'laptop-outline' }
  ];
  ngOnInit() {
  }

}
