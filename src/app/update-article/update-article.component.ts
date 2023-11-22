import { Component } from '@angular/core';
import { DeleteServiceService } from '../service/delete-service.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {

  articleId: number = 1; // Remplacez par l'ID de l'article que vous souhaitez supprimer

  constructor(private articleService: DeleteServiceService) {}

  deleteArticle(articleId: number): void {
    this.articleService.deleteArticle(articleId).subscribe(
      () => {
        console.log('Article supprimé avec succès');
        // Vous pouvez également mettre à jour la liste des articles ici si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'article', error);
      }
    );
}
}
