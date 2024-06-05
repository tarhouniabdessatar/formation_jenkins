import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListeFournisseurComponent } from './liste-fournisseur/liste-fournisseur.component';

import { AjoutFournisseurComponent } from './ajout-fournisseur/ajout-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeArticleComponent,
    AjoutArticleComponent,
    UpdateArticleComponent,
    ListeFournisseurComponent,

    AjoutFournisseurComponent,
      UpdateFournisseurComponent,
      ListePatientComponent,
      AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
