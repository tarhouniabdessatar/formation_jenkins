import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrl: './ajout-article.component.css'
})
export class AjoutArticleComponent {



    constructor(private articleService: ArticleService, private router: Router) { }

    addArticle(articleForm:any) {

        let article = {

         designation: articleForm.designation,
         marque: articleForm.marque,
          prix: articleForm.prix,
         quantite: articleForm.quantite,

       };
    //  let article1 = {
    //     code:"1",
      //   designation:"efferallgan",
      //   marque: "cetamol",
    //    prix: 2003,
      //  quantite: 4200,

    //  };
    return this.articleService.addArticle(article).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["liste"]);
                },
        error => console.log(error)
      );


    }
  }
