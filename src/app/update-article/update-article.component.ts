import { Component } from '@angular/core';
import { DeleteServiceService } from '../service/delete-service.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {

  constructor(private articleService: DeleteServiceService) {}
  
  

}
