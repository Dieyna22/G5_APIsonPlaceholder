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

  inputTitre: string = '';
  inputBody: string = '';


  constructor(private http : HttpClient,private articlesService: ArticleServiceService, private ajoutArticle: AjoutArticleServiceService,private deleteService:DeleteServiceService) { }


  searchArticle = '';
  itemSearch: any;

  ngOnInit() {
    // this.itemSearch = this.recupArticle;
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.recupArticle =articles;
    })

    if (!localStorage.getItem("Articles")) {
      localStorage.setItem("Articles", JSON.stringify(this.recupArticle));
    }
  }

 voirPlus(article: any) {
    console.log(article);
  }


  deleteArticle(articleId:any){
    console.log(articleId)
  }

  userName: any;
  userEmail: any;

  MAJUsers(paramArticle: any) {
    alert(paramArticle);
    const urlArticle = `https://jsonplaceholder.typicode.com/users/${paramArticle}`;
    const putData = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }

    this.http.post(urlArticle, putData)
      .subscribe((response) => {
        console.log(response);
        return response;
      });
    
  }

  // envoyerRequete() {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   const postData = {
  //     title: this.inputTitre,
  //     body: this.inputBody,
  //     userId: 1,
  //   };
  //   this.inputTitre = '',
  //   this.inputBody = '',

  //   this.http.post(url, postData)
  //     .subscribe((response) => {
  //       console.log(response);
  //       return response;
  //     });
  // }

  articleFound() {
    this.itemSearch = this.recupArticle.filter(
      (item: any) => (item?.title.toLowerCase().includes(this.searchArticle.toLowerCase())));
  }

 addArticle = {
    title: this.inputTitre,
    body: this.inputBody,
  };

  ajouterArticle() {
    const titreTemporaire = this.addArticle.title;
    const contenuTemporaire = this.addArticle.body;

    this.ajoutArticle.PostArticle(this.addArticle).subscribe((response: any) => {
      console.log('Réponse du service après ajout d\'article :', response);
      this.recupArticle.push(response); // Ajouter le nouvel article à la liste existante
      // On met à jour le tableau qui est stocké dans le localStorage 
      localStorage.setItem("Articles", JSON.stringify(this.recupArticle));

      this.addArticle = { title: '', body: '' };
    });

    // Afficher les valeurs pour le débogage
    console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
  }
}