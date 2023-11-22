import { Component } from '@angular/core';
import { ArticleServiceService } from '../service/article-service.service';
import { AjoutArticleServiceService } from '../service/ajout-article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  recupArticle: any;
  AjoutArticle: any;
  constructor(private articlesService: ArticleServiceService, private ajoutArticle: AjoutArticleServiceService) { }

  searchArticle = '';
  itemSearch: any;

  ngOnInit() {
    this.itemSearch = this.recupArticle;
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.recupArticle = articles;
    })

    console.log(this.ajoutArticle.envoyerRequete()); 
  }
}
