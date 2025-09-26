import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daftar-berita',
  templateUrl: './daftar-berita.page.html',
  styleUrls: ['./daftar-berita.page.scss'],
})
export class DaftarBeritaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    }

  kategori: string='';
  daftarBerita:any[]=[];

  //dummy data
  berita = [
    {
      id: 1,
      title: 'Ekonomi Indonesia Tumbuh 5%',
      category: ['Ekonomi'],
      image: 'assets/news/ekonomi1.jpg'
    },
    {
      id: 2,
      title: 'Startup Teknologi Raih Pendanaan',
      category: ['Ekonomi', 'Teknologi'],
      image: 'assets/news/teknologi1.jpg'
    },
    {
      id: 3,
      title: 'Timnas Menang di Final',
      category: ['Olahraga'],
      image: 'assets/news/olahraga1.jpg'
    },
    {
      id: 4,
      title: 'Inovasi AI dalam Pendidikan',
      category: ['Teknologi'],
      image: 'assets/news/teknologi2.jpg'
    }
  ];
}
