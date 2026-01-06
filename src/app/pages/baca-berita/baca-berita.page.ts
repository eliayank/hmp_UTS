import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
})
export class BacaBeritaPage implements OnInit {
  id: number = 0;
  berita: any;
  komentar: string = '';
  daftarKomentar: any[] = [];
  ratingUser: number = 0;
  isFavorit: boolean = false;
  isSave: boolean = false;
  userId: number = 0;
  avgRating: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ServiceberitaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.userId = Number(localStorage.getItem('app_user_id'));
      this.service.beritaDetail(this.id).subscribe((res: any) => {
        if (res.result === 'success') {
          this.berita = res;

          this.service
            .getFavorit(this.userId, this.id)
            .subscribe((fav: any) => {
              this.isFavorit = fav.isFav == 1;
            });

          this.service
            .getRatingUser(this.userId, this.id)
            .subscribe((r: any) => {
              this.ratingUser = r.rating;
            });

          this.service.getKomentar(this.id).subscribe((k: any) => {
            this.daftarKomentar = k.data;
          });

          this.service.averageRating(this.id).subscribe((r: any) => {
            this.avgRating = Number(r.avg_rating) || 0;
          });
        }
      });
      // this.berita = this.service.berita.find((b) => b.id == this.id);
      // this.isFavorit = this.service.userData.favorit.some((b) => b.id == this.id);
      // this.isSave = this.service.userData.save.some((b) => b.id == this.id);
      // this.ratingUser = this.service.getRatingUser(this.id);
      // this.daftarKomentar = this.service.getKomentar(this.id);
    });
  }

  kirimKomentar() {
     
    if (this.komentar.trim() != '') {
      // this.service.tambahKomentar(this.id, this.komentar);
      // this.daftarKomentar.push(this.komentar);
      // this.komentar = '';

      this.service
        .tambahKomentar(this.userId, this.id, this.komentar)
        .subscribe(() => {
          // refresh komentar
          this.service.getKomentar(this.id).subscribe((k: any) => {
            this.daftarKomentar = k.data;
          });

          this.komentar = '';
        });
    }
  }

  beriRating(nilai: number) {
    // this.service.beriRating(this.id, nilai, this.berita);
    // this.ratingUser = this.service.getRatingUser(this.id);
    // PERUBAHAN (UAS): simpan rating ke DATABASE
    
    this.service.beriRating(this.userId, this.id, nilai).subscribe(() => {
      this.ratingUser = nilai;
    });

    // refresh avg rating
    this.service.averageRating(this.id).subscribe((r: any) => {
      this.avgRating = Number(r.avg_rating) || 0;
    });
  }

  toggleFavorit() {
    
   
    if (this.isFavorit) {
      this.service.hapusFavorit(this.userId, this.id).subscribe(() => {
        this.isFavorit = false;
      });
      // this.service.hapusFavorit(this.berita.id);
      // this.isFavorit = false;
    } else {
      this.service.tambahFavorit(this.userId, this.id).subscribe(() => {
        this.isFavorit = true;
      });
      // this.service.tambahFavorit(this.berita);
      // this.isFavorit = true;
    }
  }

  isPemilik(): boolean {
    return this.berita?.pembuat == this.userId;
  }

  hapusBerita() {
    if (confirm('Yakin ingin menghapus berita ini?')) {
      this.service.hapusBerita(this.id, this.userId).subscribe((res: any) => {
        if (res.result === 'success') {
          alert('Berita berhasil dihapus');
          this.router.navigateByUrl('/home');
        } else {
          alert(res.message);
        }
      });
    }
  }

  // averageRating(ratingArray: number[]): number {
  //     return 3;
  // }

  saveBerita() {
    console.log(1);
    if (this.isSave) {
      console.log(2);
      console.log(this.berita.id);
      console.log(this.service.userData.save);
      this.service.hapusSave(this.berita.id);
      console.log(this.service.userData.save);
      this.isSave = false;
    } else {
      console.log(3);
      this.service.tambahSave(this.berita);
      this.isSave = true;
    }
    console.log(4);
  }
}
