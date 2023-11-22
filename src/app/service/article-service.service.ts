import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticlesComponent } from '../articles/articles.component';


@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  apiUrl="https://jsonplaceholder.typicode.com/posts"
  toggleArticleArchive: any;

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les articles
  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


  // Méthode pour récupérer un article par son ID
  getArticlesID(id:number): Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

   // Méthode pour récupérer les commentaire d'un article 
  getCommentsByArticleID(articleID: number): Observable<any[]> {
    // Construire l'URL avec l'id de l'article
    const url = `${this.apiUrl}/${articleID}/comments`; 
    return this.http.get<any[]>(url);
  }


  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // Fonction pour archiver l'article au lieu de le supprimer
archiverArticle(articleId: any): Observable<any> {
  return this.http.patch(`https://jsonplaceholder.typicode.com/posts/${articleId}`, { archived: true });
}

   // Méthode pour supprimer un article 
  deleteArticle(articleId: any): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts/${articleId}`;
    return this.http.delete(url);
  }
  //methode pour archiver un article
  // archiveArticle(articleId: any): Observable<any> {
  //   const url = `https://jsonplaceholder.typicode.com/posts/${articleId}`;
  //   // Vous pouvez utiliser une méthode PATCH pour marquer l'article comme archivé
  //   return this.http.patch(url, { archived: true });
  // }
  
}

