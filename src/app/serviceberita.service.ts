import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceberitaService {
  berita = [
    {
      id: 1,
      title: 'Ekonomi Indonesia Tumbuh 5%',
      category: ['Ekonomi'],
      image: 'assets/news/ekonomi1.jpg',
      rating: [2, 2, 3, 4, 3],
      description:
        'Perekonomian Indonesia tumbuh 5% pada tahun 2025, didorong oleh ekspor dan konsumsi domestik yang stabil.',
    },
    {
      id: 2,
      title: 'Startup Teknologi Raih Pendanaan',
      category: ['Ekonomi', 'Teknologi'],
      image: 'assets/news/teknologi1.jpg',
      rating: [2, 2, 4, 3],
      description:
        'Startup teknologi asal Jakarta mendapat pendanaan seri A senilai 10 juta dolar dari investor internasional.',
    },
    {
      id: 3,
      title: 'Timnas Menang di Final',
      category: ['Olahraga'],
      image: 'assets/news/olahraga1.jpg',
      rating: [3, 4, 3],
      description:
        'Tim nasional Indonesia meraih kemenangan di final turnamen Asia lewat gol di menit akhir pertandingan.',
    },
    {
      id: 4,
      title: 'Inovasi AI dalam Pendidikan',
      category: ['Teknologi'],
      image: 'assets/news/teknologi2.jpg',
      rating: [5, 4, 5, 4, 3],
      description:
        'AI mulai digunakan di dunia pendidikan untuk membantu personalisasi proses belajar siswa di sekolah.',
    },
    {
      id: 5,
      title: 'Inflasi Turun di Kuartal Kedua',
      category: ['Ekonomi'],
      image: 'assets/news/ekonomi1.jpg',
      rating: [2, 4, 3],
      description:
        'BPS mencatat inflasi turun pada kuartal kedua karena harga pangan menurun dan nilai tukar stabil.',
    },
    {
      id: 6,
      title: 'Perkembangan AI Mendukung Ekonomi',
      category: ['Ekonomi', 'Teknologi'],
      image: 'assets/news/teknologi1.jpg',
      rating: [2, 5, 3, 4, 3],
      description:
        'Teknologi AI mendorong pertumbuhan ekonomi dengan meningkatkan efisiensi dan produktivitas industri.',
    },
    {
      id: 7,
      title: 'Pemain Top NBA Asal Indonesia',
      category: ['Olahraga'],
      image: 'assets/news/olahraga1.jpg',
      rating: [2, 2, 1],
      description:
        'Pemain basket asal Indonesia berhasil masuk ke NBA dan menjadi inspirasi bagi generasi muda.',
    },
    {
      id: 8,
      title: 'Teknologi 5G Meluas di Indonesia',
      category: ['Teknologi'],
      image: 'assets/news/teknologi2.jpg',
      rating: [5],
      description:
        'Jaringan 5G kini menjangkau banyak kota besar di Indonesia dan mendukung transformasi digital nasional.',
    },
  ];
  constructor() {}

  averageRating(rating: number[]) {
    if (!rating || rating.length === 0) return 0;
    return +(rating.reduce((a, b) => a + b, 0) / rating.length).toFixed(1);
  }
}
