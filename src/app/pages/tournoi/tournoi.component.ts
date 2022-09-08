import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.scss']
})
export class TournoiComponent implements OnInit {

  user: any = {};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.user$.value
  }

}
