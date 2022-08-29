export interface TournoiModel {
    resultat: number;
    id : string,
    name : string,
    place : string,
    nbJoueurActuel : number,
    nbJoueurMin : number,
    nbJoueurMax : number,
    eloMin : number,
    eloMax : number,
    dateLimiteInscription : Date,
    statut : number,
    categories : string[],
    ronde : number
}
