
export interface Article {
  id?: number,
  designation: string;
  marque: string;
  prix: any;
  quantite:any;

}
export interface Fournisseur {
  id?: number,
  name: string;
  adress: string;

}
export interface Patient {
  id?: number,
  nom: string;
  prenom: string;
  sexe: string;
  ServiceId: number;
}
