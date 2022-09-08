import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/constants/categories';
import { FormulaireTournoi } from 'src/app/formulaires/formulairetournoi';
import { TournoiService } from 'src/app/services/tournoi.service';


@Component({
  selector: 'app-create-tournoi',
  templateUrl: './create-tournoi.component.html',
  styleUrls: ['./create-tournoi.component.scss']
})
export class CreateTournoiComponent implements OnInit {

  fg! : FormGroup
  rangeValues: number[] = [0,32];
  categories : string[] = Categories ;

  constructor(private builder : FormBuilder, private tournoiService : TournoiService) {
  };

  ngOnInit(): void {
    this.fg = this.builder.group(FormulaireTournoi)
  }

  validForm() {
    const values = {...this.fg.value,
      minElo: this.fg.get('elo')?.value[0],
      maxElo: this.fg.get('elo')?.value[1],
      minJoueur: this.fg.get('joueur')?.value[0],
      maxJoueur: this.fg.get('joueur')?.value[1],}
    this.tournoiService.add(values).subscribe()
  }
}

