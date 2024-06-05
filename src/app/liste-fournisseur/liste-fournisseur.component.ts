import { Article, Fournisseur } from './../model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { FournisseurService } from '../services/fournisseur.service';
import { UpdateFournisseurComponent } from '../update-fournisseur/update-fournisseur.component';

@Component({
  selector: 'app-liste-fournisseur',
  templateUrl: './liste-fournisseur.component.html',
  styleUrl: './liste-fournisseur.component.css'
})

export class ListeFournisseurComponent implements OnInit {
  fournisseurs: Fournisseur[] = [];
  constructor(private fournisseurService: FournisseurService, private router:Router) { }
  ngOnInit(): void {
    //articles: Article[] = [];
    console.log("Avant Connexion");
    this.refresh();
  }
  refresh() {
    this.fournisseurService.getFournisseur().subscribe(
      (data: Fournisseur[]) => {
        this.fournisseurs = data;
      },
      error => console.log(error)
    );
  }

  updatefournisseur (fournisseur :Fournisseur){
    console.log("erreur 11jhjhjjh")
    this.router.navigate(["updateFour",fournisseur.id]);
  }

  updatefournisseur1 (fournisseur :Fournisseur){
    console.log("erreur 11jhjhjjh")
    this.router.navigate(["updateFour",fournisseur.id]);
    console.log("2222222222222222")
    //this.router.navigate(["updateFour"]);
  }


deleteFournisseur (fournisseur :Fournisseur){
    this.fournisseurService.deleteFournisseur(fournisseur).subscribe(
      data=>{
       // console.log(data);
        this.refresh();
      }
    );

}


}
