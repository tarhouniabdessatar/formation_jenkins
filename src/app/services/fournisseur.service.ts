import { UpdateFournisseurComponent } from './../update-fournisseur/update-fournisseur.component';


import { Injectable } from '@angular/core';
import { Article, Fournisseur } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService  {

  constructor(private http:HttpClient) { }

  getFournisseur()
  {
    return this.http.get<Fournisseur[]>("http://localhost:5170/api/Fournisseurs");
  }

  deleteFournisseur(fournisseur:Fournisseur)
  {

    return this.http.delete("http://localhost:5170/api/Fournisseurs/" +fournisseur.id);
  }
  addFournisseur(fournisseur:Fournisseur)
  {
    return this.http.post<Fournisseur>("http://localhost:5170/api/Fournisseurs", fournisseur);
  }

  UpdateFournisseur(fournisseur:Fournisseur)
  {
    return this.http.put<Fournisseur>("http://localhost:5170/api/Fournisseurs/"+fournisseur.id, fournisseur);
  }
  getFournisseurById(idFournisseur:number)
  {
    return this.http.get<Fournisseur>("http://localhost:5170/api/Fournisseurs/"+idFournisseur);
  }
}


