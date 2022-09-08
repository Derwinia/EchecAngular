import { Validators } from '@angular/forms';

export const FormulaireTournoi = {
  nom : ["", [Validators.required , Validators.minLength(4), Validators.maxLength(30)]],
  lieu : [""],
  joueur : [[2, 32]],
  elo : [[0, 3000]],
  categories : [[], [Validators.required]],
  femmeOnly : [false],
  inscriptionLimit : [new Date().toLocaleString('en-US')],
}

