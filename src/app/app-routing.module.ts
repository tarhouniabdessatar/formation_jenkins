import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';
import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';

const routes: Routes = [

  { path:"add",component: AjoutArticleComponent},
  { path:"liste",component: ListeArticleComponent},
  { path:"updateArticle/:id",component:UpdateArticleComponent},
  { path:"listeFour",component: ListeFournisseurComponent},
  { path:"addFour",component: AjoutFournisseurComponent},
  { path:"updateFour/:id",component: UpdateFournisseurComponent},
  { path:"addPatient",component: AddPatientComponent},
  { path:"listePatient",component: ListePatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
