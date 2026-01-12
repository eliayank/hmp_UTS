import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceberitaService } from 'src/app/serviceberita.service';

@Component({
    selector: 'app-cari-berita',
    templateUrl: './cari-berita.page.html',
    styleUrls: ['./cari-berita.page.scss'],
    standalone: false
})
export class CariBeritaPage implements OnInit {

    search: string = '';
    allNews: any[] = [];
    filteredNews: any[] = [];
    isLoading: boolean = false;

    constructor(private router: Router, private beritaservice: ServiceberitaService) {
    }
    ngOnInit() { 
        this.beritaservice.beritaList().subscribe((res: any) => {
            if (res.result === 'success') {
                this.allNews = res.data;
                this.filteredNews = [];
            }
            this.allNews.forEach((berita: any) => {
                this.beritaservice.getCoverPath(berita.id).subscribe((r: any) => {
                    berita.cover_path = r.result === 'success' ? r.data[0].cover_path : null;
                });
            });
        });
    }

    onSearchInput(event: any) {
        const searchValue = event.target.value.trim();
        this.search = searchValue
        if (searchValue.length > 0) {
            this.performSearch(searchValue);
        } else {
            this.filteredNews = [];
        }
    }

    performSearch(term: string) {
        const keyword = term.toLowerCase();
        this.filteredNews = this.allNews.filter(news =>
            news.title.toLowerCase().includes(keyword) ||
            news.description.toLowerCase().includes(keyword)
        );
    }

    searchByTopic(topic: string) {
        this.search = topic;
        this.performSearch(topic);
    }

    goToBacaBerita(id: number) {
        this.beritaservice.tambahJumView(id).subscribe(response => {
            if (response.result == "error") {
                alert("Berita tidak ada")
                return;
            }

            this.router.navigate(['/baca-berita', id]);
        });
    }
    limitWords(text: string, limit: number): string {
        if (!text) return '';

        const words = text.split(' ');
        if (words.length <= limit) return text;

        return words.slice(0, limit).join(' ') + '...';
    }
}