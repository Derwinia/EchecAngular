import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TournoiModel } from 'src/app/models/tournoi.model';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  constructor(
    private _http : HttpClient
  ) { }

  getTournois(): Observable<TournoiModel[]> {
    return this._http.get<TournoiModel[]>(environment.base_url + '/tournoi')
  }

  add(form: any) : Observable<void> {

    return this._http.post<void>(environment.base_url + '/tournoi', form);
  }

  addJoueur(tournoi : string , joueur : string) : Observable<void> {

    return this._http.post<void>(environment.base_url + '/tournoi/addJoueur/', {tournoi : tournoi, joueur : joueur});
  }

  remove(id: string) : Observable<void> {
    return this._http.delete<void>(environment.base_url + '/tournoi/' + id);
  }
}
