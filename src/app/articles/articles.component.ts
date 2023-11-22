import { Component } from '@angular/core';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  recupArticle: any;
  constructor(private articlesService: ArticleServiceService) { }

  searchArticle = '';
  itemSearch: any;

  ngOnInit() {
    this.itemSearch = this.recupArticle;
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.recupArticle = articles;
    })
  }
 voirPlus(article: any) {
  
    console.log(article);
  }
}
