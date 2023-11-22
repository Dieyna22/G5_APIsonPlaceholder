import { Component } from '@angular/core';
import { ArticleServiceService } from '../service/article-service.service';

import { DeleteServiceService } from '../service/delete-service.service';

import { AjoutArticleServiceService } from '../service/ajout-article-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  
})
export class ArticlesComponent {
  recupArticle: any;

  articleId:any;
  AjoutArticle: any;

  constructor(private http : HttpClient,private articlesService: ArticleServiceService, private ajoutArticle: AjoutArticleServiceService,private deleteService:DeleteServiceService) { }

  searchArticle = '';
  itemSearch: any;


  ngOnInit() {
    // this.itemSearch = this.recupArticle;
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.recupArticle =articles;
    })

    console.log(this.envoyerRequete());


  }

 voirPlus(article: any) {
    console.log(article);
  }


  deleteArticle(articleId:any){
    console.log(articleId)
  }
  userId: any;
  userName: any;
  userEmail: any;

  MAJUsers() {
    const urlUser = `https://jsonplaceholder.typicode.com/users/${this.userId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const users = {
      name: this.userName,
      email: this.userEmail
    };
  }

  envoyerRequete() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postData = {
      title: 'titre',
      body: 'lorem ipsum',
      userId: 1,
    };

    this.http.post(url, postData)
      .subscribe((response) => {
        console.log(response);
        return response;
      });
  }
}


 
  
 
 

