import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent implements OnInit {

  user: any = {};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.user$.value
  }

}
