import { Component, OnInit } from '@angular/core';
import { statut } from '../../enums/statut.enum';
import { TournoiService } from '../../services/tournoi.service';
import { TournoiModel } from '../../models/tournoi.model';

@Component({
  selector: 'app-list-tournoi',
  templateUrl: './list-tournoi.component.html',
  styleUrls: ['./list-tournoi.component.scss']
})
export class ListTournoiComponent implements OnInit {

  tournois! : TournoiModel[]
  statut=statut;

  constructor(private tournoiService : TournoiService) { }

  ngOnInit(): void {
    this.tournoiService.getTournois().subscribe(x => this.tournois=x)
  }

}
