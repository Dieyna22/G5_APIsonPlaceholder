import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Nos attributs
  emailLogin: string = "";
  passwordLogin: string = "";
  recupUser: any;
  userFound: any;

  // Notre constructeur
  constructor(private route: Router, private userService: ArticleServiceService,) { }


  // Méthode d'initialisation
  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      this.recupUser = users;
      console.log(users);
    })
  }

  connexion() {
   
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if (this.emailLogin == "" || this.passwordLogin == "") {
      this.alertMessage("error", "Attention", "Veillez renseigner tous les champs");
    } else if (!this.emailLogin.match(emailPattern)) {
      this.alertMessage("error", "Attention", "Veillez revoir votre email");
    } else if (this.passwordLogin.length < 5) {
      this.alertMessage("error", "Attention", "Le mot de passe doit contenir plus de huit caractéres");
    } else {
      this.userFound = this.recupUser.find((element: any) => element.emailAdminLogin == this.emailLogin && element.passwordAdminLogin == this.passwordLogin);
    
    }

  }

  // sweetAlert
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500
    });
  }
}
