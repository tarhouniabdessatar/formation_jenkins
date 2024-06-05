import { Article } from './../model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.css'
})

export class ListeArticleComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService, private router:Router) { }
  ngOnInit(): void {
    //articles: Article[] = [];
    console.log("Avant Connexion");
    this.refresh();
  }
  refresh() {
    this.articleService.getArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;
      },
      error => console.log(error)
    );
  }

  deleteArticle(article :Article){
      this.articleService.deletearticle(article).subscribe(
        data=>{
         // console.log(data);
          this.refresh();
        }
      );
    //this.router.navigate(["addProvider"]);
 }
  updatearticle(article :Article){
  this.router.navigate(["updateArticle",article.id]);
}

  }


