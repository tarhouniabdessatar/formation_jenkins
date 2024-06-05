

import { Article, Fournisseur, Patient } from './../model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { FournisseurService } from '../services/fournisseur.service';
import { UpdateFournisseurComponent } from '../update-fournisseur/update-fournisseur.component';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrl: './liste-patient.component.css'
})

export class ListePatientComponent implements OnInit {
  patients: Patient[] = [];
  constructor(private patientService: PatientService, private router:Router) { }
  ngOnInit(): void {
    //articles: Article[] = [];
    console.log("Avant Connexion");
    this.refresh();
  }
  refresh() {
    this.patientService.getPatient().subscribe(
      (data: Patient[]) => {
        this.patients = data;
      },
      error => console.log(error)
    );
  }



  updatefournisseur1 (fournisseur :Fournisseur){
    console.log("erreur 11jhjhjjh")
    this.router.navigate(["updateFour",fournisseur.id]);
    console.log("2222222222222222")
    //this.router.navigate(["updateFour"]);
  }


deleteFournisseur (patient :Patient){
    this.patientService.deletePatient(patient).subscribe(
      data=>{
       // console.log(data);
        this.refresh();
      }
    );

}


}
