import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Berita {
    title: string,
    description: string,
    pembuatId: number,
    image: string[],
    category: number[],
}

@Injectable({
    providedIn: 'root',
})
export class ServiceberitaService {
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

    beritaList(): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_all_beritas.php'
        );
    }

    beritaDetail(id: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_berita.php?id=' + id
        );
    }

    averageRating(id: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_rating.php?id=' + id
        );
    }

    tambahFavorit(userId: number, beritaId: number): Observable<any> {
        const body = new FormData();
        body.append('user_id', userId.toString());
        body.append('berita_id', beritaId.toString());

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/add_favorit.php',
            body
        );
    }

    hapusFavorit(userId: number, beritaId: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/delete_favorit.php?user_id=' +
            userId +
            '&berita_id=' +
            beritaId
        );
    }

    getFavorit(userId: number, beritaId: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/cek_favorit.php?user_id=' +
            userId +
            '&berita_id=' +
            beritaId
        );
    }

    getListFavorit(userId: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_list_favorit.php?user_id=' +
            userId
        );
    }

    beriRating(
        userId: number,
        beritaId: number,
        rating: number
    ): Observable<any> {
        const body = new FormData();
        body.append('user_id', userId.toString());
        body.append('berita_id', beritaId.toString());
        body.append('rating', rating.toString());

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/add_rating.php',
            body
        );
    }

    getRatingUser(userId: number, beritaId: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_rating_user.php?user_id=' +
            userId +
            '&berita_id=' +
            beritaId
        );
    }

    tambahKomentar(
        userId: number,
        beritaId: number,
        isi: string
    ): Observable<any> {
        const body = new FormData();
        body.append('user_id', userId.toString());
        body.append('berita_id', beritaId.toString());
        body.append('isi', isi);

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/add_komentar.php',
            body
        );
    }

    getKomentar(id: number): Observable<any> {
        // const berita = this.berita.find((b) => b.id == id);
        // return [...(berita?.komentar || []), ...(this.userData.komentar[id] || [])];

        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_komentar.php?berita_id=' +
            id
        );
    }

    tambahJumView(id: number): Observable<any> {
        const body = new FormData();
        body.append('id', id.toString());

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/add_view.php',
            body
        );
    }

    tambahKategori(nama: string, icon: string) {
        // Gunakan FormData karena lebih stabil untuk integrasi dengan PHP $_POST
        const body = new FormData();
        body.append('nama', nama);
        body.append('icon', icon);

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/add_kategori.php',
            body
        );
    }

    getKategori(): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_kategoris.php'
        );
    }

    getBeritaByKategori(kategori_id: number): Observable<any> {
        return this.http.get(
            'https://ubaya.cloud/hybrid/160423191/project/get_beritas_by_kategori.php?kategori=' +
            kategori_id
        );
    }

    tambahBerita(newBerita: Berita) {
        const body = new FormData();
        body.append('title', newBerita.title);
        body.append('description', newBerita.description);
        body.append('pembuatId', newBerita.pembuatId.toString());

        for (let i = 0; i < newBerita.image.length; i++) {
            body.append('image' + i, newBerita.image[i]);
        }

        for (let i = 0; i < newBerita.category.length; i++) {
            body.append('categoryId' + i, newBerita.category[i].toString());
        }

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/add_berita.php',
            body
        );
    }

    hapusBerita(id: number, userId: number): Observable<any> {
        const body = new FormData();
        body.append('id', id.toString());
        body.append('user_id', id.toString());

        return this.http.post(
            'https://ubaya.cloud/hybrid/160423191/project/delete_berita.php',
            body
        );
    }

    leaderboardTopView(): Observable<any> {
        return this.http.get('https://ubaya.cloud/hybrid/160423191/project/leaderboard_top_view.php');
    }
}
