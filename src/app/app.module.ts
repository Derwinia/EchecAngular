import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { TournoiComponent } from './pages/tournoi/tournoi.component';
import { ListTournoiComponent } from './pages/tournoi/list-tournoi/list-tournoi.component';
import { CreateTournoiComponent } from './pages/tournoi/create-tournoi/create-tournoi.component';
import { JoueurComponent } from './pages/joueur/joueur.component';
import { CreateJoueurComponent } from './pages/joueur/create-joueur/create-joueur.component';
import { LoginComponent } from './pages/login/login.component';

import {ConfirmationService} from 'primeng/api';
import { TournoiMenuComponent } from './composants/tournoi-menu/tournoi-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournoiComponent,
    JoueurComponent,
    CreateTournoiComponent,
    ListTournoiComponent,
    LoginComponent,
    CreateJoueurComponent,
    TournoiMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
