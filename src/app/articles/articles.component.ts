import { Component } from '@angular/core';
import { ArticleServiceService } from '../service/article-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  
})
export class ArticlesComponent {
  recupArticles: any;
  articleId:any;
  AjoutArticle: any;

  inputTitre: string = '';
  inputBody: string = '';
  
  // Attribut pour la pagination
  articlesParPage = 10; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle

  constructor(private http: HttpClient, private articlesService: ArticleServiceService, private ajoutArticleService: ArticleServiceService, private deleteService: ArticleServiceService) { }

  searchArticle = '';
  itemSearchs: any;


  ngOnInit() {
    // this.itemSearch = this.recupArticle;
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.recupArticles =articles;
    })

    if (!localStorage.getItem("Articles")) {
      localStorage.setItem("Articles", JSON.stringify(this.recupArticles));
    }
  }

 voirPlus(article: any) {
    console.log(article);
  }


  // deleteArticle(articleId:any){
  //   console.log(articleId)
  // }

  userName: any;
  userEmail: any;
  currentArticle: any;
  
  // Methode pour charger les infos de l'article à modifier
  chargerInfosArticle(paramArticle: any) {
    this.currentArticle = paramArticle;
    this.inputTitre = paramArticle.title;
    this.inputBody = paramArticle.body;
  }

  // Methode pour modifier l'article 
  MAJArticle() {
    const titre = this.currentArticle.title = this.inputTitre;
    const body = this.currentArticle.body = this.inputBody;
    const urlArticle = `https://jsonplaceholder.typicode.com/posts/${this.currentArticle}`;
    const putData = {
      id: this.currentArticle,
      title: titre,
      body: body,
      userId: this.currentArticle.userId,
    }

    this.http.put(urlArticle, putData)
      .subscribe((response) => {
        console.log(response);
        return response;
      });
    
  }


  articleFound() {
    this.itemSearchs = this.recupArticles.filter(
      (item: any) => (item?.title.toLowerCase().includes(this.searchArticle.toLowerCase())));
  }

 addArticle = {
    title: this.inputTitre,
    body: this.inputBody,
    
  };

  ajouterArticle() {
    const titreTemporaire = this.addArticle.title;
    const contenuTemporaire = this.addArticle.body;

    this.ajoutArticleService.postArticle(this.addArticle).subscribe((response: any) => {
      console.log('Réponse du service après ajout d\'article :', response);
      this.recupArticles.unshift(response); // Ajouter le nouvel article à la liste existante
      // On met à jour le tableau qui est stocké dans le localStorage 
      localStorage.setItem("Articles", JSON.stringify(this.recupArticles));

      this.addArticle = { title: '', body: '' };
    });

    // Afficher les valeurs pour le débogage
    console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
  }

  // Pour supprimer un article
  deleteArticle(articleId: any) {
    this.deleteService.deleteArticle(articleId).subscribe(() => {
      // Supprimer l'article de la liste des articles
      this.recupArticles = this.recupArticles.filter((article: any) => article.id !== articleId);
    });
  }

  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.recupArticles.slice(indexDebut, indexFin);
  }
   // Méthode pour générer la liste des pages
   get pages(): number[] {
    const totalPages = Math.ceil(this.recupArticles.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.recupArticles.length / this.articlesParPage);
  }

  etatArticle = true;

  toggleArchive(article: any): void {
    this.etatArticle=!this.etatArticle;
    article.etat = article.etat === 'active' ? 'inactive' : 'active';
    
  }
  
}