import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TournoiComponent } from './pages/tournoi/tournoi.component';
import { ListTournoiComponent } from './pages/tournoi/list-tournoi/list-tournoi.component';
import { CreateTournoiComponent } from './pages/tournoi/create-tournoi/create-tournoi.component';
import { JoueurComponent } from './pages/joueur/joueur.component';
import { CreateJoueurComponent } from './pages/joueur/create-joueur/create-joueur.component';
import { LoginComponent } from './pages/login/login.component';
import { TournoiMenuComponent } from './composants/tournoi-menu/tournoi-menu.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'tournoi', component : TournoiComponent, children : [
    {path : 'listTournoi', component : ListTournoiComponent},
    {path : 'createTournoi', component : CreateTournoiComponent},
  ]},
  {path : 'joueur', component : JoueurComponent, children : [
    {path : 'createJoueur', component : CreateJoueurComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
