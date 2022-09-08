import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;
  title = 'EchecAngular';
  fg!: FormGroup;
  user: any = {};

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      pseudo: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this._loginService.user$.subscribe({
      next: user => {
        this.isLogged = !!user.token;
        this.user = user
      }
    });
  }

  submit() {
    if(this.fg.invalid)
      return;
    this._loginService.login(this.fg.value).subscribe({
      next: () => this._router.navigate(['/home'])
    });
  }

  logout() {
    this._loginService.logout();
  }
}
