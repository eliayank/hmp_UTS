import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ServiceberitaService {
    berita = [
        {
            id: 1,
            title: 'Ekonomi Indonesia Tumbuh 5%',
            category: ['Ekonomi'],
            image: [
                'assets/news/ekonomi1.jpg',
                'assets/news/ekonomi2.jpg',
                'assets/news/ekonomi3.jpg',
                'assets/news/ekonomi4.jpg',
            ],
            rating: [2, 2, 3, 4, 3],
            description:
                'Perekonomian Indonesia tumbuh 5% pada tahun 2025, didorong oleh ekspor dan konsumsi domestik yang stabil.',
            publishedDate: new Date('2024-10-10'),
            komentar: [
                'Ekonomi lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "aileen"
            ],
        },
        {
            id: 2,
            title: 'Startup Teknologi Raih Pendanaan',
            category: ['Ekonomi', 'Teknologi'],
            image: [
                'assets/news/teknologi1.jpg',
                'assets/news/teknologi2.jpg',
                'assets/news/teknologi3.jpg',
                'assets/news/teknologi4.jpg',
            ],
            rating: [2, 2, 4, 3],
            description:
                'Startup teknologi asal Jakarta mendapat pendanaan seri A senilai 10 juta dolar dari investor internasional.',
            publishedDate: new Date('2024-10-09'),
            komentar: [
                'Teknologi lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
            ],
        },
        {
            id: 3,
            title: 'Timnas Menang di Final',
            category: ['Olahraga'],
            image: [
                'assets/news/olahraga1.jpg',
                'assets/news/olahraga2.jpg',
                'assets/news/olahraga3.jpg',
                'assets/news/olahraga4.jpg',
            ],
            rating: [3, 4, 3],
            publishedDate: new Date('2024-10-08'),
            description:
                'Tim nasional Indonesia meraih kemenangan di final turnamen Asia lewat gol di menit akhir pertandingan.',
            komentar: [
                'Olahraga lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
            ],
        },
        {
            id: 4,
            title: 'Inovasi AI dalam Pendidikan',
            category: ['Teknologi'],
            image: [
                'assets/news/teknologi1.jpg',
                'assets/news/teknologi2.jpg',
                'assets/news/teknologi3.jpg',
                'assets/news/teknologi4.jpg',
            ],
            rating: [5, 4, 5, 4, 3],
            publishedDate: new Date('2024-10-07'),
            description:
                'AI mulai digunakan di dunia pendidikan untuk membantu personalisasi proses belajar siswa di sekolah.',
            komentar: [
                'Teknologi lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
            ],
        },
        {
            id: 5,
            title: 'Inflasi Turun di Kuartal Kedua',
            category: ['Ekonomi'],
            image: [
                'assets/news/ekonomi1.jpg',
                'assets/news/ekonomi2.jpg',
                'assets/news/ekonomi3.jpg',
                'assets/news/ekonomi4.jpg',
            ],
            rating: [2, 4, 3],
            publishedDate: new Date('2024-10-10'),
            description:
                'BPS mencatat inflasi turun pada kuartal kedua karena harga pangan menurun dan nilai tukar stabil.',
            komentar: [
                'Ekonomi lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
            ],
        },
        {
            id: 6,
            title: 'Perkembangan AI Mendukung Ekonomi',
            category: ['Ekonomi', 'Teknologi'],
            image: [
                'assets/news/teknologi1.jpg',
                'assets/news/teknologi2.jpg',
                'assets/news/teknologi3.jpg',
                'assets/news/teknologi4.jpg',
            ],
            rating: [2, 5, 3, 4, 3],
            publishedDate: new Date('2024-10-12'),
            description:
                'Teknologi AI mendorong pertumbuhan ekonomi dengan meningkatkan efisiensi dan produktivitas industri.',
            komentar: [
                'Ekonomi lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing",
            ],
        },
        {
            id: 7,
            title: 'Pemain Top NBA Asal Indonesia',
            category: ['Olahraga'],
            image: [
                'assets/news/olahraga1.jpg',
                'assets/news/olahraga2.jpg',
                'assets/news/olahraga3.jpg',
                'assets/news/olahraga4.jpg',
            ],
            rating: [2, 2, 1],
            publishedDate: new Date('2024-11-27'),
            description:
                'Pemain basket asal Indonesia berhasil masuk ke NBA dan menjadi inspirasi bagi generasi muda.',
            komentar: [
                'Olahraga lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
            ],
        },
        {
            id: 8,
            title: 'Teknologi 5G Meluas di Indonesia',
            category: ['Teknologi'],
            image: [
                'assets/news/teknologi1.jpg',
                'assets/news/teknologi2.jpg',
                'assets/news/teknologi3.jpg',
                'assets/news/teknologi4.jpg',
            ],
            rating: [5],
            publishedDate: new Date('2024-12-07'),
            description:
                'Jaringan 5G kini menjangkau banyak kota besar di Indonesia dan mendukung transformasi digital nasional.',
            komentar: [
                'Teknologi lagi bagus banget tahun ini!',
                'Semoga terus stabil ya.',
            ],
            jumlahView: [
                "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Aileen", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing", "Kucing",
            ],
        },
    ];

    kategori = [
        { id: 1, name: 'Ekonomi', icon: 'cash-outline' },
        { id: 2, name: 'Olahraga', icon: 'football-outline' },
        { id: 3, name: 'Teknologi', icon: 'laptop-outline' }
    ];

    //untuk halaman favorit
    //favorit: any[] = [];
    userData: {
        rating: { [id: number]: number };
        komentar: { [id: number]: string[] };
        favorit: any[];
        save: any[];
    } = { rating: {}, komentar: {}, favorit: [], save: [] };


    constructor(private http: HttpClient) { }

    login(email: string, pw: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const body = new URLSearchParams();
        body.set('email', email);
        body.set('pw', pw);
        const urlEncodedData = body.toString();

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/login.php',
            urlEncodedData,
            { headers }
        );
    }

    register(email: string, pw: string, name: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const body = new URLSearchParams();
        body.set('email', email);
        body.set('pw', pw);
        body.set('name', name);
        const urlEncodedData = body.toString();

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/register.php',
            urlEncodedData,
            { headers }
        );
    }

    averageRating(rating: number[]) {
        if (!rating || rating.length === 0) return 0;
        else {
            let hasil: number = 0;
            rating.forEach((item) => (hasil += item));
            return +(hasil / rating.length).toFixed(1);
        }
    }

    tambahFavorit(berita: any) {
        const sudahAda = this.userData.favorit.find((b) => b.id == berita.id);
        if (!sudahAda) this.userData.favorit.push(berita);
    }

    hapusFavorit(id: number) {
        this.userData.favorit = this.userData.favorit.filter((b) => b.id != id);
    }

    tambahSave(berita: any) {
        const sudahAda = this.userData.save.find((b) => b.id == berita.id);
        if (!sudahAda) this.userData.save.push(berita);
    }

    hapusSave(id: number) {
        this.userData.save = this.userData.save.filter((b) => b.id != id);
    }

    getFavorit() {
        return this.userData.favorit;
    }

    //rating
    beriRating(id: number, nilai: number, berita: any) {
        if (this.userData.rating[id]) return; // sudah pernah rating
        this.userData.rating[id] = nilai;
        berita.rating.push(nilai);
    }
    getRatingUser(id: number) {
        return this.userData.rating[id] || 0;
    }

    // Tambah komentar user
    tambahKomentar(id: number, teks: string) {
        if (!this.userData.komentar[id]) this.userData.komentar[id] = [];
        this.userData.komentar[id].push(teks);
    }

    getKomentar(id: number) {
        const berita = this.berita.find((b) => b.id == id);
        return [...(berita?.komentar || []), ...(this.userData.komentar[id] || [])];
    }

    tambahJumView(id: number, username: string): any {
        for (let i = 0; i < this.berita.length; i++) {
            if (this.berita[i].id == id) {
                let lengthArr = this.berita[i].jumlahView.length;
                for (let j = 0; j < lengthArr; j++) {
                    if (this.berita[i].jumlahView[j] == username) {
                        return 2;
                    }
                }
                this.berita[i].jumlahView.push(username);
                return 2;
            }
        }
        return "Not Found";
    }

    getKategori() {
        return this.kategori;
    }

    tambahBerita(newBerita: any) {
        this.berita.push(newBerita);
    }
}
