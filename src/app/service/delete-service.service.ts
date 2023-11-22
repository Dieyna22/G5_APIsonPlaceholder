import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  constructor(private http: HttpClient) { }

  apiUrl='https://jsonplaceholder.typicode.com/posts/'

  getarticleID(articleId:number){
    const url = `${this.apiUrl}/${articleId}`;
      return this.http.delete(url)
  }
  deleteArticle(articleId: number): Observable<any> {
      const url = `${this.apiUrl}/articles/${articleId}`;
      return this.http.delete(url);

  
    //  

  // private apiUrl='https://jsonplaceholder.typicode.com/posts/'
  // deleteArticle: any;

  // constructor(private http: HttpClient) { }

  // getuserID(articleId:number): Observable<any>{
  //   const url = `${this.apiUrl}/${articleId}`;
  //   return this.http.delete(url);
  // }
  // deleteArticle(articleId: number): Observable<any> {
  //   const url = `${this.apiUrl}/articles/${articleId}`;
  //   return this.http.delete(url);
  // }

}
}
