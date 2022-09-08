import { Component, OnInit } from '@angular/core';
import { statut } from 'src/app/enums/statut.enum';
import { TournoiService } from 'src/app/services/tournoi.service';
import { TournoiModel } from 'src/app/models/tournoi.model';
import { concatMap, exhaustMap, finalize, mergeMap, switchMap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Genres } from 'src/app/constants/genres';
import { JoueurService } from 'src/app/services/joueur.service';
import { JoueurModel } from 'src/app/models/joueur.model';

@Component({
  selector: 'app-list-tournoi',
  templateUrl: './list-tournoi.component.html',
  styleUrls: ['./list-tournoi.component.scss']
})
export class ListTournoiComponent implements OnInit {

  tournois! : TournoiModel[]
  isLoading: boolean = false;
  statut=statut;
  user: any = {};
  ageInscriptionBrut: number = 0;
  joueurConnecte! : JoueurModel;

  constructor(private tournoiService : TournoiService, private loginService: LoginService, private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.tournoiService.getTournois().subscribe(x => this.tournois=x)
    this.user = this.loginService.user$.value
  }

  remove(tournoi: TournoiModel) {
    this.isLoading = true;
    this.tournoiService.remove(tournoi.id).pipe(
      concatMap(() => this.tournoiService.getTournois()),
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: response => this.tournois = response
    });
  }

  inscriptionOK(tournoi: TournoiModel){
    if(this.user.role == 'Membre'){
      if(tournoi.statut == 0){
        for(let i = 0; i < tournoi.joueurs.length; i++){
          if(tournoi.joueurs[i].pseudo == this.user.name) return false
        }
          if(tournoi.dateLimiteInscription > new Date().getTime()){
            if(tournoi.nbJoueurActuel < tournoi.nbJoueurMax){
              if(this.user.elo >= tournoi.eloMin && this.user.elo <= tournoi.eloMax){
                if(tournoi.femmeOnly){
                  if(this.user.gender != Genres[1] && this.user.gender != Genres[2]) return false
                }
                this.ageInscriptionBrut = ((tournoi.dateLimiteInscription - new Date(this.user.dateofbirth).getTime())/1000/60/60/24/365)
                switch(true){
                  case (this.ageInscriptionBrut < 18) :
                    for(let i = 0; i < tournoi.categories.length; i++) {
                      if(tournoi.categories[i] == "Debutant") return true
                    }
                    break;
                    case (this.ageInscriptionBrut < 60) :
                      for(let i = 0; i < tournoi.categories.length; i++) {
                        if(tournoi.categories[i] == "Veteran") return true
                      }
                      break;
                      case (this.ageInscriptionBrut >= 60) :
                        for(let i = 0; i < tournoi.categories.length; i++) {
                          if(tournoi.categories[i] == "Pro") return true
                        }
                        break;
                      }
                    }
                  }
                }
              }
            }

    return false
  }

  inscription(tournoi: TournoiModel){
    this.joueurService.getJoueurById(this.user.id).subscribe({
      next : x => {console.log(x); this.joueurConnecte = x},
      error : e => console.error(e),
      complete: () => {console.log("joueur recupere")
      tournoi.joueurs.push(this.joueurConnecte)
      this.tournoiService.addJoueur(tournoi.id, this.joueurConnecte.id).subscribe({
        next : (x) => {},
        error : e => console.error(e),
        complete: ()=> console.log("inscription realise")
      })
    }
      });

    //tournoi.nbJoueurActuel++
  }

  desinscription(tournoi : TournoiModel){
    if(tournoi.joueurs.find(this.user.name)){
      tournoi.joueurs.splice(this.user.name)
      tournoi.nbJoueurActuel--
    }
  }
}
