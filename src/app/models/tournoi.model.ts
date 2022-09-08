import { JoueurModel } from './joueur.model';

export interface TournoiModel {
  id : string,
  nom : string,
  lieu : string,
  nbJoueurActuel : number,
  nbJoueurMin : number,
  nbJoueurMax : number,
  eloMin : number,
  eloMax : number,
  dateLimiteInscription : number,
  statut : number,
  categories : string[],
  femmeOnly : boolean,
  resultat: number,
  ronde : number,
  joueurs : Array<JoueurModel>
}
