import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JoueurModel } from '../models/joueur.model';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(
    private _http : HttpClient
  ) { }

  getJoueurById(id : string): Observable<JoueurModel> {
    return this._http.get<JoueurModel>(environment.base_url + '/joueur/' + id)
  }

  add(form: any) : Observable<void> {

    return this._http.post<void>(environment.base_url + '/joueur', form);
  }

  remove(id: string) : Observable<void> {
    return this._http.delete<void>(environment.base_url + '/joueur/' + id);
  }
}
