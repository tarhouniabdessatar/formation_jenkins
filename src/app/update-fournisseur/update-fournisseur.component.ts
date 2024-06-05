import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from '../services/fournisseur.service';
import { Fournisseur } from '../model';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrl: './update-fournisseur.component.css'
})
export class UpdateFournisseurComponent implements OnInit {
  idFournisseur!:number;
  name!:string;
  adress!:string;

  constructor(private activatedRoute:ActivatedRoute, private fournisseurService:FournisseurService, private router: Router)
  {}
  ngOnInit(): void {
    console.log(  "this.idFournisseur")
// Getting route parameters
    this.activatedRoute.params.subscribe(params => {
      this.idFournisseur = params['id']; //
      console.log(  this.idFournisseur)
    // fin Getting route parameters
      this.fournisseurService.getFournisseurById(this.idFournisseur).subscribe(
        data => {
          this.name = data.name;
          this.adress = data.adress;

        }
      );
    });
  }


  saveUpdatedFournisseur(){
    let fournisseur:Fournisseur = {
      id:this.idFournisseur,
      name:this.name,
      adress:this.adress,
          }
    this.fournisseurService.UpdateFournisseur(fournisseur).subscribe(
      data => this.router.navigate(["liste"])
    )
  }
}
