import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { ListTournoiComponent } from './tournoi/list-tournoi/list-tournoi.component';
import { CreateTournoiComponent } from './tournoi/create-tournoi/create-tournoi.component';
import { JoueurComponent } from './joueur/joueur.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'tournoi', component : TournoiComponent, children : [
    {path : 'listTournoi', component : ListTournoiComponent},
    {path : 'createTournoi', component : CreateTournoiComponent},
  ]},
  {path : 'joueur', component : JoueurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
