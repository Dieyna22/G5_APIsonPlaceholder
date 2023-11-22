import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
