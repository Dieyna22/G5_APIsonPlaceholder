import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutArticleServiceService {

  constructor(private http: HttpClient) { }

  // envoyerRequete() {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const postData = {
  //     title: 'titre',
  //     body: 'lorem ipsum',
  //     userId: 1,
  //   };

  //   this.http.post(url, postData)
  //     .subscribe((response) => {
  //       console.error(response);
  //       return response;
  //     });
  // }

  PostArticle(article: any): Observable<any> {
    return this.http.post<any>(`https://jsonplaceholder.typicode.com/posts`, article);
  }
}
