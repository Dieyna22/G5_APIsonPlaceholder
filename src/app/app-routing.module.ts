import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path:'detailarticle', component:DetailsArticleComponent},
  {path:'article', component:ArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
