import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daftar-berita',
  templateUrl: './daftar-berita.page.html',
  styleUrls: ['./daftar-berita.page.scss'],
})
export class DaftarBeritaPage implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.kategori = params['kategori']; //cari kategori from url

      this.daftarBerita = this.berita.filter((item) =>
        item.category.some((k) => k === this.kategori)
      ); //item.category is array, so we use some to check if any category matches
    });
  }

  kategori: string = '';
  daftarBerita: any[] = []; //filtered news list

  //dummy data
  berita = [
    {
      id: 1,
      title: 'Ekonomi Indonesia Tumbuh 5%',
      category: ['Ekonomi'],
      image: 'assets/news/ekonomi1.jpg',
    },
    {
      id: 2,
      title: 'Startup Teknologi Raih Pendanaan',
      category: ['Ekonomi', 'Teknologi'],
      image: 'assets/news/teknologi1.jpg',
    },
    {
      id: 3,
      title: 'Timnas Menang di Final',
      category: ['Olahraga'],
      image: 'assets/news/olahraga1.jpg',
    },
    {
      id: 4,
      title: 'Inovasi AI dalam Pendidikan',
      category: ['Teknologi'],
      image: 'assets/news/teknologi2.jpg',
    },
    {
      id: 5,
      title: 'Inflasi Turun di Kuartal Kedua',
      category: ['Ekonomi'],
      image: 'assets/news/ekonomi1.jpg',
    },
    {
      id: 6,
      title: 'Perkembangan AI Mendukung Ekonomi',
      category: ['Ekonomi', 'Teknologi'],
      image: 'assets/news/teknologi1.jpg',
    },
    {
      id: 7,
      title: 'Pemain Top NBA Asal Indonesia',
      category: ['Olahraga'],
      image: 'assets/news/olahraga1.jpg',
    },
    {
      id: 8,
      title: 'Teknologi 5G Meluas di Indonesia',
      category: ['Teknologi'],
      image: 'assets/news/teknologi2.jpg',
    },
  ];
}
