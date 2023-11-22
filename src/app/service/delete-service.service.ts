import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  private apiUrl='https://jsonplaceholder.typicode.com/posts/'

  constructor(private http: HttpClient) { }

  // deleteArticle(articleId: number): Observable<any> {
  //   const url = `${this.apiUrl}/articles/${articleId}`;
  //   return this.http.delete(url);
  // }
  getuserID(userId:number): Observable<any>{
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
}
