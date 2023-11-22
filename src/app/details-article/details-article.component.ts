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
  archivedArticles: any;

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

  
  // archiver(article: Article): void {
  //   // const index = this.tabArticlesUser.indexOf(article);
  //   const index=this.articleDetails
  //   if (index !== -1) {
  //     const archivedArticle = this.articleDetails.splice(index, 1)[0];
  //     this.archivedArticles.push(archivedArticle);
  //     console.log('Article archivé avec succès.');
  //     console.log(this.archivedArticles);

  //     // Envoyer une requête HTTP PUT ou PATCH pour mettre à jour l'article archivé sur l'API JSONPlaceholder
  //     this.http.put(`https://jsonplaceholder.typicode.com/posts/${archivedArticle.id}`, archivedArticle)
  //       .subscribe(() => {
  //         console.log('Article archivé mis à jour avec succès sur l\'API.');
  //       }, (error: any) => {
  //         console.error('Erreur lors de la mise à jour de l\'article archivé sur l\'API :', error);
  //       });
  //   } else {
  //     console.log('Article non trouvé dans la liste.');
  //   }
  // }
}
