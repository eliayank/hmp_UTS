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
    selectedCategory: string = 'semua';
    allNews: any[] = [];
    filteredNews: any[] = [];
    isLoading: boolean = false;

    constructor(private router: Router, private beritaservice: ServiceberitaService) {
    }

    ngOnInit() {
        this.filteredNews = [];
    }

    onSearchInput(event: any) {
        const searchValue = event.target.value.trim();
        this.search = searchValue;

        if (searchValue.length > 0) {
            this.performSearch(searchValue);
        } else {
            this.filteredNews = [];
        }
    }

    performSearch(term: string) {
        this.isLoading = true;

        // Simulate loading delay
        setTimeout(() => {
            this.filteredNews = this.allNews.filter(news => {
                const matchesSearch = news.title.toLowerCase().includes(term.toLowerCase()) ||
                    news.description.toLowerCase().includes(term.toLowerCase());
                const matchesCategory = this.selectedCategory === 'semua' ||
                    news.category === this.selectedCategory;

                return matchesSearch && matchesCategory;
            });

            this.isLoading = false;
        }, 500);
    }

    onCategoryChange(event: any) {
        this.selectedCategory = event.detail.value;
        if (this.search && this.search.length > 0) {
            this.performSearch(this.search);
        }
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

    averageRating(ratingArray: number[]): number {
        return 3;
    }
}