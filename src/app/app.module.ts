import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { JoueurComponent } from './joueur/joueur.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTournoiComponent } from './tournoi/create-tournoi/create-tournoi.component';
import { ListTournoiComponent } from './tournoi/list-tournoi/list-tournoi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournoiComponent,
    JoueurComponent,
    CreateTournoiComponent,
    ListTournoiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
