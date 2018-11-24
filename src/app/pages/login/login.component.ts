import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { Registro } from 'src/app/shared/models/registro';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  registro: Registro;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.login = new Login();
    this.registro = new Registro();
  }

  efetuarLogin() {
    this.authService.efetuarLogin(this.login);
  }

  efetuarCadastro() {
    this.authService.efetuarCadastro(this.registro);
  }
}
