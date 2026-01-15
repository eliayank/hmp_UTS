import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

interface Berita {
    title: string,
    description: string,
    pembuatId: number,
    image: string[],
    category: number[],
}

@Component({
    selector: 'app-new-berita',
    templateUrl: './new-berita.page.html',
    styleUrls: ['./new-berita.page.scss'],
})
export class NewBeritaPage implements OnInit {
    kategori: any[] = [];
    images: string[] = ["", "", "", ""];
    new_url: string = ''

    berita: Berita = {
        title: "",
        description: "",
        pembuatId: Number(localStorage.getItem("app_user_id")),
        image: [],
        category: [],
    }

    constructor(private beritaService: ServiceberitaService, private router: Router) { }

    ngOnInit() { 
        setInterval(() => {
            console.log(this.images);
        }, 3000);
    }

    ionViewWillEnter() {
        this.beritaService.getKategoris().subscribe(data => {
            this.kategori = data.data;
        });
    }

    submitBerita() {
        if (this.berita.title == "") {
            alert("Harap mengisi title");
            return;
        } else if (!this.berita.category) {
            alert("Harap mengisi kategori");
            return;
        }
        
        for (let i = 0; i < this.images.length; i++) {
            if (this.images[i] != "") {
                this.berita.image.push(this.images[i]);
            }
        }
        
        if (this.berita.image.length == 0) {
            alert("Harap memasukan cover");
            return;
        }
        
        this.beritaService.tambahBerita(this.berita).subscribe(r => {
            if (r.result == "success") {
                alert("Berhasil menambahkan berita");
                this.router.navigateByUrl('/home', { replaceUrl: true });
            } else if (r.result == "Sudah Ada") {
                alert(r.msg);
            } else {
                alert(r.msg);
            }
            this.images = [];
        });
    }
}