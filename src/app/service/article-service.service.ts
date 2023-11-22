import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  apiUrl="https://jsonplaceholder.typicode.com/posts"
  endpointUrl="https://jsonplaceholder.typicode.com/comments";
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

  // Méthode pour recupérer les commentaires
 getCommentsByArticleID(articleID: number): Observable<any[]> {
    const url = `${this.apiUrl}/${articleID}/comments`;
    return this.http.get<any[]>(url);
  }

}
