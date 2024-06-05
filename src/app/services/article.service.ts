import { Injectable } from '@angular/core';
import { Article } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  constructor(private http:HttpClient) { }

  getArticles()
  {
    return this.http.get<Article[]>("http://localhost:5015/api/Articles");
  }
  getArticleById(idArticle:number)
  {
    return this.http.get<Article>("http://localhost:5015/api/Articles/"+idArticle);
  }
  addArticle(article:Article)
  {
    return this.http.post<Article>("http://localhost:5015/api/Articles", article);
  }
  updateArticle(article:Article)
  {
    return this.http.put<Article>("http://localhost:5015/api/Articles/"+article.id, article);
  }
  deletearticle(article:Article)
    {
    return this.http.delete("http://localhost:5015/api/Articles/"+article.id);
  }
}
