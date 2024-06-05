import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurService } from '../services/fournisseur.service';


@Component({
  selector: 'app-ajout-fournisseur',
  templateUrl: './ajout-fournisseur.component.html',
  styleUrl: './ajout-fournisseur.component.css'
})
export class AjoutFournisseurComponent {



    constructor(private fournisseurService: FournisseurService, private router: Router) { }

    addFournisseur(fournisseurForm:any) {

        let fournisseur = {

         name: fournisseurForm.name,
         adress: fournisseurForm.adress,


       };

    return this.fournisseurService.addFournisseur(fournisseur).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["listeFour"]);
                },
        error => console.log(error)
      );


    }
  }
