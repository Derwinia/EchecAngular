import { Validators } from '@angular/forms';

export const FormulaireJoueur = {
  pseudo : ["", [Validators.required , Validators.minLength(4), Validators.maxLength(30)]],
  email : ["" , [Validators.required, Validators.email]],
  password : ["", [Validators.required, Validators.minLength(4)]],
  birthday: ["",Validators.required],
  genre : ["", Validators.required],
  elo : [null],
}
