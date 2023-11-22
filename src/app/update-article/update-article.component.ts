import { Component } from '@angular/core';
import { DeleteServiceService } from '../service/delete-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  articleId: any;

  constructor(private articleService: DeleteServiceService) {}

  
  

//   deleteArticle(articleId:any){
//     Swal.fire({
//       title: "Etes-vous sur???",
//       text: "Vous allez supprimer l'article",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Oui, je supprime!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         articleId.etatContact = 0;
//         // On met à jour le tableau qui est stocké dans le localStorage 
//         // localStorage.setItem("Users", JSON.stringify(this.tabUsers));
//         // this.verifierChamps("Contact supprimer!", "", "success");     
        
//       }
//       this.articleService.deleteArticle(this.articleId).subscribe()
//     });
  
// }
}
