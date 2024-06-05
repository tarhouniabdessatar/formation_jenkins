

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../model';

@Component({
  selector:'app-update-article',
  templateUrl:'./update-article.component.html',
  styleUrl:'./update-article.component.css'
})
export class UpdateArticleComponent implements OnInit {
  idArticle!:number;
  designation!:string;
  marque!:string;
  prix!:number;
  quantite!:number;
  constructor(private activatedRoute:ActivatedRoute, private articleService:ArticleService, private router: Router)
  {}
  ngOnInit(): void {
// Getting route parameters
    this.activatedRoute.params.subscribe(params => {
      this.idArticle = params['id']; //
    // fin Getting route parameters
      this.articleService.getArticleById(this.idArticle).subscribe(
        data => {
          this.designation = data.designation;
          this.marque = data.marque;
          this.prix = data.prix;
          this.quantite = data.quantite
        }
      );
    });
  }


  saveUpdatedArticle(){
    let article:Article = {
      id:this.idArticle,
      designation:this.designation,
      marque:this.marque,
      prix:this.prix,
      quantite:this.quantite
    }
    this.articleService.updateArticle(article).subscribe(
      data => this.router.navigate(["liste"])
    )
  }
}
