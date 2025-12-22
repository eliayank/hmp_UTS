import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
  selector: 'app-new-kategori',
  templateUrl: './new-kategori.page.html',
  styleUrls: ['./new-kategori.page.scss'],
  standalone: false
})
export class NewKategoriPage {

  nama: string = '';
  icon: string = '';

  constructor(
    private beritaService: ServiceberitaService,
    private router: Router
  ) { }

  simpanKategori() {
    if (this.nama.trim() === '') {
      alert('Nama kategori wajib diisi');
      return;
    }

    this.beritaService.tambahKategori(this.nama, this.icon)
      .subscribe((res: any) => {
        if (res.result === 'success') {
          alert('Kategori berhasil ditambahkan');
          this.router.navigate(['/kategori']); // balik ke halaman kategori
        } else {
          alert(res.message || 'Gagal menambah kategori');
        }
      });
  }
}
