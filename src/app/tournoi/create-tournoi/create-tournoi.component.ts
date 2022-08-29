import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tournoi',
  templateUrl: './create-tournoi.component.html',
  styleUrls: ['./create-tournoi.component.scss']
})
export class CreateTournoiComponent implements OnInit {

  fg! : FormGroup

  constructor(private builder : FormBuilder) {

  }

  ngOnInit(): void {
    this.fg = this.builder.group({
      name : ["", [Validators.required , Validators.minLength(4), Validators.maxLength(30)]],
      place : [""],
      minPlayer : [2, [Validators.min(2), Validators.required]],
      maxPlayer : [32, [Validators.max(32), Validators.required]],
      minElo : [0, [Validators.max(0), Validators.required]],
      maxElo : [3000, [Validators.max(3000), Validators.required]],
      categories : [0, [Validators.required]],
      womenOnly : [false],
      inscriptionLimit : [new Date],
    })
  }

  validForm() {
    console.log(this.fg.value)
  }
}
