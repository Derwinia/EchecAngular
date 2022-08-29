import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TournoiModel } from '../models/tournoi.model';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  constructor(
    private _http : HttpClient
  ) { }

  getTournois(): Observable<TournoiModel[]> {
    return this._http.get<TournoiModel[]>('https://localhost:7133/api/tournoi')
  }

}
