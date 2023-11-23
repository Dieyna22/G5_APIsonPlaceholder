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
    return this.http.get(`${this.apiUrl}`);
  }


  // Méthode pour récupérer un article par son ID
  getArticlesID(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }


   // Méthode pour récupérer les commentaire d'un article 
  getCommentsByArticleID(articleID: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${articleID}/comments`);
  }

  // Méthode pour ajouter un articles
  postArticle(article: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, article);
  }


  // Fonction pour archiver l'article au lieu de le supprimer
  archiverArticle(articleId: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${articleId}`, { archived: true });
  }


   // Méthode pour supprimer un article 
  deleteArticle(articleId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${articleId}`);
  }
  
}

