import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-tournoi-menu',
  templateUrl: './tournoi-menu.component.html',
  styleUrls: ['./tournoi-menu.component.scss']
})
export class TournoiMenuComponent implements OnInit {

  user: any = {};

  fragment!:string|null;

  constructor(private loginService: LoginService, public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.loginService.user$.value
    this.route.url.subscribe(console.log)
  }

}
