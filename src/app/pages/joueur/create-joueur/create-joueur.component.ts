import { FormulaireJoueur } from 'src/app/formulaires/formulairejoueur';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JoueurService } from 'src/app/services/joueur.service';
import { Genres } from 'src/app/constants/genres';

@Component({
  templateUrl: './create-joueur.component.html',
  styleUrls: ['./create-joueur.component.scss']
})
export class CreateJoueurComponent implements OnInit {

  fg! : FormGroup
  genres : any[] = Genres ;

  constructor(private builder : FormBuilder, private joueurService : JoueurService) {
  };

  ngOnInit(): void {
    this.fg = this.builder.group(FormulaireJoueur)
  }

  validForm() {
    console.log(this.fg.value)
    const values = {...this.fg.value,
    genre: this.fg.get('genre')?.value.code}
    this.joueurService.add(this.fg.value).subscribe()
  }
}

