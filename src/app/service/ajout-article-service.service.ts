import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutArticleServiceService {

  constructor(private http: HttpClient) { }

  envoyerRequete() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postData = {
      title: 'titre',
      body: 'lorem ipsum',
      userId: 1,
    };

    this.http.post(url, postData)
      .subscribe((response) => {
        console.error(response);
        return response;
      });
  }
}
