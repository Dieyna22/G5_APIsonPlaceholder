import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})

export class DetailsArticleComponent {
  // Attribut pour récupérer l'id du post cliqué
  articleId: any;

  // attribut pour afficher les détail d'un article spécifique
  articleDetails: any = {};
  articleDetailsComments: any = {};

  // attributs pour récupérer les commentaires de l'article
    recupComment:any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleServiceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];

      // Pour récuper les détails de l'article
      this.articleService.getArticlesID(this.articleId).subscribe((data:any) => {
        this.articleDetails = data;
      })

      // Appel pour récupérer les commentaires de l'article spécifique
      this.articleService.getCommentsByArticleID(this.articleId).subscribe((comments: any[]) => {
        console.log('Commentaires récupérés :', comments);
        this.articleDetailsComments = comments; 
      });
    });
  }
  // Méthode pour afficher les détails de l'article
  getArticleDetails(id: any) {
    this.articleService.getArticles().subscribe((article: any) => {
      this.articleDetails = article;
    });
  }
}
