import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  publishedDate: Date;
}

@Component({
  selector: 'app-cari-berita',
  templateUrl: './cari-berita.page.html',
  styleUrls: ['./cari-berita.page.scss'],
})
export class CariBeritaPage implements OnInit {

  search: string = '';
  selectedCategory: string = 'semua';
  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  isLoading: boolean = false;

  constructor(private router: Router) { 
    this.loadNews();
  }

  ngOnInit() {
    this.filteredNews = [];
  }

  loadNews() {
    this.allNews = [
      {
        id: 1,
        title: 'Perkembangan AI di Indonesia Semakin Pesat',
        summary: 'Teknologi kecerdasan buatan mulai diterapkan di berbagai sektor industri di Indonesia...',
        content: 'Content lengkap berita AI...',
        image: 'assets/news/teknologi1.jpg',
        category: 'teknologi',
        publishedDate: new Date('2024-10-10'),
      },
      {
        id: 2,
        title: 'Ekonomi Digital Indonesia Tumbuh 20%',
        summary: 'Pertumbuhan ekonomi digital Indonesia mencapai 20% dibandingkan tahun sebelumnya...',
        content: 'Content lengkap berita ekonomi...',
        image: 'assets/news/ekonomi1.jpg',
        category: 'ekonomi',
        publishedDate: new Date('2024-10-09'),
      },
      {
        id: 3,
        title: 'Startup Indonesia Raih Pendanaan Besar',
        summary: 'Beberapa startup teknologi Indonesia berhasil meraih pendanaan dari investor asing...',
        content: 'Content lengkap berita startup...',
        image: 'assets/news/teknologi1.jpg',
        category: 'teknologi',
        publishedDate: new Date('2024-10-08'),
      },
      {
        id: 4,
        title: 'Liga 1 Indonesia Musim Baru Dimulai',
        summary: 'Liga 1 Indonesia musim 2024/2025 resmi dimulai dengan pertandingan pembuka...',
        content: 'Content lengkap berita olahraga...',
        image: 'assets/news/teknologi1.jpg',
        category: 'olahraga',
        publishedDate: new Date('2024-10-07'),
      }
    ];
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
                             news.summary.toLowerCase().includes(term.toLowerCase());
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

  openNews(news: NewsItem) {
    this.router.navigate(['/baca-berita'], { 
      queryParams: { id: news.id } 
    });
  }


}
