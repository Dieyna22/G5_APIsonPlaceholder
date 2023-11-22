import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from '../service/article-service.service';


@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent {

  articles: any[] = [];
  // Attribut pour récupérer l'id du post cliqué
  articleId: any;

  // attribut pour afficher les détail d'un article spécifique
  articleDetails: any = {};

  // attributs pour récupérer les commentaires
  email:string='';
  comentaire:string='';

  recupComment:any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleServiceService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
      // console.log(this.articleId); 
      this.articleService.getArticlesID(this.articleId).subscribe((data:any) => {
        this.articleDetails = data;
        console.log(this.articleDetails);
      })
      
      // Pour chaque article, récupérer les commentaires correspondants
      this.articles.forEach(article => {
        this.articleService.getCommentsByArticleID(article.id).subscribe(comments => {
          article.comments = comments; // Ajouter les commentaires à chaque article
        });
      });
    });
  }
  getArticleDetails(id: any) {
    this.articleService.getArticles().subscribe((article: any) => {
      this.articleDetails = article; // Mettre à jour les détails de l'article
    }, error => {
      console.error(error); // Gérer les erreurs éventuelles
    });
  }
}
